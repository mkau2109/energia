import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'react-phone-input-2/lib/style.css'; // Importing the phone input CSS
import PhoneInput from 'react-phone-input-2';
import './ContactForm.css'; // Ensure you import the CSS file

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', role: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle phone input change
  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setFormStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', message: '', role: '' }); // Reset form
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Something went wrong!' });
    }
  };

  return (
    <div id="contact" className="contact-form p-4">
      <h2>Register with Us</h2>
      {formStatus && (
        <Alert variant={formStatus.type === 'success' ? 'success' : 'danger'}>
          {formStatus.message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col xs={12} md={12} className="mb-3">
            <Form.Group controlId="formRole">
              <Form.Label>Register As</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="agent">Agent</option>
                <option value="dealership">Dealership</option>
                <option value="membership">Membership</option>
                <option value="sponsorship">Sponsorship</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {/* Name Field */}
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>

          {/* Email Field */}
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>

          {/* Phone Field with Country Code */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formPhone">
              <Form.Label>Phone (with country code)</Form.Label>
              <div className="phone-input">
                <PhoneInput
                  country={'us'} // You can set the default country
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  enableSearch={true}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </Form.Group>
          </Col>

          {/* Register As Field */}
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formRole">
              <Form.Label>Register As</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="agent">Agent</option>
                <option value="dealership">Dealership</option>
                <option value="membership">Membership</option>
                <option value="sponsorship">Sponsorship</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Message Field */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;