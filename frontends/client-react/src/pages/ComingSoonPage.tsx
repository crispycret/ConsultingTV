
import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactForm from '../components/forms/ContactForm';
import useMobile from 'utils/common/hooks/useMobile';


export const StandardComingSoonPage = () => {

    // Using Twitter Bootstrap and react-bootstrap Create a Coming Soon Page that has the following:
    // 1. A Header with the following:
    //     a. Cut The Cord and Save Now
    // 2. A Body with the following:
    //     a. A message that says "Coming Soon" that has large text, is centered, is bold and uses a good font.
    //     b. A message that says "Hello, Thanks for stopping by, we're exicited to show you what we have cooking up." that is centered and uses a good font.
    //     c. A message that says "We are currently under development but encourage you to reach out to learn more about how you can save on your TV/Internet, Cellular and Streaming services." that is centered and uses a good font.
    //     d. A basic contact form that has the following:
    //         i. An email input field
    //         ii. A submit button
    // 3. A Footer with the following:
    //     a. A message that says "Contact Us" that is centered and uses a good font.
    //     b. A message that says "donny@cordcuthelp" that is centered and uses a good font.
    //     c. A message that says "(774) 454-1621" that is centered and uses a good font.

    const { mobile } = useMobile();

  

      return (
        <Container fluid className="bg-dark text-light d-flex flex-column">
          {/* <header className="text-center">
            <h1>Cut The Cord and Save Now</h1>
          </header> */}
          <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
              
              <header className="display-3 mt-3 font-weight-bold">
                <em>
                  <strong>
                    Coming Soon
                  </strong>
                </em>  
              </header>
              
              <main className='my-5'>
                <p className="lead mb-4 ">
                  <em><strong className='me-1'>Hello,</strong></em>
                  <small className='font-weight-normal'>
                    Thanks for stopping by, we're excited to show you what we have cooking up.
                  </small>
                </p>
                <p className={`lead mb-4 text-secondary ${mobile ? '' : 'col-6 mx-auto'}`}>

                  {mobile ?
                  <h6>
                    <small>
                      We are currently under development but encourage you to reach out to learn more about how you can save on your TV/Internet, Cellular, and Streaming services.
                    </small>
                  </h6>
                  :
                  <h6>
                      We are currently under development but encourage you to reach out to learn more about how you can save on your TV/Internet, Cellular, and Streaming services.
                  </h6>
                  }

                </p>
              </main>

              <footer>
                <ContactForm onSubmit={ () => {}}/>
              </footer>

            </div>
          </main>

          <footer className="flex-grow-1 text-center py-4">
            {/* <h2 className="mb-3 font-weight-bold">Contact Us</h2> */}
            <a href="mailto:donny@cordcuthelp.com" 
              className='text-light' style={{textDecoration:'none'}}>
              <h4>donny@cordcuthelp.com</h4>
            </a>
            <a href="tel:(774) 454-1621"
              className='text-light ' style={{textDecoration:'none'}}>
              <h4>(774)454-1621</h4>
            </a>
          </footer>
        </Container>
      );
    };
    
    export default StandardComingSoonPage;