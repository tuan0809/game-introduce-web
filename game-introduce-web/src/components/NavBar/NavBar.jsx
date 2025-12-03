import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Game Introduce
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus" className="navbar-link">
              AboutUs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/support" className="navbar-link">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;