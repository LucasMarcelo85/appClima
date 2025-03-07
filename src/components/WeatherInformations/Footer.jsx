import React from 'react';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/marcelo-souza-882aab316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Marcelo</a></p>
            <a href="https://github.com/LucasMarcelo85" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
        </footer>
    );
};

export default Footer;