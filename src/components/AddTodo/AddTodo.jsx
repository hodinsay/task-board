import { useState } from 'react';
import './AddTodo.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddTodo = (props) => {
    const [enteredTodoName, setEnteredTodoName] = useState('');
    const [enteredImportantValue, setEnteredImportantValue] = useState();
    const [enteredUrgentValue, setEnteredUrgentValue] = useState();
    const [enteredDifficultyValue, setEnteredDifficultyValue] = useState();

    const addTodoHandler = (event) => {
        event.preventDefault();
        if(enteredTodoName.trim().length === 0) return;
        if(!enteredImportantValue || !enteredUrgentValue || !enteredDifficultyValue) return;
        // console.log(enteredTodoName, enteredImportantValue, enteredUrgentValue, enteredDifficultyValue);

        props.onAddTodo(enteredTodoName, enteredImportantValue, enteredUrgentValue, enteredDifficultyValue);
        setEnteredTodoName('');
        setEnteredImportantValue('');
        setEnteredUrgentValue('');
        setEnteredDifficultyValue('');
    };

    const todoNameChangeHandler = (event) => {
        setEnteredTodoName(event.target.value);
    };

    const importantValueChangeHandler = (event) => {
        setEnteredImportantValue(event.target.value);
    };

    const urgentValueChangeHandler = (event) => {
        setEnteredUrgentValue(event.target.value);
    };

    const difficultyValueChangeHandler = (event) => {
        setEnteredDifficultyValue(event.target.value);
    };
    
    return (
        <Card className='form-input'>
            <form onSubmit={addTodoHandler}>
                <label htmlFor="todo-name">Todo-Name: </label>
                <input 
                type="text" 
                id='todo-name'
                value={enteredTodoName} 
                onChange={todoNameChangeHandler}
                />
                <label htmlFor="importance">Importance: </label>
                <select 
                id='importance' 
                onChange={importantValueChangeHandler}
                // defaultValue={'none'}
                value={enteredImportantValue}
                >   
                    <option value="none"></option>
                    <option value="Important">Important</option>
                    <option value="Not Important">Not Important</option>
                </select>
                <label htmlFor="urgency">Urgency: </label>
                <select 
                id='urgency'
                onChange={urgentValueChangeHandler}
                value={enteredUrgentValue}
                >
                    <option value="none"></option>
                    <option value="Urgent">Urgent</option>
                    <option value="Not Urgent">Not Urgent</option>
                </select>
                <label htmlFor="difficulty">Difficulty: </label>
                <select 
                id='difficulty' 
                onChange={difficultyValueChangeHandler}
                value={enteredDifficultyValue}
                >
                    <option value="none"></option>
                    <option value="Elementary">Elementary</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <Button 
                type="submit" 
                className='add-button'>
                    Add Todo
                </Button> 
            </form>
        </Card>
  );
};

export default AddTodo;
