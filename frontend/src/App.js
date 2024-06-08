import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import EncryptImage from './Components/EncryptImage';
import DecryptImage from './Components/DecryptImage';
import Navbar from './Components/Navbar';


const App = () => {
    return (
        <Router>
            <div>
               <Navbar/>
                <Routes>
                    <Route path="/encrypt" element={<EncryptImage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/decrypt" element={<DecryptImage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
