import './TodoList.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';

const TodoList = (props) => {

  return (
    <Card className='todos'>
        <h2>Tasks List</h2>
        {props.todos.map((todo) => {
          return(
            <div key={todo.id}>
              <input type='checkbox' id='task' name='task'/> 
              <label htmlFor="task">{todo.name} (<span>{todo.importance} - {todo.urgency} - {todo.difficulty}</span>)</label> 
              <Button className='delete-btn'>Remove</Button>
            </div>
            // <label key={todo.id} htmlFor='task'>
            //     <input type='checkbox' id='task' name='task'/>
            //     {todo.name} (<span>{todo.importance} - {todo.urgency} - {todo.difficulty}</span>)
            //     <Button className='delete-btn'>Remove</Button>
            // </label> 
          );
        })}
    </Card>
  );
};

export default TodoList;
