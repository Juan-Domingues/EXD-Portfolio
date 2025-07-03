import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Juan Domingues",
      role: "Frontend Developer",
      image: "/Imagens/eu.jpeg",
      github: "https://github.com/Juan-Domingues",
      linkedin: "https://www.linkedin.com/in/juan-pablo-araujo-domingues-43b63722a/",
      description: "Especialista em UI/UX e React"
    },
    {
      name: "Gabriel Teixeira",
      role: "Backend Developer",
      image: "/Imagens/gabriel.jpg",
      github: "https://github.com/Gabreu1",
      linkedin: "https://www.linkedin.com/in/gabriel-teixeira12/",
      description: "Especialista em APIs e Node.js"
    },
    {
      name: "Gabriel Freitas",
      role: "FullStack Developer",
      image: "/Imagens/gk.jpg",
      github: "https://github.com/gkfreitas",
      linkedin: "https://www.linkedin.com/in/gkfreitas/",
      description: "Especialista em APIs e bancos de dados"
    },
    {
      name: "Nicolas Vasconcelos",
      role: "Comercial",
      image: "/Imagens/nicolas.jpg",
      github: "",
      linkedin: "https://www.linkedin.com/in/n%C3%ADcolas-vasconcelos-93336a232/",
      description: "Representante Comercial e de Marketing"
    },
    {
      name: "Victor Barcelos",
      role: "Backend Developer",
      image: "/Imagens/vitu.jpg",
      github: "https://github.com/barcelosvs",
      linkedin: "https://www.linkedin.com/in/barcelosvs/",
      description: "Especialista em API e desenvolvimento backend"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <h2 className="section-title">Nossa Equipe</h2>
        <p className="team-subtitle">
          Conheça os profissionais talentosos que fazem a diferença em cada projeto
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="social-links">
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
