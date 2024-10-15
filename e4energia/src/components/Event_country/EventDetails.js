import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card, Container, Button, Row, Col, Modal } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './EventDetails.css';
import GoogleMapReact from 'google-map-react';

const EventDetails = () => {
  const { category } = useParams();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Use for navigation

  const eventDetails = [
    { title: 'Energia', description: 'Energy sustainability.', image: '/images/energia.jpg', address: '123 Energy St, Eco City', date: '2024-11-01', time: '10:00 AM', lat: 40.712776, lng: -74.005974 },
    { title: 'Exploria', description: 'Space exploration.', image: '/images/exploria.jpg', address: '456 Space Ave, Star City', date: '2024-12-01', time: '2:00 PM', lat: 34.052235, lng: -118.243683 },
    { title: 'Evixia', description: 'Healthcare advancements.', image: '/images/evixia.jpg', address: '789 Health Rd, Wellness City', date: '2024-10-15', time: '1:00 PM', lat: 37.774929, lng: -122.419418 },
    { title: 'Ekonomia', description: 'Global economy.', image: '/images/ekonomia.jpg', address: '321 Economy Blvd, Market City', date: '2024-10-30', time: '11:00 AM', lat: 51.507351, lng: -0.127758 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleScheduleClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null); // Reset selected event
  };

  const handleBookNowClick = () => {
    // Navigate to the booking page
    navigate('/booking');
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">{category.charAt(0).toUpperCase() + category.slice(1)} Event Details</h2>
      <Slider {...settings} className="mb-5">
        {eventDetails.map((event, idx) => (
          <div key={idx}>
            <Card className="event-card">
              <Card.Img variant="top" src={event.image} className="carousel-image" alt={event.title} />
              <div className="card-hover-details">
                <h5>{event.title}</h5>
                <p>{event.description}</p>
                <Button variant="primary" onClick={() => handleScheduleClick(event)}>Schedule</Button>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      {/* Modal for Event Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <Row>
              <Col md={6}>
                <p>
                  <i className="fas fa-map-marker-alt icon" /> {/* FontAwesome icon */}
                  <strong> Address:</strong> {selectedEvent.address}
                </p>
                <p>
                  <i className="fas fa-calendar-alt icon" /> {/* FontAwesome icon */}
                  <strong> Date:</strong> {selectedEvent.date}
                </p>
                <p>
                  <i className="fas fa-clock icon" /> {/* FontAwesome icon */}
                  <strong> Time:</strong> {selectedEvent.time}
                </p>
              </Col>
              <Col md={6}>
                <img src={selectedEvent.image} alt={selectedEvent.title} className="event-detail-image" />
              </Col>
            </Row>
          )}
          <h4>Location:</h4>
          <div style={{ height: '300px', width: '100%' }}>
            <GoogleMapReact
              defaultCenter={{ lat: selectedEvent?.lat, lng: selectedEvent?.lng }}
              defaultZoom={10}
            />
          </div>
          <Button variant="success" className="mt-3" onClick={handleBookNowClick}>Book Now</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default EventDetails;
