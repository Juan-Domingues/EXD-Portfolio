import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bem-vindos ao <span className="highlight">EXD</span>
          </h1>
          <p className="hero-description">
            Somos uma equipe de desenvolvedores apaixonados por tecnologia, 
            criando soluções inovadoras e experiências digitais excepcionais.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça nossa equipe
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver projetos
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <div className="code-block">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">EXD</span> = {`{`}
              </div>
              <div className="code-line">
                <span className="property">mission</span>: <span className="string">'Inovar'</span>,
              </div>
              <div className="code-line">
                <span className="property">vision</span>: <span className="string">'Transformar'</span>,
              </div>
              <div className="code-line">
                <span className="property">team</span>: <span className="number">5</span>
              </div>
              <div className="code-line">{`}`};</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
