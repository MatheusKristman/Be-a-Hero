import React, { useState, useRef } from 'react';
import logo from '../images/Logo.svg';
import people from '../images/Pessoas.svg';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [id, setId] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = route;
        navigate(path);
    };

    const inputRef = useRef(null);

    const handleData = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('loginData')) || [];
        if (Object.keys(data).length === 0) {
            inputRef.current.value = '';
            setError('ID invalida!');
        }

        if (id === data.name) {
            setError('');
            routeChange('/');
        } else {
            inputRef.current.value = '';
            setError('ID invalida!');
        }
    };

    const handleId = (e) => {
        setId(e.target.value);
    };

    return (
        <div className='login-container'>
            <div className='login-content'>
                <div className='login-section'>
                    <img src={logo} alt='Logo' className='login-logo' />
                    <h1 className='login-title'>Faça seu logon</h1>
                    <form className='login-form'>
                        <input
                            type='text'
                            placeholder={error ? error : 'Sua ONG'}
                            className={error ? 'login-input error' : 'login-input'}
                            onChange={handleId}
                            ref={inputRef}
                        />
                        <button className='login-btn' onClick={handleData}>
                            Entrar
                        </button>
                    </form>
                    <Link to='/signup' className='link-signup'>
                        <i className='fa-solid fa-arrow-right-to-bracket' />
                        não tenho cadastro
                    </Link>
                </div>
                <div className='ilustration-section'>
                    <img src={people} alt='Ilustration' className='ilustration' />
                </div>
            </div>
        </div>
    );
};

export default Login;
