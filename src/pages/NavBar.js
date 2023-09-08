import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import logo from '../img/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCollapseItemClick = () => {
    setToggle(false);
  };

  return (
    <nav className='navbar font-bold text-xl'>
      <div className="brand">
        <NavLink to="/" className={`${toggle ? 'hide' : 'show'} brand-name nav-item text-xl`}>
          <img className="logo" src={logo} alt="logo" Label="Anna Tayo" />
          <h3>Anna Tayo</h3>
        </NavLink>
      </div>
      <div className='nav-links text-lg'>
        <ul className='nav-items'>
          <NavItem exact to="/" label="Home" />
          <NavItem to="/about-me" label="About" />
          <NavItem to="/my-techstack" label="My Tech Stack" />
          <NavItem to="/projects" label="My Projects" />
        </ul>
      </div>
      <div className='burger'>
        <button className='hamburger' onClick={handleToggle}>
          <GiHamburgerMenu />
        </button>
        <ul className={`${toggle ? 'show' : 'hide'} collapsing text-center`}>
          <NavCollapse exact to="/" label="Home" onClick={handleCollapseItemClick} />
          <NavCollapse to="/about-me" label="About" onClick={handleCollapseItemClick} />
          <NavCollapse to="/my-techstack" label="My Tech Stack" onClick={handleCollapseItemClick} />
          <NavCollapse to="/projects" label="My Projects" onClick={handleCollapseItemClick} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, exact }) => (
  <li>
    <NavLink exact={exact} to={to} className='nav-link'>
      {label}
    </NavLink>
  </li>
);

const NavCollapse = ({ to, label, exact, onClick }) => (
  <li>
    <NavLink exact={exact} to={to} className='collapse-link' onClick={onClick} style={{ margin: '0.75rem auto' }}>
      {label}
    </NavLink>
  </li>
);

export default NavBar;
