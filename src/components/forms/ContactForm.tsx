import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// import useMobile from 'utils/common/hooks/useMobile'
import useMobile from '../../utils/common/hooks/useMobile'
import axios from "axios";

export const ContactForm = ({onSubmit}: any) => {

    const { mobile } = useMobile()


    const handleSubmit = (event:any) => {

        event.preventDefault();
        // After precocessing the data forward the form data to the parents onSubmit function

        console.log()

        // Forward to API
        hubspotAPI_SendContactForm(event)
        onSubmit(event)
    }
    const handlePhoneNumberInput = (event:any) => { 
        event.preventDefault();
        console.log(event.target.value)
    }



      // https://legacydocs.hubspot.com/docs/methods/forms/forms_overview
    // Instead of a form use the contacts batch update to add the email to the contacts list
    // Or create a wrapper that does the form and the batch update 
    const hubspotAPI_SendContactForm = async ( event: any ) => {
  
        console.log(`Sending Contact Form: ${process.env.REACT_APP_BACKEND_ENDPOINT}`)
        const portal_id = process.env.REACT_APP_HUBSPOT_PORTAL_ID
        const form_id = process.env.REACT_APP_HUBSPOT_CONTACT_FORM_ID
        const email = event.target.email.value
        const firstname = event.target.firstName.value
        const lastname = event.target.lastName.value
        const phone = event.target.phone.value
  
        const payload = {portal_id, form_id, email, firstname, lastname, phone }

        console.log(payload)
  
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/v1/forms/contact/submit`, 
            payload, 
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
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Row className={`mb-3 ${mobile ? 'col-12' : 'col-6'} mx-auto text-start`}>

                <Form.Group as={mobile ? "div" : Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="John" />
                </Form.Group>

                {/* Add some spacing between form fields for the names if on mobile */}
                {mobile && <div className='my-2'></div>}

                <Form.Group as={mobile ? "div" : Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Doe" />
                </Form.Group>
    
                <div className='my-2'>
                    <Form.Group controlId="email" className='my-2'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@email.com" value={"example@email.com"} 
                            // onInput={() => {}}
                        />
                    </Form.Group>
                </div>

                <div className='my-2'>
                    <Form.Group className="phoneNumber" controlId="phone">
                        <Form.Label>Phone Number (Optional)</Form.Label>
                        <Form.Control type="phone" placeholder="(255) 555-5555" value={"555-555-5555"} 
                            // onInput={handlePhoneNumberInput}
                        />
                    </Form.Group>
                </div>
            </Row>
    
           

            <Button variant="primary" type="submit" className="px-2">
                Submit
            </Button>
        </Form>
    )
}




export default ContactForm;