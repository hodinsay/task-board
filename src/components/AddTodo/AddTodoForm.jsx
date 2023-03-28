import { useState } from 'react';
import './AddTodoForm.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddTodo = (props) => {
    const [enteredTodoName, setEnteredTodoName] = useState('');
    const [enteredImportantValue, setEnteredImportantValue] = useState();
    const [enteredUrgentValue, setEnteredUrgentValue] = useState();
    const [enteredDifficultyValue, setEnteredDifficultyValue] = useState();
    const [error, setError] = useState();

    const addTodoHandler = (event) => {
        event.preventDefault();
        if(enteredTodoName.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message: 'Please enter a task name.'
            })
            return;
        }
        if(!enteredImportantValue) {
            setError({
                title: 'Invalid Importance Option',
                message: 'Please select a valid importance option.'
            })
            return;
        }
        if(!enteredUrgentValue) {
            setError({
                title: 'Invalid Urgency Option',
                message: 'Please select a valid urgency option.'
            })
            return;
        }
        if(!enteredDifficultyValue) {
            setError({
                title: 'Invalid Difficulty Option',
                message: 'Please select a valid difficulty option.'
            })
            return;
        }

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

    const errorHandler = () => {
        setError(null);
    };
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className='form-input'>
                <form onSubmit={addTodoHandler}>
                    <label htmlFor="todo-name">Task: </label>
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
                        Add Task
                    </Button>
                    <Button
                    type='button'
                    onClick={props.onCancel}
                    >
                        Cancel      
                    </Button> 
                </form>
            </Card>
        </div>
  );
};

export default AddTodo;
