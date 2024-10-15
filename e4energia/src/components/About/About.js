import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <Container id="about" className="about-section py-5">
      <h2 className="text-center mb-4">About Energia</h2>
      <Row className="g-4"> {/* Added gap class for spacing */}
        <Col md={4}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/franchise.jpg" />
            <Card.Body>
              <Card.Title>Franchise</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Join our growing community</Card.Subtitle>
              <Card.Text>
              Join our thriving community and expand your business through our franchise opportunities.
              </Card.Text>
              <Link to="/meeting-rooms" className="btn">Read More</Link> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/sponsership.jpg" />
            <Card.Body>
              <Card.Title>Sponsorship</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Partner with us for success</Card.Subtitle>
              <Card.Text>
              Boost your visibility with a diverse audience through our tailored sponsorship programs.
              </Card.Text>
              <Link to="/lounges" className="btn">Read More</Link> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/dealership.jpg" />
            <Card.Body>
              <Card.Title>Dealership</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Flexible options for your needs</Card.Subtitle>
              <Card.Text>
              Leverage our established brand to drive your dealership success with unparalleled support              </Card.Text>
              <Link to="/opendesk" className="btn">Read More</Link> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
