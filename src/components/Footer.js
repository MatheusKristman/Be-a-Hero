import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <small>Desenvolvido por Matheus Kristman</small>
            <div className='socials'>
                <a className='github' href='https://github.com/MatheusKristman/' target='_blank'>
                    <FaGithubSquare />
                </a>
                <a
                    className='linkedin'
                    href='https://www.linkedin.com/in/matheus-kristman-07a947171/'
                    target='_blank'
                >
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
