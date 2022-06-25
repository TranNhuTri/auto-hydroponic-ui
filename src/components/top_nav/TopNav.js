import './TopNav.css';
import { FaPagelines } from "react-icons/fa";
import React from 'react';

const TopNav = function() {
  return (
    <div className="d-flex top-nav h-100 justify-content-center align-items-center text-white">
        <FaPagelines className='display-5'/>
    </div>
  );
}

export default TopNav;
