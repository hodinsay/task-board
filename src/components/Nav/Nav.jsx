import './Nav.scss';
import { GiSwordSpin } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav id='nav'>
      <ul>
          <li>
              <a href="https://timeattask.netlify.app"> <GiSwordSpin className='icon'/> Time Attask</a>
          </li>
          <li>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              href='#about'
              >
                  About
            </Link>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
