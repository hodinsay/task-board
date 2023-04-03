import './Nav.scss';
import { GiSwordSpin } from 'react-icons/gi';

const Nav = () => {
  return (
    <nav id='nav'>
      <ul>
          <li>
              <a href="#"> <GiSwordSpin className='icon'/> Time Attask</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
