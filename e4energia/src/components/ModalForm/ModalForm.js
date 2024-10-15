import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ModalForm.css';  // Importing the CSS file

const ModalForm = ({ showModal, setShowModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form is submitted

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill in all fields.');
            return;
        }

        // Handle form submission logic here
        console.log('Form submitted:', formData);

        // Show success alert
        alert('Form submitted successfully!');

        // Move the form to the left and close the modal after submission
        setIsSubmitted(true);
        setTimeout(() => {
            setShowModal(false);
            setIsSubmitted(false); // Reset state to allow reopening if needed
        }, 1000); // Delay closing the modal to allow the animation to play
    };

    return (
        <Modal 
            show={showModal} 
            onHide={() => {}} 
            backdrop="static" 
            className={`fade ${isSubmitted ? 'slide-left' : ''}`} 
            animation
        >
            <Modal.Header>
                <Modal.Title>Submit Your Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter your email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mt-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                            type="tel" 
                            placeholder="Enter your phone number" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required 
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="mt-3 primary">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalForm;
