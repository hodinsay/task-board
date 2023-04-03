import { useState, useEffect } from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from '../TodoList/TodoList';
import './AddTodo.scss';
import Button from "../UI/Button";

const LOCAL_STORAGE_KEY = 'timeAttasksApp.tasks';

const AddTodo = (props) => {
    const [todosList, setTodosList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storedTasks) {
        setTodosList(storedTasks);
      };
    }, []);

    useEffect(() => {
      // Alternate solution in React.StrictMode but somehow localStorage will store 1 key: value pair after refreshed even if previously removed from the list. 
      // if (todosList.length !== 0) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todosList));

      // Only works if React.StrictMode disabled 
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todosList));
    }, [todosList]);

    const addTodoHandler = (todoName, todoImportance, todoUrgency, todoDifficulty) => {
        setTodosList((prevTodosList) => {
          return [...prevTodosList, {name: todoName, importance: todoImportance, urgency: todoUrgency, difficulty: todoDifficulty, id: Math.random().toString(), complete: false}];
        });
      };
    
    const taskRemoveHandler = (id) => {
        const newList = todosList.filter((todo) => todo.id !== id);
        setTodosList(newList);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    const toggleTodo = (id) => {
      const completedTask = [...todosList];
      const todo = completedTask.find(todo => todo.id === id)
      todo.complete = !todo.complete
      setTodosList(completedTask);
    }

  return (
    <div id='attask'>
        <div className='attask-list'>
            <h2>Attask List</h2>
            <h2> Attask: {todosList.filter(todo => !todo.complete).length}</h2>
        </div>
        <TodoList todos={todosList} onRemove={taskRemoveHandler} toggleTodo={toggleTodo}/>
        {!isEditing && <Button onClick={startEditingHandler} className='add-todo'>+ Add Task</Button>}
        {isEditing && <AddTodoForm onCancel={stopEditingHandler} onAddTodo={addTodoHandler}/>}
    </div>

  );
};

export default AddTodo;
