import './App.scss';
import Nav from './components/Nav/Nav';
import Timer from './components/Timer/Timer';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => {
  
  return (
    <main className="App">
      <Nav />
      <Timer />
      <AddTodo />
    </main>
  );
};

export default App;
