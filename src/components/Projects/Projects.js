import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamento integrado, gestão de produtos e dashboard administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x200/667eea/ffffff?text=E-commerce",
      githubUrl: "https://github.com/organo/ecommerce",
      liveUrl: "https://ecommerce-demo.organo.com",
      status: "Concluído"
    },
    {
      title: "Sistema de Gestão",
      description: "Sistema web para gestão empresarial com módulos de CRM, financeiro e recursos humanos.",
      technologies: ["React", "Express", "PostgreSQL", "Redis"],
      image: "https://via.placeholder.com/400x200/764ba2/ffffff?text=Gestão",
      githubUrl: "https://github.com/organo/gestao",
      liveUrl: "https://gestao.organo.com",
      status: "Em Desenvolvimento"
    },
    {
      title: "App Mobile Fitness",
      description: "Aplicativo mobile para acompanhamento de exercícios e dietas com integração a wearables.",
      technologies: ["React Native", "Firebase", "Node.js"],
      image: "https://via.placeholder.com/400x200/667eea/ffffff?text=Fitness+App",
      githubUrl: "https://github.com/organo/fitness-app",
      liveUrl: "https://play.google.com/store/apps/fitness-organo",
      status: "Concluído"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real e relatórios customizáveis.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      image: "https://via.placeholder.com/400x200/764ba2/ffffff?text=Analytics",
      githubUrl: "https://github.com/organo/analytics",
      liveUrl: "https://analytics.organo.com",
      status: "Em Desenvolvimento"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Nossos Projetos</h2>
        <p className="projects-subtitle">
          Confira alguns dos projetos que desenvolvemos com paixão e dedicação
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Ver código">
                      <Github size={20} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Ver projeto">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
