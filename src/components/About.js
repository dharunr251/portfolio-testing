import React from 'react';
import { Layout, Download, Code, Monitor, Blocks } from 'lucide-react';
import './About.css';
import resume from '../resume/resume.pdf';


const About = () => {
  const skills = [
    { name: "Manual Testing", icon: <Layout size={24} />, desc: "Functional, Regression, Smoke, and Sanity Testing" },
    { name: "Automation Testing", icon: <Code size={24} />, desc: "Selenium WebDriver, Java, TestNG, POM" },
    { name: "Defect Management", icon: <Monitor size={24} />, desc: "Identifying, tracking, and resolving software defects" },
    { name: "Domain Expertise", icon: <Blocks size={24} />, desc: "Real-time e-commerce applications" }
  ];

  return (
    <section id="about" className="about-section light-theme">
      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text animate-fade-in">
            <h3 className="sub-heading">Passion for creating seamless web experiences.</h3>
            <p>
             I am a dedicated Software Test Engineer with a strong foundation in both Manual and Automation Testing. I specialize in designing effective test cases, identifying defects, and ensuring software quality across applications.
            </p>
            <p>
             I have hands-on experience working on real-time e-commerce applications, where I performed functional, regression, smoke, and sanity testing. I also developed automation scripts using Selenium WebDriver with Java, implementing frameworks like TestNG and Page Object Model (POM).
            </p>
            <div className="about-buttons" style={{ marginTop: '2rem' }}>
              <a href={resume} download="resume.pdf" className="btn btn-secondary">
                Download CV <Download className="btn-icon" size={20} />
              </a>
            </div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                className="skill-card hover-glow" 
                key={index} 
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
