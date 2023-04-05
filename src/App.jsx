import './App.scss';
import Nav from './components/Nav/Nav';
import Timer from './components/Timer/Timer';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/About/About';

const App = () => {
  
  return (
    <main id="app">
      <div className='pomodoro'>
        <Nav />
        <Timer />
        <AddTodo />
      </div>
      <About/>
    </main>
  );
};

export default App;
