import './App.scss';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  
  return (
    <main className="App">
      <AddTodo />
      <TodoList todos={[]}/>
    </main>
  );
};

export default App;
