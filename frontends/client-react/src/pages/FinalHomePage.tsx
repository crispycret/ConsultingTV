import ContactForm from "components/forms/ContactForm";
import { Button, Col, Container, Row } from "react-bootstrap";
import useMobile from "utils/common/hooks/useMobile";
import useTitle from "utils/common/hooks/useTitle";

const waveTop = require('assets/images/haikei/wave-top.svg').default;
const waveBottom = require('assets/images/haikei/wave-bottom.svg').default;

const blob1 = require('assets/images/haikei/blob-scene-haikei.svg').default;

const lwavesTop1 = require('assets/images/haikei/lwavesTop1.svg').default;
const lwavesBottom1 = require('assets/images/haikei/lwavesBottom1.svg').default;
const lwavesTop2 = require('assets/images/haikei/lwavesTop2.svg').default;
const lwavesBottom2 = require('assets/images/haikei/lwavesBottom2.svg').default;
const lwavesTop3 = require('assets/images/haikei/lwavesTop3.svg').default;
const lwavesBottom3 = require('assets/images/haikei/lwavesBottom3.svg').default;
const lwavesShort = require('assets/images/haikei/lwavesShort.svg').default;

const cartoon1 = require('../assets/images/cartoon1.png')


export const Page2Content = () => {
    return (
        <Row className='my-auto'>
            <Col md={12} className='my-auto mx-auto'>
                <h3 className='mt-1 mb-3 display-5'>How it Works:</h3>
            </Col>
          <ol className=''>
            <li className='my-2'><strong className='h5'>Tell Us What You Watch:</strong> Share your favorite streaming services, TV shows, movies, and online activities.</li>
            <li className='my-2'><strong className='h5'>Receive Personalized Recommendations:</strong> Our advanced algorithm matches your preferences with the most suitable internet providers in your area.</li>
            <li className='my-2'><strong className='h5'>Save Money and Enjoy Seamless Streaming:</strong> Get a cost-effective plan that enhances your viewing experience without breaking the bank.</li>
          </ol>

          <div className='py-5'></div>

          <h3 className='my-3 display-5'>Why Choose Us?</h3>
          <ul>
            <li><strong>Customized Solutions:</strong> Our consultation is tailored to your unique viewing habits, ensuring you only pay for what you use.</li>
            <li><strong>Expert Guidance:</strong> Our team of internet experts is here to assist you in setting up your new plan hassle-free.</li>
            <li><strong>Save Time & Effort:</strong> No more researching and comparing endless internet plans; we do the work for you!</li>
            <li><strong>Money-Back Guarantee:</strong> If you're not satisfied with our recommendations, we offer a 100% money-back guarantee.</li>
          </ul>
        </Row>
    )
}

export const Page1Content = () => {

    const mobile = useMobile()

    return (
        <Row>
            <Col md={8} className='mx-auto' style={{fontFamily: 'Aktiv Grotesk'}}>
                <Container>
                <Col md={8} className='mx-auto'>

                <div className='display-3  text-center' style={{fontWeight: 'bold'}}>
                    <p className='mb-2 '>Save Money on Internet Bills!</p>
                    <p className='h5 mt-0' style={{fontWeight: 'bold'}}>
                        {/* Find the Perfect Internet Provider Based on Your Viewing Habits. */}
                    </p>
                </div>
                <div className='h6 lead mt-5 mb-3 mx-auto'>
                    <p>
                        {/* We are your ultimate destination for finding the best internet providers that perfectly match your entertainment needs and help you save money.  */}
                        Don't overpay for services you don't need – our intelligent consultation service analyzes your viewing habits to recommend the most cost-effective internet plans tailored just for you.
                    </p>
                </div>

                <Row>
                    <Col md={6} className={`mx-auto my-2 ${!mobile && 'text-end'}`}>
                        <Button variant="primary" href="/quote" size="lg">Getting Started</Button>
                    </Col>
                    <Col md={6} className={`mx-auto my-2  ${!mobile && 'text-start'}`}>
                        <Button variant="trasparent" className='border-black text-white' href="/quote" size="lg">Contact Us</Button>
                    </Col>
                </Row>
                </Col>
                </Container>

            </Col>
            <Col md={4}>
                <img src={cartoon1} alt="blob" className='w-100' />
            </Col>
        </Row>

    );
}



export const Page1 = () => {
    const mobile = useMobile()

    return (
        <div className='vh-100 w-100' style={{backgroundImage:`url(${lwavesTop2})`, backgroundSize: 'cover'}}>
            <div className='py-5'></div>
            {!mobile &&  <div className='py-5'></div> }
            {/* <h1>Page 1</h1> */}
            <Page1Content />
        </div>
    );
}



export const Page2 = () => {
    const mobile = useMobile()
    return (
        <div className='vh-100 w-100' style={{backgroundImage:`url(${lwavesBottom1})`, backgroundSize: 'cover'}}>
            <div className='py-5'></div>
            {!mobile &&  <div className='py-5'></div> }
            {/* <h1>Page 2</h1> */}
            <Page2Content />
        </div>
    );
}


export const Page3 = () => {
    return (
        <div className='vh-100 w-100' style={{backgroundImage:`url(${lwavesTop2})`, backgroundSize: 'cover'}}>

            <div className='py-5'></div>
            <div className="py-3"></div>

            <h1>Contact Us</h1>

            <div className="py-3"></div>

            <ContactForm />
        </div>
    );
}


export const FinalHomePage = () => {

    useTitle('Home | Cord Cut Help');


    return (
        <div className="w-100 min-vh-100 pt-5 bg-secondary text-white">
            <Page1 />
            <Page2 />
            <Page3 />

        </div>
    );
}



