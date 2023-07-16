import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
]



export const PhysicalAddress = ({setPhysicalAddress, onSubmit}:any) => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submitting form')

    setPhysicalAddress({
        fullName: e.target.fullname.value,
        streetAddress: e.target.formGridAddress1.value,
        city: e.target.formGridCity.value,
        state: e.target.formGridState.value,
        zipCode: e.target.formGridZip.value
    })

    onSubmit()

  }

  const handlePhoneNumberInput = (e: any) => {
    console.log(e.target.value)
    // process the input to use the format (xxx) xxx-xxxx
    let formattedPhoneNumber = e.target.value
    // remove all non-numeric characters
    formattedPhoneNumber = formattedPhoneNumber.replace(/\D/g,'')
    // add the parenthesis and dash
    formattedPhoneNumber = formattedPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    // set the state
    setPhoneNumber(formattedPhoneNumber)
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
          <Form.Control type="phone" placeholder="(255) 555-5555" value={phoneNumber} onInput={handlePhoneNumberInput}/>
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
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
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

export default PhysicalAddress;