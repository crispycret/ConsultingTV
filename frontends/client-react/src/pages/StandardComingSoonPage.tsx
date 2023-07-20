
import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactForm from '../components/forms/ContactForm';


export const StandardComingSoonPage = () => {

  const PORTAL_ID = 40825582
  const FORM_GUID = '173c9c27-7e0c-488a-9a62-3618d37a70f3'

  const FORM_SUBMISSION_URL = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${PORTAL_ID}/${FORM_GUID}`
  const OAUTH_TOKEN = 'pat-na1-c9dba1c0-2e13-450e-9588-44c56b536a84'

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


    // https://legacydocs.hubspot.com/docs/methods/forms/forms_overview
    // Instead of a form use the contacts batch update to add the email to the contacts list
    // Or create a wrapper that does the form and the batch update 
    const hubspotAPI_SendContactForm = async ( event: any ) => {
      event.preventDefault();


      const email = event.target.email.value
      const firstname = event.target.firstName.value
      const lastname = event.target.lastName.value
      const phone = event.target.phone.value

      const config = {
        headers: { Authorization: `Bearer ${OAUTH_TOKEN}` }
    };
    

      const formData = 
      {
        // "submittedAt": "1517927174000", // This millisecond timestamp is optional. Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
        "fields": [
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": email
          },
          {
          "objectTypeId": "0-1",
            "name": "firstname",
            "value": firstname
          },
          {
          "objectTypeId": "0-1",
            "name": "lastname",
            "value": lastname
          },
          {
          "objectTypeId": "0-1",
            "name": "phone",
            "value": phone
          }
        ],
        // "context": {
        //   "hutk": ":hutk", // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
        //   "pageUri": "www.cutthecord.com/contact",
        //   "pageName": "Basic Contact Form"
        // },
        "legalConsentOptions": {
          "consent": { // Include this object when GDPR options are enabled
            "consentToProcess": true,
            "text": "I agree to allow Example Company to store and process my personal data.",
            "communications": [
              {
                "value": true,
                "subscriptionTypeId": 999,
                "text": "I agree to receive marketing communications from Example Company."
              }
            ]
          }
        }
      }

      try {
        const response = await axios.post(
          'https://api.hubapi.com/contacts/v1/contact/batch/?hapikey=demo', 
          formData, 
          config
        )
        
          if (response.status === 200) {
          console.log(response)
        } else if (response.status === 204) {
          console.log(response)
        } else if (response.status === 400) {
          console.log(response)
        } else if (response.status === 403) {
          console.log(response)
        } else if (response.status === 404) {
          console.log(response)
        } else if (response.status === 500) {
          console.log(response)
        } else {
          console.log(response)
        }

      } catch (error) {
        console.log(error)
      }
            
    }


      return (
        <Container fluid className="bg-dark text-light d-flex flex-column">
          {/* <header className="text-center">
            <h1>Cut The Cord and Save Now</h1>
          </header> */}
          <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
            
            <div className="text-center">
              <header className="display-3 font-weight-bold">Coming Soon</header>
              
              <main className='my-5'>
                <p className="mb-4 font-weight-bold">Hello, Thanks for stopping by, we're excited to show you what we have cooking up.</p>
                <p className="mb-4">We are currently under development but encourage you to reach out to learn more about how you can save on your TV/Internet, Cellular, and Streaming services.</p>
              </main>

              <footer>
                <ContactForm onSubmit={hubspotAPI_SendContactForm}/>

              </footer>
              
            </div>
            

          </main>

          <footer className="flex-grow-1 text-center p-4">
            <p className="mb-1 font-weight-bold">Contact Us</p>
            <p className="mb-1">donny@cordcuthelp</p>
            <p>(774) 454-1621</p>
          </footer>
        </Container>
      );
    };
    
    export default StandardComingSoonPage;