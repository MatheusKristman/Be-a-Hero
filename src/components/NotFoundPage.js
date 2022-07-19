import React from 'react';
import logo from '../images/Logo.png';
import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = route;
        navigate(path);
    };

    const handleClick = () => {
        routeChange('/login');
    };

    return (
        <div className='not-found-container'>
            <img src={logo} alt='logo' className='not-found-logo' />

            <h1 className='not-found-title'>Página não encontrada</h1>

            <button className='not-found-back-btn' onClick={handleClick}>
                Voltar para o inicio
            </button>
        </div>
    );
};

export default NotFoundPage;
