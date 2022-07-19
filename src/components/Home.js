import React, { useState, useEffect } from 'react';
import logo from '../images/Logo.svg';
import power from '../images/power.svg';
import './Home.css';
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [caseData, setCaseData] = useState([]);

    const data = JSON.parse(localStorage.getItem('loginData'));

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = route;
        navigate(path);
    };

    const handleDelete = (title) => {
        let elements = caseData;
        elements = elements.filter((element) => element.title !== title);
        localStorage.setItem('newCase', JSON.stringify(elements));
        setCaseData(JSON.parse(localStorage.getItem('newCase')));
    };

    useEffect(() => {
        const fetchData = () => {
            let caseStorage = JSON.parse(localStorage.getItem('newCase'));
            if (caseStorage) {
                setCaseData(caseStorage);
            }
        };
        fetchData();
    }, []);

    const logout = () => {
        routeChange('/login');
    };

    return (
        <>
            <div className='container'>
                <header className='header'>
                    <div className='logo-user'>
                        <img src={logo} alt='Logo' className='logo' />
                        <h1 className='wellcome-user'>{`Bem vindo, ${data.name}`}</h1>
                    </div>
                    <div className='btns-header'>
                        <button className='case-btn' onClick={() => routeChange('/newcase')}>
                            Cadastrar novo caso
                        </button>
                        <button className='case-btn-mobile' onClick={() => routeChange('/newcase')}>
                            <AiOutlinePlus />
                        </button>
                        <button className='logoff' onClick={logout}>
                            <img src={power} alt='sair' />
                        </button>
                    </div>
                </header>

                <main className='cases-container'>
                    <h1 className='cases-title'>Casos cadastrados</h1>

                    <div className='case-wrapper'>
                        {caseData &&
                            caseData.map((item, index) => (
                                <div className='case-box' key={index}>
                                    <h4 className='case-title'>Caso:</h4>
                                    <p className='case-title-text'>{item.title}</p>

                                    <h4 className='case-desc'>Descrição:</h4>
                                    <p className='case-desc-text'>{item.desc}</p>

                                    <h4 className='case-value'>Valor:</h4>
                                    <p className='case-value-text'>R$ {item.caseValue},00 reais</p>

                                    <button
                                        className='case-delete'
                                        onClick={() => handleDelete(item.title)}
                                    >
                                        <FiTrash2 className='trash' />
                                    </button>
                                </div>
                            ))}
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
};

export default Home;
