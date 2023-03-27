import { useState } from 'react';
import './App.scss';
import Timer from './components/Timer/Timer';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todosList, setTodosList] = useState([]);

  const addTodoHandler = (todoName, todoImportance, todoUrgency, todoDifficulty) => {
    setTodosList((prevTodosList) => {
      return [...prevTodosList, {name: todoName, importance: todoImportance, urgency: todoUrgency, difficulty: todoDifficulty, id: Math.random().toString()}];
    });
  };

  const taskRemoveHandler = (id) => {
    const newList = todosList.filter((todo) => todo.id !== id);
    setTodosList(newList);
  }
  
  return (
    <main className="App">
      <Timer />
      <AddTodo onAddTodo={addTodoHandler}/>
      <TodoList todos={todosList} onRemove={taskRemoveHandler}/>
    </main>
  );
};

export default App;
