import React, { useState } from 'react';
import './SlideForm.css'; 
import ContactForm from '../ContactForm/ContactForm';

const SlideForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Conditionally render the Contact Us button */}
      {!isVisible && (
        <button className="rotate-button" onClick={toggleForm}>
          Contact Us
        </button>
      )}

      {/* Form that slides in from the right */}
      <div className={`form-container ${isVisible ? 'visible' : ''}`}>
        {/* Close button ("X") */}
        {isVisible && (
          <button className="close-button" onClick={toggleForm}>
            &times;
          </button>
        )}
        
        {/* Use the ContactForm component */}
        <ContactForm />
      </div>
    </div>
  );
};

export default SlideForm;
