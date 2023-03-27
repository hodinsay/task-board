import './TodoList.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';

const TodoList = ( props ) => {

  return (
    <Card className='todos'>
        <h2>Attask List</h2>
        {props.todos.map((todo) => {
          return(
            <div key={todo.id}>
              <span>
                <input type='checkbox' id='task' name='task'/> 
                <label htmlFor="task">{todo.name} (<span>{todo.importance} - {todo.urgency} - {todo.difficulty}</span>)</label>
              </span>
    
              <Button className='delete-btn' onClick={() => props.onRemove(todo.id)}>Remove</Button>
            </div>
          );
        })}
    </Card>
  );
};

export default TodoList;
