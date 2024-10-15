import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams from react-router-dom
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';  // Import Bootstrap components
import { Link } from 'react-router-dom';

function CountryEvent() {
  const { countryName } = useParams();  // Get the country name from the URL

  // Hardcoded event details for each country
  const countryEvent = [
    { header: 'India', event: 'Event in India' },
    { header: 'Thailand', event: 'Event in Thailand' },
    { header: 'Hong Kong', event: 'Event in Hong Kong' },
    { header: 'UAE', event: 'Event in UAE' },
    { header: 'USA', event: 'Event in USA' },
    { header: 'Qatar', event: 'Event in Qatar' },
    { header: 'Switzerland', event: 'Event in Switzerland' },
    { header: 'Greece', event: 'Event in Greece' },
    { header: 'Nigeria', event: 'Event in Nigeria' },
    { header: 'Kenya', event: 'Event in Kenya' },
    { header: 'South Africa', event: 'Event in South Africa' },
    { header: 'Singapore', event: 'Event in Singapore' },
  ];

  // Find the event details for the selected country
  const eventDetail = countryEvent.find((event) => event.header.toLowerCase() === countryName.toLowerCase());

  // List of additional event categories with descriptions and images
  const eventCategories = [
    {
      title: 'Energia',
      description: 'Exploring the future of energy sustainability and green energy solutions.',
      image: '/images/energia.jpg',  // Replace with your image path
    },
    {
      title: 'Exploria',
      description: 'Discover new innovations in the exploration of space and beyond.',
      image: '/images/exploria.jpg',  // Replace with your image path
    },
    {
      title: 'Evixia',
      description: 'A focus on cutting-edge technology and modern healthcare advancements.',
      image: '/images/evixia.jpg',  // Replace with your image path
    },
    {
      title: 'Ekonomia',
      description: 'Learn about the global economy, business strategies, and finance solutions.',
      image: '/images/ekonomia.jpg',  // Replace with your image path
    },
  ];

  return (
    <section className="CountryEvent Section">
      <Container>
        <div className="section-header text-center">
          {eventDetail ? (
            <div>
                <br/>
              <h2>Upcoming Event in {eventDetail.header}</h2>
              <p>{eventDetail.event}</p>
            </div>
          ) : (
            <h2>No event found for this country.</h2>
          )}
        </div>

        {/* Row for the additional cards */}
        <Row className="mt-4">
          {eventCategories.map((category, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={category.image} alt={category.title} />  {/* Add image to card */}
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Link to={`/event/${category.title.toLowerCase()}`}>
                  <Button variant="primary">View More</Button>
                </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CountryEvent;
