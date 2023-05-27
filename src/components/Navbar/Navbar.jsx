import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOurlineRestaurantMenu} from "react-icons/md";

import images from "../../constants/image";
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'> 
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
  </nav>
);

export default Navbar;
