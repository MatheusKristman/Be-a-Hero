import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import validate from '../Validate';
import './SignUp.css';

const SignUp = () => {
    const [loginData, setLoginData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        city: '',
        uf: ''
    });
    const [error, setError] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const inputNameEl = useRef(null);
    const inputEmailEl = useRef(null);
    const inputWhatsappEl = useRef(null);
    const inputCityEl = useRef(null);
    const inputUfEl = useRef(null);

    useEffect(() => {
        if (error.name) {
            inputNameEl.current.value = '';
        }

        if (error.email) {
            inputEmailEl.current.value = '';
        }

        if (error.whatsapp) {
            inputWhatsappEl.current.value = '';
        }

        if (error.city) {
            inputCityEl.current.value = '';
        }

        if (error.uf) {
            inputUfEl.current.value = '';
        }

        if (Object.keys(error).length === 0 && submitting) {
            localStorage.setItem('loginData', JSON.stringify(loginData));
            routeChange('/login');
        }
    }, [error]);

    const handleName = (e) => {
        setLoginData({ ...loginData, name: e.target.value });
    };

    const handleEmail = (e) => {
        setLoginData({ ...loginData, email: e.target.value });
    };

    const handleWhatsapp = (e) => {
        setLoginData({ ...loginData, whatsapp: e.target.value });
    };

    const handleCity = (e) => {
        setLoginData({ ...loginData, city: e.target.value });
    };

    const handleUf = (e) => {
        setLoginData({ ...loginData, uf: e.target.value.toUpperCase() });
    };

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = route;
        navigate(path);
    };

    const checkInfos = (e) => {
        e.preventDefault();
        setError(validate(loginData));
        setSubmitting(true);

        if (!error.name && !error.email && !error.whatsapp && !error.city && !error.uf) {
        }
    };

    function handleTelefone(e) {
        const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
        var str = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);

        const result = str.replace(regex, '($1)$2-$3');

        e.target.value = result;
        setLoginData({ ...loginData, whatsapp: result });
    }

    return (
        <div className='signup-container'>
            <section className='signup-box'>
                <div className='signup-wrapper'>
                    <div className='signup-info'>
                        <img src={logo} alt='Logo' className='signup-logo' />

                        <h1 className='signup-title'>Cadastro</h1>
                        <p className='signup-desc'>
                            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os
                            casos da sua ONG.
                        </p>
                        <Link to='/login' className='link-login'>
                            <i className='fa-solid fa-arrow-left' />
                            Voltar para o logon
                        </Link>
                    </div>
                    <form className='signup-form'>
                        <input
                            type='text'
                            placeholder={error.name ? error.name : 'Nome da ONG'}
                            className={error.name ? 'signup-ong-name error' : 'signup-ong-name'}
                            onChange={handleName}
                            ref={inputNameEl}
                        />
                        <input
                            type='text'
                            placeholder={error.email ? error.email : 'E-mail'}
                            className={error.email ? 'signup-email error' : 'signup-email'}
                            onChange={handleEmail}
                            ref={inputEmailEl}
                        />
                        <input
                            placeholder={error.whatsapp ? error.whatsapp : 'WhatsApp'}
                            className={error.whatsapp ? 'signup-whatsapp error' : 'signup-whatsapp'}
                            onChange={handleWhatsapp}
                            onBlur={handleTelefone}
                            ref={inputWhatsappEl}
                        />
                        <div className='input-wrapper'>
                            <input
                                type='text'
                                placeholder={error.city ? error.city : 'Cidade'}
                                className={error.city ? 'signup-city error' : 'signup-city'}
                                onChange={handleCity}
                                style={{ textTransform: 'capitalize' }}
                                ref={inputCityEl}
                            />
                            <input
                                type='text'
                                placeholder={error.uf ? error.uf : 'UF'}
                                className={error.uf ? 'signup-uf error' : 'signup-uf'}
                                maxLength={2}
                                onChange={handleUf}
                                style={{ textTransform: 'uppercase' }}
                                ref={inputUfEl}
                            />
                        </div>
                        <button onClick={checkInfos} className='signup-btn'>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
