import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// import useMobile from 'utils/common/hooks/useMobile'
import useMobile from '../../utils/common/hooks/useMobile'

export const ContactForm = ({onSubmit}: any) => {

    const { mobile } = useMobile()


    const handleSubmit = (event:any) => {
        event.preventDefault();
        // After precocessing the data forward the form data to the parents onSubmit function
        onSubmit(event)
    }
    const handlePhoneNumberInput = (event:any) => { 
        event.preventDefault();
        console.log(event.target.value)
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