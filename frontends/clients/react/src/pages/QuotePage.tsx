import PhysicalAddress from "components/forms/PhysicalAddress";
import QuestionaireForm from "components/forms/QuestionaireForm";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useTitle from "utils/common/hooks/useTitle";

export const QuotePage = () => {

    useTitle('Quote | Cord Cut Help');


    const maxPage = 3
    const [page, setPage] = useState(1)
    
    const [physicalAddress, setPhysicalAddress] = useState({
        fullName: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const [questionaire, setQuestionaire] = useState({
    })

    const prevPage = () => {
        if (page === 1) {
            return
        }
        setPage(page - 1)
    }

    const nextPage = () => {
        if (page === maxPage) {
            // Send the entire form through the API
            return
        }

        setPage(page + 1)

        console.log(physicalAddress)
    }
    

    return (
        
        <div className="container text-start">

            <div className="row my-3">
                <div className='text-center'>
                    <h1>Consulting.TV</h1>
                    <p>Consulting.TV is a platform for consultants to share their knowledge and expertise with the world.</p>
                </div>
            </div>

            { page === 1 &&
                <PhysicalAddress setPhysicalAddress={setPhysicalAddress} onSubmit={nextPage} />
            }
            { page === 2 &&
                <QuestionaireForm />
            }

            <Row className="text-center">

                <Col>
                {/* <Button variant="primary" type="submit" size='lg' onSubmit={(e) => handleSubmit(e)}> */}
                <Button variant="primary" type="submit" size='lg' onSubmit={(e) => prevPage()} onClick={prevPage}>
                    <span className='px-4 mx-4'>Prev</span>
                </Button>
                </Col>

                <Col>
                <Button variant="primary" type="submit" size='lg' onSubmit={(e) => nextPage()} onClick={nextPage}>
                    <span className='px-4 mx-4'>Next</span>
                </Button>
                </Col>
            </Row>
        </div>


    )

}


export default QuotePage;