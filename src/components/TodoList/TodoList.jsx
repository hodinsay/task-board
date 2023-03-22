import './TodoList.scss';
import Card from '../UI/Card';

const TodoList = (props) => {
  return (
    <Card className='todos'>
      <ul>
        {props.todos.map(todo => {
          <li>
            {todo.name} ({todo.importance} - {todo.urgency} - {todo.difficulty})
          </li>
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
