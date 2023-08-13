import { useMobile } from "eternite/hooks";

import { Button, Col, Container, Row } from "@/lib/bootstrap";
import { Spacer }  from "@/components/layout";

import { cartoons } from "@/assets/images";
const cartoon1 = cartoons.cartoon1.src;




export const Landing = (entity: any) => {

    const { mobile } = useMobile()

    // Build the background image url from the entity data if it exists, otherwise use no image.
    const bgImageSrc = entity ? `url(${require(`@/assets/images/${entity.bgImage}`).default.src})` : ''

    return (
        <div className='min-vh-100 w-100' 
            style={{
                // backgroundImage:`url(${lwavesTop2})`, backgroundSize: 'cover',
                backgroundImage:`${ bgImageSrc }`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
        }}>
            
            <Spacer size={5} />

            {/* Extra vertical spacing when not on mobile */}
            {!mobile && <Spacer size={5} /> }
            {!mobile && <Spacer size={5} /> }

            {/* Content */}
            <Container>

            <Row>
                {/* Left Side of the Screen. */}
                <Col md={8} className='mx-auto' style={{fontFamily: 'Aktiv Grotesk'}}>
                    {/* This container is to add some extra margins for the content. It looks better not push against the screen */}
                    <Container> 
                        <Col md={8} className='mx-auto'> {/* Narrow the space content will be drawn on even further */}

                            {/* Title */}
                            <div className='display-3  text-center' style={{fontWeight: 'bold'}}>
                                <p className='mb-2 '>{ entity ? entity.content.title : 'Title' }</p>
                                <p className='h5 mt-0' style={{fontWeight: 'bold'}}>
                                    {/* Find the Perfect Internet Provider Based on Your Viewing Habits. */}
                                    {/* {entity.content.subtitle} */}
                                </p>
                            </div>
                            {/* Description */}
                            <div className='h6 lead mt-5 mb-3 mx-auto'>
                                <p>
                                    {/* We are your ultimate destination for finding the best internet providers that perfectly match your entertainment needs and help you save money.  */}
                                    { entity ? entity.content.description : ''}
                                    {/* Don't overpay for services you don't need – our intelligent consultation service analyzes your viewing habits to recommend the most cost-effective internet plans tailored just for you. */}
                                </p>
                            </div>

                            {/* Buttons */}
                            <Row>
                                <Col md={6} className={`mx-auto my-2 ${!mobile && 'text-end'}`}>
                                    {/* <Button variant="primary" href="/quote" size="lg">Getting Started</Button> */}
                                    <Button variant="primary" href={ entity ? entity.content.buttons[0].to : '' } size="lg">
                                        { entity ? entity.content.buttons[0].text : '' }
                                    </Button>
                                </Col>
                                <Col md={6} className={`mx-auto my-2  ${!mobile && 'text-start'}`}>
                                    {/* <Button variant="trasparent" className='border-black text-white' href="/contact" size="lg">Contact Us</Button> */}
                                    <Button variant="trasparent" className='border-black text-white' 
                                        href={ entity ? entity.content.buttons[1].to : '' } size="lg">
                                            { entity ? entity.content.buttons[1].text : "" }
                                    </Button>
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
            </Container>

        </div>
    );
}




export default Landing;

