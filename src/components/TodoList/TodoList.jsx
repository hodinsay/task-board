import './TodoList.scss';
import Card from '../UI/Card';

const TodoList = (props) => {
  return (
    <Card className='todos'>
      <h2>Tasks</h2>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            {todo.name} {todo.importance} {todo.urgency} {todo.difficulty}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
