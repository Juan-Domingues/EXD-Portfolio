import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Nossa Missão</h3>
            <p>
              No EXD, acreditamos que a tecnologia pode transformar ideias em realidade. 
              Nossa missão é criar soluções digitais inovadoras que impactem positivamente 
              a vida das pessoas e os negócios de nossos clientes.
            </p>
            <h3>Nossa Visão</h3>
            <p>
              Ser reconhecidos como uma equipe de referência em desenvolvimento de software, 
              sempre na vanguarda das tecnologias emergentes e metodologias ágeis.
            </p>
            <h3>Nossos Valores</h3>
            <div className="values">
              <div className="value-item">
                <h4>🚀 Inovação</h4>
                <p>Sempre buscamos as melhores e mais modernas soluções</p>
              </div>
              <div className="value-item">
                <h4>🤝 Colaboração</h4>
                <p>Trabalhamos em equipe para alcançar resultados excepcionais</p>
              </div>
              <div className="value-item">
                <h4>⚡ Excelência</h4>
                <p>Comprometidos com a qualidade em cada linha de código</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
