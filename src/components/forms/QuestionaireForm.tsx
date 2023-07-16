import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const QuestionaireForm = () => {
    
    
    const [questions, setQuestions] = useState({

    })


    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
    
          {/* <Form.Group as={Col} controlId="formGridFullName"> */}
          <Form.Group controlId="fullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
    
            {/* <Form.Group as={Col} controlId="formGridPhoneNumber"> */}
            <Form.Group controlId="formGridPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              {/* <Form.Control type="phone" placeholder="(255) 555-5555" value={phoneNumber} onInput={handlePhoneNumberInput}/> */}
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
{/*                 
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
 */}
                
              </Form.Select>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
    
          <div className="text-center">
            <Button variant="primary" type="submit" size='lg' onSubmit={(e) => handleSubmit(e)}>
              <span className='px-4 mx-4'>Next</span>
            </Button>
          </div>
        </Form>
      );

}


export default QuestionaireForm;