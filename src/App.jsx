import './App.scss';
import Timer from './components/Timer/Timer';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => {
  
  return (
    <main className="App">
      <Timer />
      <AddTodo />
    </main>
  );
};

export default App;
