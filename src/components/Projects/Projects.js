import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    },
    {
      title: "PWA News App",
      description: "Aplicativo progressivo de notícias com modo offline, notificações push e interface responsiva.",
      technologies: ["React", "PWA", "Service Workers", "IndexedDB"],
      image: "https://via.placeholder.com/400x200/667eea/ffffff?text=News+PWA",
      githubUrl: "https://github.com/organo/news-pwa",
      liveUrl: "https://news.organo.com",
      status: "Concluído"
    }
  ];

  const nextProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevProject = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToProject = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevProject();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextProject();
      } else if (event.key >= '1' && event.key <= '5') {
        const index = parseInt(event.key) - 1;
        if (index < projects.length) {
          goToProject(index);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  // Suporte a touch/swipe para mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

  // Auto-play opcional (descomente se quiser)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextProject();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Nossos Projetos</h2>
        <p className="projects-subtitle">
          Confira alguns dos projetos desenvolvidos pela nossa equipe
        </p>
        <div className="navigation-hint">
          <span>Use as setas do teclado para navegar ou clique nos projetos adjacentes</span>
        </div>
        
        <div className="projects-carousel">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevProject}
            disabled={isTransitioning}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            className="projects-wrapper"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="projects-track">
              {projects.map((project, index) => {
                const position = index - currentIndex;
                const isActive = index === currentIndex;
                const isLeftAdjacent = position === -1;
                const isRightAdjacent = position === 1;
                const isVisible = Math.abs(position) <= 1;

                let cardClass = 'project-card';
                if (isActive) cardClass += ' active';
                else if (isLeftAdjacent) cardClass += ' adjacent left';
                else if (isRightAdjacent) cardClass += ' adjacent right';
                else cardClass += ' hidden';

                return (
                  <div 
                    key={index} 
                    className={cardClass}
                    onClick={() => !isActive && goToProject(index)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
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
                );
              })}
            </div>
          </div>
          
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextProject}
            disabled={isTransitioning}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToProject(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>
        
        <div className="project-counter">
          <span>{currentIndex + 1} de {projects.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
