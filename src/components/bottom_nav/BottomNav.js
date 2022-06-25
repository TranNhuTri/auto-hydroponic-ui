import './BottomNav.css';
import React from 'react';
import { FaEnvira, FaHome, FaFaucet } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomNav = function() {
  return (
    <div className="d-flex h-100 bottom-nav">
      <div className="d-flex justify-content-center align-items-center display-6 h-100" style={{flex: 1,}}>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'active' : undefined
            }
            style={{textDecoration: 'none'}}
        >
          <FaHome className='nav-item icon'/>
        </NavLink>
      </div>
      <div className="d-flex justify-content-center align-items-center display-6 h-100" style={{flex: 1,}}>
        <NavLink
            to="environment"
            className={({ isActive }) =>
                isActive ? 'active' : undefined
            }
            style={{textDecoration: 'none'}}
        >
          <FaEnvira className='nav-item icon'/>
        </NavLink>
      </div>
      <div className="d-flex justify-content-center align-items-center display-6 h-100" style={{flex: 1,}}>
        <NavLink
            to="solution"
            className={({ isActive }) =>
                isActive ? 'active' : undefined
            }
            style={{textDecoration: 'none'}}
        >
          <FaFaucet className='nav-item icon'/>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNav;