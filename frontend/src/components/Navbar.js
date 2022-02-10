import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/movie/1'>Movie - ID = 1</Link>
    </div>
  )

};

export default Navbar;