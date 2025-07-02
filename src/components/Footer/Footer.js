import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EXD</h3>
            <p>
              Transformando ideias em soluções digitais inovadoras. 
              Junte-se a nós nessa jornada tecnológica!
            </p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#team">Equipe</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>contato@exd.dev</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Siga-nos</h4>
            <div className="social-links">
              <a href="https://github.com/organo" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/company/organo" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contato@exd.dev">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} EXD. Todos os direitos reservados. 
            Feito com <Heart size={16} className="heart" /> pela equipe EXD.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
