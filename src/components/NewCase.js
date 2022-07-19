import React, { useState, useEffect, useRef } from 'react';
import './NewCase.css';
import logo from '../images/Logo.svg';
import validate from '../ValidateCase';
import { useNavigate } from 'react-router-dom';

const NewCase = () => {
    const [caseInfo, setCaseInfo] = useState({
        title: '',
        desc: '',
        caseValue: ''
    });
    const [error, setError] = useState({});

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = route;
        navigate(path);
    };

    const inputTitleEl = useRef(null);
    const inputDescEl = useRef(null);
    const inputValueEl = useRef(null);

    useEffect(() => {
        if (error.title) {
            inputTitleEl.current.value = '';
        }

        if (error.desc) {
            inputDescEl.current.value = '';
        }

        if (error.caseValue) {
            inputValueEl.current.value = '';
        }
    }, [error]);

    const handleCancel = (e) => {
        e.preventDefault();
        routeChange('/');
    };

    const backHome = () => {
        routeChange('/');
    };

    const handleTitle = (e) => {
        setCaseInfo({ ...caseInfo, title: e.target.value });
    };

    const handleDesc = (e) => {
        setCaseInfo({ ...caseInfo, desc: e.target.value });
    };

    const handleValue = (e) => {
        setCaseInfo({
            ...caseInfo,
            caseValue: e.target.value
        });
    };
    const checkInfos = (e) => {
        e.preventDefault();
        setError(validate(caseInfo));
        if (caseInfo.title && caseInfo.desc && caseInfo.caseValue) {
            const cases = JSON.parse(localStorage.getItem('newCase') || []);
            cases.push(caseInfo);
            localStorage.setItem('newCase', JSON.stringify(cases));
            routeChange('/');
        }
    };

    return (
        <section className='newcase-container'>
            <div className='newcase-wrapper'>
                <div className='newcase-info'>
                    <img src={logo} alt='Logo' className='newcase-logo' />

                    <h1 className='newcase-title'>Cadastrar novo caso</h1>
                    <p className='newcase-desc'>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <div className='link-home' onClick={backHome}>
                        <i className='fa-solid fa-arrow-left' />
                        Voltar para home
                    </div>
                </div>
                <form className='newcase-form'>
                    <input
                        type='text'
                        placeholder={error.title ? error.title : 'Título do caso'}
                        className={
                            error.title ? 'newcase-input-title error' : 'newcase-input-title'
                        }
                        onChange={handleTitle}
                        ref={inputTitleEl}
                    />
                    <textarea
                        placeholder={error.desc ? error.desc : 'Descrição'}
                        className={error.desc ? 'newcase-input-desc error' : 'newcase-input-desc'}
                        onChange={handleDesc}
                        ref={inputDescEl}
                    />
                    <input
                        type='number'
                        placeholder={error.caseValue ? error.caseValue : 'Valor em reais'}
                        className={
                            error.caseValue ? 'newcase-input-value error' : 'newcase-input-value'
                        }
                        pattern='[0-9]+([,\.][0-9]+)?'
                        onChange={handleValue}
                        ref={inputValueEl}
                    />
                    <div className='button-wrapper'>
                        <button className='newcase-cancel-btn' onClick={handleCancel}>
                            Cancelar
                        </button>
                        <button className='newcase-ok-btn' onClick={checkInfos}>
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewCase;
