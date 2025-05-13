import React, { useEffect, useState } from "react";
import projectsData from "../data/projectsData";

// Carousel Component: Displays a scrolling list of project cards
const Carousel = () => {
  const [projects, setProjects] = useState([]);

  // Load projects on component mount
  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);
  
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container group lg:group">
        {/* Scrolling row of duplicated project cards (for infinite scroll effect) */}
        <div
          className="carousel-track animate-scroll lg:group-hover:paused-animation"
          style={{
            width: `${projects.length * 2 * 240}px`,
          }}
        >
          {/* Original list */}
          {projects.map((project, index) => (
            <ProjectCard key={`original-${index}`} project={project} />
          ))}
          {/* Duplicate list for looping effect */}
          {projects.map((project, index) => (
            <ProjectCard key={`duplicate-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ProjectCard Component: Displays one project (image or video)
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Top section: Icon and text */}
      <div className="card-header">
        <div className={`card-icon ${project.bgColor}`}>
          <span className="card-icon-text">{project.name.charAt(0)}</span>
        </div>
        <div className="card-text">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      </div>

      {/* Media Section */}
      <div className="card-media-wrapper">
        <div className="card-media">
          {project.type === "image" ? (
            <img
              src={project.image}
              alt={project.name}
              className="media-content"
            />
          ) : (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="media-content"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
