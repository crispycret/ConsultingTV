import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const EmailInputWithButton = () => {
  return (
    <InputGroup>
      <FormControl
        type="email"
        placeholder="Enter email"
        aria-label="Email"
        aria-describedby="send-button"
      />
      <Button id="send-button" variant="primary">Send</Button>
    </InputGroup>
  );
};

export default EmailInputWithButton;