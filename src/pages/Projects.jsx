import React from 'react';
import './Projects.css';
import companyProjects from '../data/companyProjects';
import personalProjects from '../data/personalProjects';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      ></div>
      <div className="project-overlay">
        <h3>
          <span className="white-text">Project </span>
          <span className="green-text">{project.title}</span>
        </h3>
        <div className="project-skills">
          {project.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          Go To Project 🚀
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">Company Projects</h2>
      <div className="projects-grid">
        {companyProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h2 className="projects-heading">Personal Projects</h2>
      <div className="projects-grid">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
