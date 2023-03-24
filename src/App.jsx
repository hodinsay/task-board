import { useState } from 'react';
import './App.scss';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todosList, setTodosList] = useState([]);

  const addTodoHandler = (todoName, todoImportance, todoUrgency, todoDifficulty) => {
    setTodosList((prevTodosList) => {
      return [...prevTodosList, {name: todoName, importance: todoImportance, urgency: todoUrgency, difficulty: todoDifficulty, id: Math.random().toString()}];
    });
  }
  
  return (
    <main className="App">
      <AddTodo onAddTodo={addTodoHandler}/>
      <TodoList todos={todosList}/>
    </main>
  );
};

export default App;
