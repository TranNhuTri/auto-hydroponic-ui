import './Dashboard.css';
import React from 'react';
import { FaTemperatureHigh, FaAtom, FaGlassWhiskey, FaHandHoldingWater } from "react-icons/fa";


const Dashboard = function() {
  return (
    <div>
        <div className="row mb-3">
            <div className="col-12 mb-3 border-bottom">
                <p className="display-6 mb-2">Solution</p>
            </div>
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
                <div className="crd border rounded-pill bg-white p-3 d-flex align-items-center">
                    <div className="rounded-circle shadow text-secondary p-4">
                        <FaTemperatureHigh className='icon d-flex justify-content-center align-items-center'/>
                    </div>
                    <div className="px-3">
                        <div>Temperature</div>
                        <span className="display-6">25</span><span className="ps-2">°C</span>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
                <div className="crd border rounded-pill bg-white p-3 d-flex align-items-center">
                    <div className="rounded-circle shadow text-secondary p-4">
                        <FaAtom className='icon d-flex justify-content-center align-items-center'/>
                    </div>
                    <div className="px-3">
                        <div>TDS</div>
                        <span className="display-6">254</span><span className="ps-2">ppm</span>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
                <div className="crd border rounded-pill bg-white p-3 d-flex align-items-center">
                    <div className="rounded-circle shadow text-secondary p-4">
                        <FaGlassWhiskey className='icon d-flex justify-content-center align-items-center'/>
                    </div>
                    <div className="px-3">
                        <div>Height</div>
                        <span className="display-6">15</span><span className="ps-2">%</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12 mb-3 border-bottom">
                <p className="display-6 mb-2">Environment</p>
            </div>
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
                <div className="crd border rounded-pill bg-white p-3 d-flex align-items-center">
                    <div className="rounded-circle shadow text-secondary p-4">
                        <FaTemperatureHigh className='icon d-flex justify-content-center align-items-center'/>
                    </div>
                    <div className="px-3">
                        <div>Temperature</div>
                        <span className="display-6">25</span><span className="ps-2">°C</span>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
                <div className="crd border rounded-pill bg-white p-3 d-flex align-items-center">
                    <div className="rounded-circle shadow text-secondary p-4">
                        <FaHandHoldingWater className='icon d-flex justify-content-center align-items-center'/>
                    </div>
                    <div className="px-3">
                        <div>Humidity</div>
                        <span className="display-6">70</span><span className="ps-2">%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;