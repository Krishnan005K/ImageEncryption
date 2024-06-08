import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <div >
            
        <div className='nav-bar'>
            <h1>Image Encryption Tool</h1>
            <ul className='nav-bar-ul'>
                <li className='nav-bar-li'>
                    <Link to="/encrypt">Encrypt Image</Link>
                </li>
                <li className='nav-bar-li'>
                    <Link to="/decrypt">Decrypt Image</Link>
                </li>
            </ul>

        </div>
            
        </div>
    );
};

export default Navbar;
