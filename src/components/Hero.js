import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import profile from '../Pictures/portfolio1.jpg.jpeg';
import resume from '../resume/resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h2 className="greeting">Hello, I'm</h2>
          <h2 className="name gradient-text">VIJAYALAKSHMI .S</h2>
          <p className="subtitle">
           Detail-oriented Software Test Engineer with hands-on experience in Manual and Automation Testing. Skilled in Selenium WebDriver, Java, TestNG, and real-time project testing. Passionate about delivering high-quality, bug-free applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight className="btn-icon" size={20} />
            </a>
            <a href={resume} download="resume.pdf" className="btn btn-secondary">
              Download CV <Download className="btn-icon" size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="unshape-image-container">
            <div className="unshape-image-inner">
              <img 
                src={profile} 
                alt="Profile avatar" 
                className="unshape-image" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
    </section>
  );
};

export default Hero;
