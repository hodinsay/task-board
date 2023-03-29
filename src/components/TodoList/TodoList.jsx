import './TodoList.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';

const TodoList = ( props ) => {

  return (
    <div className='todos'>
        {props.todos.map((todo) => {
          return(
            <Card key={todo.id} >
              <span>
                <input type='checkbox' id='task' name='task' checked={todo.complete} onChange={() => props.toggleTodo(todo.id)}/> 
                <label htmlFor="task">{todo.name} (<span className='highlight'>{todo.importance} - {todo.urgency} - {todo.difficulty}</span>)</label>
              </span> 
              <Button className='delete-btn' onClick={() => props.onRemove(todo.id)}>Remove</Button>
            </Card>
          );
        })}
    </div>
  );
};

export default TodoList;
