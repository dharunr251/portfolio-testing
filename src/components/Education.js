import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Mangaiyarkarasi College of Arts & Science, Madurai",
      year: "2021- 2024",
      percentage:"80%"
    },
    {
      degree: "Higher Secondary",
      institution: "Sree Maha Matric Hr Sec School",
      year: "2020- 2021",
      percentage:"86.3%"
    },
    {
      degree:"High School",
      institution:"Sree Maha Matric Hr Sec School",
      year:"2018- 2019",
      percentage:"83.6%"
    }
  ];

  return (
    <section id="education" className="education-section light-theme">
      <div className="container">
        <h2 className="section-title gradient-text">Education</h2>
        <div className="timeline">
          {educationList.map((item, index) => (
            <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content hover-glow">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-description">{item.description}</p>
                <p className="timeline-percentage">{item.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
