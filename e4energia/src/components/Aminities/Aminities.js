import React from 'react';
import { Container } from 'react-bootstrap';
import './Aminities.css';

function Aminities() {
  const amenitiesList = [
    { icon: "fa-solid fa-charging-station", title: "EV Charging Station" },
    { icon: "fa-solid fa-tree", title: "Nature-Friendly" },
    { icon: "fa-solid fa-handshake", title: "Sponsorship Opportunities" },
    { icon: "fa-solid fa-store", title: "Franchise Options" },
    { icon: "fa-solid fa-car", title: "Dealership Services" },
    // Additional Amenities
    { icon: "fa-solid fa-coffee", title: "Coffee Bar" },
    { icon: "fa-solid fa-bicycle", title: "Bike Racks" },
    { icon: "fa-solid fa-smog", title: "Air Quality Monitoring" },
    { icon: "fa-solid fa-users", title: "Community Events" },
    { icon: "fa-solid fa-paintbrush", title: "Creative Spaces" },
    { icon: "fa-solid fa-desktop", title: "Tech Support" },
    { icon: "fa-solid fa-phone-alt", title: "24/7 Customer Support" },
    { icon: "fa-solid fa-bell", title: "Notification System" },
  ];

  // Duplicate the list of amenities to create a seamless loop
  const infiniteList = [...amenitiesList, ...amenitiesList];

  return (
    <section className="amenities-section">
      <Container>
        <div className="section-header text-center">
          <h2>Energia Benefits</h2>
          <p>Where We Meet to the Nature</p>
        </div>

        <div className="slider">
          <div className="slider-track">
            {infiniteList.map((amenity, idx) => (
              <div key={idx} className="slider-item">
                <div className="amenity-icon">
                  <i className={amenity.icon}></i>
                </div>
                <h5>{amenity.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Aminities;
