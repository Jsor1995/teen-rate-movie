import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar">
        <span id="logo-navbar">Cringecast</span> 
        <div>
          <span><Link to='/'>Home</Link></span>
          <span><Link to='/about'>About</Link></span>
          <span><Link to='/movie/1'>Movie - ID = 1</Link></span>
          <span>
          <div id="search">
            <input type="text" placeholder="search"/>
          </div>
          </span>
        </div>
    </div>
  )

};

export default Navbar;