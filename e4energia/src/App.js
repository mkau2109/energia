import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import './index.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Header from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MeetingRoom from './components/About_info/MeetingRoom';
import Lounges from './components/About_info/Lounges';
import OpenDesk from './components/About_info/OpenDesk';
import Aminities from './components/Aminities/Aminities';
import Footer from './components/Footer/Footer';
import Country from './components/Country/Country';
import SlideForm from './components/SlideForm/SlideForm';
import ModalForm from './components/ModalForm/ModalForm';  
import CountryEvent from './components/Event_country/CountryEvent';
import EventDetails from './components/Event_country/EventDetails';
import BookingPage from './components/Booking/BookingPage';

function App() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // UseEffect to display the modal when the component mounts
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 1000);  // Delay to show the modal after 1 second
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Country />
              <About />
              <Aminities />
              <ContactPage />
            </>
          } />
          <Route path="/meeting-rooms" element={<MeetingRoom />} />
          <Route path="/lounges" element={<Lounges />} />
          <Route path="/opendesk" element={<OpenDesk />} />
          <Route path="/country/:countryName" element={<CountryEvent />} />
          <Route path="/event/:category" element={<EventDetails />} /> 
          <Route path="/booking" element={<BookingPage/>} /> 
        </Routes>
        <SlideForm />
        <Footer />
        <ModalForm showModal={showModal} setShowModal={setShowModal} />
      </div>
    </Router>
  );
}

export default App;
