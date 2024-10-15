import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import './BookingPage.css'; // Import the custom CSS

const BookingPage = () => {
  return (
    <Container className="booking-page mt-5">
      <h2 className="text-center booking-heading">Booking</h2>
      <Tabs defaultActiveKey="membership" id="booking-tabs" className="custom-tabsd mb-3" fill>
        <Tab eventKey="membership" title="Membership">
          <div className="tab-content">
            <p>Explore our exclusive membership plans and the benefits you’ll enjoy as a valued member.</p>
          </div>
        </Tab>
        <Tab eventKey="sponsorship" title="Sponsorship">
          <div className="tab-content">
            <p>Partner with us through our sponsorship opportunities and showcase your brand to a wider audience.</p>
          </div>
        </Tab>
        <Tab eventKey="dealership" title="Dealership">
          <div className="tab-content">
            <p>Learn about dealership opportunities and how we can help expand your business.</p>
          </div>
        </Tab>
        <Tab eventKey="booking" title="Booking">
          <div className="tab-content">
            <p>Find out how you can book your spot at the event and make the most of the opportunities available.</p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default BookingPage;
