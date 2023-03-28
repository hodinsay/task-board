import {useState} from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoList from '../TodoList/TodoList';
import './AddTodo.scss';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddTodo = (props) => {
    const [todosList, setTodosList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const addTodoHandler = (todoName, todoImportance, todoUrgency, todoDifficulty) => {
        setTodosList((prevTodosList) => {
          return [...prevTodosList, {name: todoName, importance: todoImportance, urgency: todoUrgency, difficulty: todoDifficulty, id: Math.random().toString()}];
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

  return (
    <div>
        <div className='attask-list'>
            <h2>Attask List</h2>
            <hr />
        </div>
        <TodoList todos={todosList} onRemove={taskRemoveHandler}/>
        {!isEditing && <Button onClick={startEditingHandler} className='add-todo'>Add New Task</Button>}
        {isEditing && <AddTodoForm onCancel={stopEditingHandler} onAddTodo={addTodoHandler}/>}
        <Card className='task-number'>
            <h2>{todosList.length} Attask Left </h2>
        </Card>
    </div>

  );
};

export default AddTodo;
