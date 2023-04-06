import './Footer.scss';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaHeart} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/hodin81/" target='_blank'><FaLinkedin className='logo'/></a>
            </li>
            <li>
                <a href="https://twitter.com/hodin81" target='_blank'><FaTwitter className='logo'/></a>
            </li>
            <li>
                <a href="https://instagram.com/hodin81" target='_blank'><FaInstagram className='logo'/></a>
            </li>
            <li>
                <a href="https://github.com/hodinsay" target='_blank'><FaGithub className='logo'/></a>
            </li>
        </ul>
        <h2>Made with <FaHeart className='heart'/> by <a href="https://hodinportfolio.netlify.app/" target='_blank' className='din'>Din Ho</a></h2>
        <h6>&copy;Time Attask 2023. All Rights Reserved.</h6>
    </footer>
  );
};

export default Footer;
