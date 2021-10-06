import { Link } from 'react-router-dom';
const MainNavigation = () => {
  return (
    <nav className='main-navigation'>
      <Link to='/' className='navigation-link'>
        Home
      </Link>
      <Link to='/about' className='navigation-link'>
        About
      </Link>
      <Link to='/contact' className='navigation-link'>
        Contact
      </Link>
    </nav>
  );
};

export default MainNavigation;
