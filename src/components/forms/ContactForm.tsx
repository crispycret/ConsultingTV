import React, { useEffect } from "react";

// import { useHistory } from "react-router-dom";
import { redirect } from "react-router-dom";

import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { IoIosCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";

// import useMobile from 'utils/common/hooks/useMobile'
import useMobile from '../../utils/common/hooks/useMobile'
import axios from "axios";



/**
 * Contact Form
 * 
 * A form for users to submit their contact information to the API.
 * 
 * Performs form field validation and formatting as the user types the email and phone number.
 * Locks the submit button until the form is valid which is checked everytime a formfield is updated.
 * This supports validation of the form as a whole before submitting it to the API.
 * 
 * Will inform the user if the form was submitted successfully or if there was an error.
 * This is done by displaying a popup window with a message and a button to redirect the user to the home page or allowing them to try again.
 * This window is displayed for 5 seconds before redirecting the user to the home page or allowing them to try again automatically. 
 * 
 * The window should have a loading spinner while the form is being submitted,
 * then display a success message below a checkmark icon if the form was submitted successfully 
 * or an error message below an error icon if there was an error.
 * 
*/
export const ContactForm = ({onSubmitCallback}: any) => {

    const { mobile } = useMobile()

    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const [isValidEmail, setIsValidEmail] = React.useState(false)
    const [isValidPhone, setIsValidPhone] = React.useState(false)
    const [isValidForm, setIsValidForm] = React.useState(false)

    const [message, setMessage] = React.useState('')
    const [redirectTimer, setRedirectTimer] = React.useState(5)
    
    const [submitted, setSubmitted] = React.useState(false)
    const [submitOk, setSubmitOk] = React.useState(false)
    const [submitError, setSubmitError] = React.useState(false)

    // Simple data tracking for the form fields as the user types.
    const handleFirstNameInput = (event:any) => setFirstname(event.currentTarget.value)
    const handleLastNameInput = (event:any) => setLastname(event.currentTarget.value)
    // const handleEmailInput = (event:any) => setEmail(event.currentTarget.value)
    // const handlePhoneInput = (event:any) => setPhone(event.currentTarget.value)
    // const handleMessageInput = (event:any) => setMessage(event.currentTarget.value)



    /**
     * Handle the form input by tracking the validitiy of the form as the user types with a boolean.
     * User typing is tracked by listening to changes in the state variables for each form field.
     * This function is called every time a form field is changed. (Using useEffect)
     * @param event
    */
    useEffect(() => {
      if (firstname && lastname && email && phone) {
        setIsValidForm(true)
      } else {
        setIsValidForm(false)
      }
    }, [firstname, lastname, email, phone])
    // const useValidateFormInput = () => useEffect(() => {
    //   if (firstname && lastname && email && phone && message) {
    //     setIsValidForm(true)
    //   } else {
    //     setIsValidForm(false)
    //   }
    // }, [firstname, lastname, email, phone, message])
    // useValidateFormInput()
   
      

    /**
     * Handle the email input by tracking the validitiy of the email format as the user types with a boolean.
     * @param event 
    */
    const handleEmailInput = (event:any) => {
  
        // track the email as the user types and use regex to determine if it is valid.
        // Validate the email format using regex
        setIsValidEmail(event.currentTarget.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        setEmail(event.currentTarget.value)
    }
    


    /**
     * Handle the phone number input by formatting it as the user types.
     * Keep track of the validity of the phone number format as the user types with a boolean.
     * @param event
    */
    const handlePhoneNumberInput = (event:any) => { 

      // Keep the phone number formatted as a phone number. i.e. (555) 555-5555
      let phoneNumber = event.currentTarget.value

      // Replace all non-digits with nothing, then match the first 3 digits, then the next 3 digits, then the last 4 digits
      // into an array of 4 elements [ '1234567890', '123', '456', '7890' ].
      const tempPhoneNumber = phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)

      // Then format the phone number as (123) 456-7890 as the user types      
      phoneNumber = ''
      if (tempPhoneNumber[1]) phoneNumber += '(' + tempPhoneNumber[1] + ')'
      if (tempPhoneNumber[2]) phoneNumber += ' ' + tempPhoneNumber[2]
      if (tempPhoneNumber[3]) phoneNumber += '-' + tempPhoneNumber[3]

      // Validate the phone number format using regex
      setIsValidPhone(phoneNumber.match(/^\(\d{3}\) \d{3}-\d{4}$/))

      // Set the phone number state
      setPhone(phoneNumber)
    }




    // Place the below commits into a multi-line comment block
    /**
     * Process and Validate the form data before submitting it to the API.
     * If the form data is invalid, disable submission and notify the user and allow them to correct the form data.
     * Id the form data is valid, submit it to the API.
     * If the form data is submitted successfully, notify the user and redirect them to the home page.
     * If the form data is not submitted successfully, notify the user and allow them to try again.
     * 
     * @param event 
     */
    // Process the form data before submitting it to the API (Handled by each form field's onInput handler)
      // Validate the form data before submitting it to the API (Handled by each form field's onInput handler)

    // If the form data is invalid, notify the user and allow them to correct the form data 
      // Handled in the render function by displaying an error message if the form field is not valid
        // (Red border around the form field and a message below the form field)
      // While the form data is invalid, do not allow the user to submit the form
    const handleSubmit = (event:any) => { 
        event.preventDefault();

        setSubmitted(true)
        sendForm(event)

        // Parent Component
        // onSubmitCallback(event)
    }


    const sendForm = async (event: any) => {
      try {

        // Build the payload for the API
        const payload = {
          fields: {
            firstname, lastname, email, phone,
          }
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        // get the portal_id and form_id from the environment variables that point to the HubSpot Contact Form
        const portal_id = process.env.REACT_APP_HUBSPOT_PORTAL_ID
        const form_id = process.env.REACT_APP_HUBSPOT_CONTACT_FORM_ID

        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/apis/v1/hubspot/forms/submit/${portal_id}/${form_id}`
        const response = await axios.post(url, payload, config)
        
        if (response.status >= 200 && response.status < 300) {
          console.log(response)
          onSendFormOk(response)
        } else if (response.status >= 400) {
          onSendFormError(response)
        } 

      } catch (error) {
        console.log(error)
        // Redirect to the home page after 5 seconds if there was an unknown error
        onUnknownError(error)
        redirect('/')
      }
    }

    // Display success message to user and redirect them to the home page
    const onSendFormOk = (response: any) => {
      setSubmitOk(true)
      setSubmitError(false)
      setMessage('Thank You! Your form was submitted successfully. Redirecting you to the home page.')
      setTimeout(() => {
        redirect('/')
      }, 5000)
    }

    // Display error message to user and allow them to try again by redirecting them to the form page
    const onSendFormError = (response: any) => {
      setSubmitOk(false)
      setSubmitError(true)
      setMessage('Whoops! There was an error submitting your form. Please try again.')
      setTimeout(() => {
        redirect('/')
      }, 5000)
    }

    const onUnknownError = (error: any) => {
      setSubmitOk(false)
      setSubmitError(true)
      setMessage('Whoah! An unknown error occurred. Please try again.')
      setTimeout(() => {
        redirect('/')
      }, 5000)
    }




    return (
      <>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Row className={`mb-3 ${mobile ? 'col-12' : 'col-6'} mx-auto text-start`}>

                <Form.Group as={mobile ? "div" : Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="John" value={firstname} 
                      onInput={handleFirstNameInput}/>
                </Form.Group>


                {/* Add some spacing between form fields for the names if on mobile */}
                {mobile && <div className='my-2'></div>}

                <Form.Group as={mobile ? "div" : Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Doe" value={lastname} 
                      onInput={handleLastNameInput}/>
                </Form.Group>




                {/* Create a Form Group for an email that has a red border and a message below the Form.Control notifying the user that the email is not valid*/ }
                <div className='my-2'>
                  <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="example@email.com"
                          onInput={(e) => handleEmailInput(e)}
                          className={`${isValidEmail ? '' : 'is-invalid'}`}
                      />
                      
                      { !isValidEmail && 
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                      }
                  </Form.Group>
                </div>


                <div className='my-2'>
                  <Form.Group className='phoneNumber' controlId="phoneNumber" >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="phone" placeholder="(555) 555-5555" value={phone}
                          onInput={(e) => handlePhoneNumberInput(e)}
                          className={`${isValidPhone ? '' : 'is-invalid'}`}
                      />
                      
                      { !isValidPhone && 
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid phone number.
                        </Form.Control.Feedback>
                      }
                  </Form.Group>
                </div>
              
            </Row>
    

            <Button variant="primary" type="submit" 
              className={`px-2 ${mobile ? 'col-8 col-offset-2' : 'col-4 col-offset-4'}`}
              disabled={!isValidForm}
              > Submit 
            </Button>
        </Form>

        {/* Display a popup window with a message and a button to redirect the user to the home page or allowing them to try again */}
        {submitted &&
          <div className='popup'>
            <div className='popup-inner'>
              <div className='popup-icon'>
                {submitError ? <i className='fa fa-times'></i> : <i className='fa fa-check'></i>}
              </div>
              <div className='popup-message'>
                {message}
              </div>
            </div>
          </div>
        }

        {/* Display a popup window using react-bootstrap and bootstrap */}
        <Modal  centered show={submitted} onHide={() => setSubmitted(false)} className='pb-5' size={mobile ? 'lg' : undefined}>
          <Modal.Body>
            <div className='text-center mx-auto'>
              <h1>
                {submitOk ? 
                <IoIosCheckmarkCircle className='text-success' />
                :
                <IoMdCloseCircle className='text-danger' />
                }
              </h1>
              <p className='col-8 mx-auto'>
                {message}
              </p>

              {/* Add a redirect message here with a timer that gets updated */}
              <div className='mx-auto my-3 redirect-message'>
                Redirect in {redirectTimer} seconds.
              </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSubmitted(false)}
            className="mx-auto"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </>
    )
}




export default ContactForm;