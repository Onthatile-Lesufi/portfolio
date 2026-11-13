import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home'
import Games from './pages/Games';
import Dev from './pages/Dev';

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route path="/dev" element={<Dev/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App