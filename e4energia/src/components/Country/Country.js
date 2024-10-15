import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Country.css';

function Country() {
  return (
    <Container id="about" className="about-section py-5">
      <h2 className="text-center mb-4">Country</h2>
      <Row className="g-4">
        <Col md={6}>
          <Row>
            <Col xs={4}>
              <Link to="/country/india" className="btn country-btn">
                <Image src='/images/flags/india.png' alt="India" fluid />
                <span className="country-name">India</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/thailand" className="btn country-btn">
                <Image src='/images/flags/thailand.png' alt="Thailand" fluid />
                <span className="country-name">Thailand</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/hong_kong" className="btn country-btn">
                <Image src='/images/flags/hong_kong.png' alt="Hong Kong" fluid />
                <span className="country-name">Hong Kong</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/singapore" className="btn country-btn">
                <Image src='/images/flags/singapore.png' alt="Singapore" fluid />
                <span className="country-name">Singapore</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/usa" className="btn country-btn">
                <Image src='/images/flags/usa.png' alt="USA" fluid />
                <span className="country-name">USA</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/greece" className="btn country-btn">
                <Image src='/images/flags/greece.png' alt="Greece" fluid />
                <span className="country-name">Greece</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/switzerland" className="btn country-btn">
                <Image src='/images/flags/switzerland.png' alt="Geneva" fluid />
                <span className="country-name">Switzerland</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/kenya" className="btn country-btn">
                <Image src='/images/flags/kenya.png' alt="Kenya" fluid />
                <span className="country-name">Kenya</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/nigeria" className="btn country-btn">
                <Image src='/images/flags/nigeria.png' alt="Nigeria" fluid />
                <span className="country-name">Nigeria</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/uae" className="btn country-btn">
                <Image src='/images/flags/uae.png' alt="UAE" fluid />
                <span className='country-name'>UAE</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/qatar" className="btn country-btn">
                <Image src='/images/flags/qatar.png' alt="Qatar" fluid />
                <span className='country-name'>Qatar</span>
              </Link>
            </Col>
            <Col xs={4}>
              <Link to="/country/sa" className="btn country-btn">
                <Image src='/images/flags/sa.png' alt="South Africa" fluid />
                <span className='country-name'>South Africa</span>
              </Link>
            </Col>
          </Row>
          {/* Adding gap between countries and card */}
          <div className="mt-4" /> {/* Margin top for spacing */}
        </Col>
        <Col md={6}>
          <Card className="about-card shadow-sm">
            <Card.Img variant="top" src="/images/energia.jpg" />
            <Card.Body>
              <Card.Title>What is Energia</Card.Title>
              <Card.Text>
              In essence, "Energia" likely embodies a blend of energy, collaboration, and innovation              </Card.Text>
              <Link to="/opendesk" className="btn">Read More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Country;
