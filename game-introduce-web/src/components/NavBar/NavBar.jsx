import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/aboutus" className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">Game R</span>
        </NavLink>

        <ul className="navbar-menu">
          <li>
            <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              Về chúng tôi
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              Hỗ trợ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;