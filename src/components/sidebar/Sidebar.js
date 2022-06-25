import './Sidebar.css';
import React from 'react';
import { FaEnvira, FaHome, FaFaucet, FaPagelines } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = function() {
  return (
    <div className="side-bar d-flex flex-column text-white justify-content-center">
        <div className="d-flex flex-row justify-content-center align-items-center display-5" style={{flex: 2}}>
            <FaPagelines className='display-5'/>
        </div>
        <div className="d-flex flex-row justify-content-center" style={{flex: 8}}>
            <ul className="nav flex-column" style={{width: '90%'}}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }
                    style={{textDecoration: 'none'}}
                >
                    <li className="nav-item my-2 py-2 px-4 d-flex align-items-center rounded-pill dashboard-btn">
                            <FaHome className='nav-item icon'/>
                            <span className="ps-3">Dashboard</span>
                    </li>
                </NavLink>
                <NavLink
                    to="solution"
                    className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }
                    style={{textDecoration: 'none'}}
                >
                    <li className="nav-item my-2 py-2 px-4 d-flex align-items-center rounded-pill solution-btn">
                        <FaEnvira className='nav-item icon'/>
                        <span className="ps-3">Solution</span>
                    </li>
                </NavLink>
                <NavLink
                    to="environment"
                    className={({ isActive }) =>
                        isActive ? 'active' : undefined
                    }
                    style={{textDecoration: 'none'}}
                >
                    <li className="nav-item my-2 py-2 px-4 d-flex align-items-center rounded-pill environment-btn">
                        <FaFaucet className='nav-item icon'/>
                        <span className="ps-3">Environment</span>
                    </li>
                </NavLink>
            </ul>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center" style={{flex: 1, cursor: 'pointer'}}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="px-2">Logout</span>
        </div>
    </div>
  );
}

export default Sidebar;