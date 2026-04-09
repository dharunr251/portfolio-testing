import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact-section light-theme">
      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="sub-heading">Let's build something awesome together.</h3>
            <p className="contact-text">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <span>rdharunnn@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <span>+91 7339043503</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <span>Tiruppur, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Dharun R. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
