import React, { useState } from 'react';
import {FaUser, FaBriefcase, FaCog } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

import './Nav.css'

function Navbar() {
  const [selectedIcon, setSelectedIcon] = useState('home');

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
  
    <div className="navbar">
      <div className="nav-item active " onClick={() => handleIconClick('home')}>
        <MdDashboard className={selectedIcon === 'home' ? 'selected' : ''} />
      </div>
      <div className="nav-item" onClick={() => handleIconClick('user')}>
        <FaUser className={selectedIcon === 'user' ? 'selected' : ''} />
      </div>
      <div className="nav-item" onClick={() => handleIconClick('briefcase')}>
        <FaBriefcase className={selectedIcon === 'briefcase' ? 'selected' : ''} />
      </div>
      <div className="nav-item" onClick={() => handleIconClick('cog')}>
        <FaCog className={selectedIcon === 'cog' ? 'selected' : ''} />
      </div>
    </div>
  );
}

export default Navbar;
