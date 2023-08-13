import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import QUESTIONS from 'assets/data/questionaire.json'

export const QuestionaireForm = () => {
    

    const [answers, setAnswers] = useState(QUESTIONS.length)

    console.log(answers)
    console.log(QUESTIONS)



    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    
    return (
      <>
        {/* <form 
          method="POST"  action="https://docs.google.com/forms/d/{YOUR_FORM_ID_HERE}/formResponse"
        >
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email" />
          <button className="button" type="submit" >
            Submit
          </button>
        </form>

         */}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
          </Row>
    
          <Row className="mb-3">

            {QUESTIONS.map((question, i) => (
                <Form.Group className='my-1' key={i}>
                    <Form.Label>{question.title}</Form.Label>
                    {question.multipleChoice ? (
                        <Form.Select defaultValue="Choose...">
                            {question.options.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </Form.Select>
                    ) : (
                        <Form.Control />
                    )}

                </Form.Group>
            ))}

          </Row>
    
          {/* <div className="text-center">
            <Button variant="primary" type="submit" size='lg' onSubmit={(e) => handleSubmit(e)}>
              <span className='px-4 mx-4'>Next</span>
            </Button>
          </div> */}
        </Form>
      </>

      );

}


export default QuestionaireForm;