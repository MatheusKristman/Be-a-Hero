import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCase from './components/NewCase';
import NotFoundPage from './components/NotFoundPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/newcase' element={<NewCase />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
