import './App.css';
import React from 'react';
import TopNav from './components/top_nav/TopNav';
import BottomNav from './components/bottom_nav/BottomNav';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dasboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Environment from './environment/Environment';
import Solution from './components/solution/Solution';

function App() {
  return (
    <div className="vh-100 d-flex flex-column" style={{padding: 0}}>
        <div className="d-block d-sm-block d-lg-none" style={{flex: 1}}>
            <TopNav/>
        </div>
        <div className="rounded-3 py-3 px-lg-3 w-100 p-3" style={{flex: 10, overflowY: 'auto'}}>
            <div className="row h-100">
                <div className="d-none d-sm-none d-lg-block col col-lg-3 col-xxl-2">
                    <Sidebar/>
                </div>
                <div className="col col-sm-12 col-xs-12 col-lg-9 col-xxl-10 content">
                    <Routes>
                        <Route index element={<Dashboard />} />
                            <Route path="solution" element={<Solution/>} />
                            <Route path="environment" element={<Environment/>}>
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
        <div className="d-block d-sm-block d-lg-none" style={{flex: 1}}>
            <BottomNav/>
        </div>
    </div>
  );
}

export default App;
