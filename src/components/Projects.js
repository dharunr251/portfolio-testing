import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "TutorialsNinja E-Commerce Website",
      image: "https://i.pinimg.com/736x/11/33/7e/11337eac665584efeef1233502fd62fb.jpg",
      description: "Performed Manual Testing on the TutorialsNinja e-commerce application by designing and executing 50 test cases for modules like login, search, cart, and checkout, and conducted functional, regression, smoke, and sanity testing with defect reporting",
      tags: ["Ms excel","Jira","Test case design & execution","Defect Tracking"],
      // github: "#",
      // live: "#"
    },
    {
      title: "E-Commerce Platform",
      image: "https://i.pinimg.com/736x/79/fa/96/79fa9609a55f7513c07f36c17a2b1714.jpg",
      description: "Automated end-to-end testing of an e-commerce web application using Selenium WebDriver and Java, covering key workflows like login, product search, cart, and checkout. Implemented TestNG and Page Object Model (POM) for efficient test execution and maintainability",
      tags: ["Selenium ","Java","TestNG","POM","Maven","Git","GitHub",],
      // github: "#",
      // live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-placeholder">
                <img src={project.image} alt="" className="placeholder-text" width="100%" height="100%"/>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                {/* <div className="project-links">
                  <a href={project.github} className="icon-link"><GitBranch size={20} /> Code</a>
                  <a href={project.live} className="icon-link"><ExternalLink size={20} /> Live Demo</a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glow-blob blob-3"></div>
    </section>
  );
};

export default Projects;
