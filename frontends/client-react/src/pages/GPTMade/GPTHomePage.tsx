import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import 'assets/styles/home.css'
import 'assets/styles/backgrounds.css'

const cartoon1 = require('../assets/images/cartoon1.png')

const GPTHomePage = () => {
  return (
    <div className="wavy-background-container vw-100 vh-100">
      

{/* 
      <div className="custom-shape-divider-top-1690601913">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
      </div> */}



    <Container className="mt-5">
      <h1>Save Money on Internet Bills! Find the Perfect Internet Provider Based on Your Viewing Habits.</h1>
      <Row className="mt-4">
        <Col md={8} className='col-md-offset-4'>
          <h3>Introduction:</h3>
          <p>Welcome to <strong>SmartConnect</strong>! We are your ultimate destination for finding the best internet providers that perfectly match your entertainment needs and help you save money. No more overpaying for services you don't need – our intelligent consultation service analyzes your viewing habits to recommend the most cost-effective internet plans tailored just for you.</p>
          <h3>How it Works:</h3>
          <ol>
            <li><strong>Tell Us What You Watch:</strong> Share your favorite streaming services, TV shows, movies, and online activities.</li>
            <li><strong>Receive Personalized Recommendations:</strong> Our advanced algorithm matches your preferences with the most suitable internet providers in your area.</li>
            <li><strong>Save Money and Enjoy Seamless Streaming:</strong> Get a cost-effective plan that enhances your viewing experience without breaking the bank.</li>
          </ol>
          <h3>Why Choose SmartConnect?</h3>
          <ul>
            <li><strong>Customized Solutions:</strong> Our consultation is tailored to your unique viewing habits, ensuring you only pay for what you use.</li>
            <li><strong>Expert Guidance:</strong> Our team of internet experts is here to assist you in setting up your new plan hassle-free.</li>
            <li><strong>Save Time & Effort:</strong> No more researching and comparing endless internet plans; we do the work for you!</li>
            <li><strong>Money-Back Guarantee:</strong> If you're not satisfied with our recommendations, we offer a 100% money-back guarantee.</li>
          </ul>
          <Button variant="primary" size="lg">Start Saving Now</Button>
        </Col>
        <Col md={4} className=''>
          {/* Add an image or any other relevant content for the landing page here */}
            <img src={cartoon1} alt="carton1"  className='w-100 min-w-100 min-h-100 me-0' />
        </Col>
      </Row>
    </Container>



    
    </div>
  );
};

export default GPTHomePage;
