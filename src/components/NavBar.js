import React from 'react';
import swLogo from '../sw-logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://swapi.co">
          <img src={swLogo} alt='Star Wars React Project'/>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu is-active">
        <div className="navbar-start">
        
          <NavLink to='/' className='navbar-item' activeClassName='navbar-item'>Home</NavLink>
          <NavLink to='/planets' className='navbar-item' activeClassName='navbar-item'>Planets</NavLink>
          <NavLink to='/vehicles' className='navbar-item' activeClassName='navbar-item'>Vehicles</NavLink>
          <NavLink to='/species' className='navbar-item' activeClassName='navbar-item'>Species</NavLink>

        </div>
      </div>   
      
    </nav>
  )
}

export default NavBar;