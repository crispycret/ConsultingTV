import { cartoon1, lwavesTop2 } from "components/Content/design";
import Spacing from "components/layouts/Spacing";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import useMobile from "utils/common/hooks/useMobile";





export const Landing = () => {
    const { mobile } = useMobile()

    return (
        <div className='min-vh-100 w-100' 
            style={{
                backgroundImage:`url(${lwavesTop2})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
        }}>
            
            <Spacing size={5} />

            {/* Extra vertical spacing when not on mobile */}
            {!mobile && <Spacing size={5} /> }
            {!mobile && <Spacing size={5} /> }

            {/* Content */}
            <Row>
                {/* Left Side of the Screen. */}
                <Col md={8} className='mx-auto' style={{fontFamily: 'Aktiv Grotesk'}}>
                    {/* This container is to add some extra margins for the content. It looks better not push against the screen */}
                    <Container> 
                        <Col md={8} className='mx-auto'> {/* Narrow the space content will be drawn on even further */}

                            {/* Title */}
                            <div className='display-3  text-center' style={{fontWeight: 'bold'}}>
                                <p className='mb-2 '>Save Money on Internet Bills!</p>
                                <p className='h5 mt-0' style={{fontWeight: 'bold'}}>
                                    {/* Find the Perfect Internet Provider Based on Your Viewing Habits. */}
                                </p>
                            </div>
                            {/* Description */}
                            <div className='h6 lead mt-5 mb-3 mx-auto'>
                                <p>
                                    {/* We are your ultimate destination for finding the best internet providers that perfectly match your entertainment needs and help you save money.  */}
                                    Don't overpay for services you don't need – our intelligent consultation service analyzes your viewing habits to recommend the most cost-effective internet plans tailored just for you.
                                </p>
                            </div>

                            {/* Buttons */}
                            <Row>
                                <Col md={6} className={`mx-auto my-2 ${!mobile && 'text-end'}`}>
                                    <Button variant="primary" href="/quote" size="lg">Getting Started</Button>
                                </Col>
                                <Col md={6} className={`mx-auto my-2  ${!mobile && 'text-start'}`}>
                                    <Button variant="trasparent" className='border-black text-white' href="/contact" size="lg">Contact Us</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Container>

                </Col>

                {/* Right Side of the Screen. Used to Place Images or reverse content to the right side of the screen */}
                <Col md={4}>
                    <img src={cartoon1} alt="blob" className='w-100' />
                </Col>
            </Row>

        </div>
    );
}




export default Landing;

