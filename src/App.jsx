import './App.scss';
import Nav from './components/Nav/Nav';
import Timer from './components/Timer/Timer';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Link } from 'react-scroll';

const App = () => {
  
  return (
    <main id="app">
      <div className='pomodoro'>
        <Nav />
        <Timer />
        <AddTodo />
      </div>
      <About/>
      <div className='top-scroll-container'> 
        <Link 
          to="nav" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500} 
          className='top-scroll'
          href='#nav'
          >
              Back to Top &uarr;
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default App;
