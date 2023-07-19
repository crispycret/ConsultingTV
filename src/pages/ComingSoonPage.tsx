// import HubspotForm from 'react-hubspot-form'



import EmailInputWithButton from "components/forms/EmailInputWithButton";
import { Container } from "react-bootstrap";


export const ComingSoonPage = () => {
    return (
        <div
        className="flex-grow-1 d-flex justify-content-center align-items-center bg-dark text-light" 
        style={{
            // backgroundImage: "url(https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg)"
        }}>

            <div className='my-0'>

                <div className='mb-5 top-0'>
                    <h1>Consulting.TV</h1>
                    <h2>Cut the Cord and Save.</h2>
                </div> 

                <div className="my-5"></div>
                <div className="my-5"></div>
                <div className="my-5"></div>

                <h1>Coming Soon</h1>

                <div className="mt-5"></div>
                    <div className="mt-5">
                </div>
                <div>
                    <h3 className='text-center'>Hello,</h3>
                    <p className='text-center'>Thanks for stopping by, we're exicited to show you what we have cooking up.</p>
                    <p className='text-center'>
                        We are currently under development but encourage you to reach out to learn more about how you can save on your TV/Internet, Cellular and Streaming services.
                    </p>
                    <div className="mt-5 mx-auto col-6 col-offset-4" >
                        <EmailInputWithButton />
                    </div>

                </div> 

                <Container fluid>

                <div className='fluid mt-5 bottom-0 text-light'>
                    <a href="mailto:donny@cordcuthelp.com" 
                        className='text-light' style={{textDecoration:'none'}}>
                        <h4>donny@cordcuthelp.com</h4>
                    </a>
                    <a href="tel:(774) 454-1621"
                        className='text-light ' style={{textDecoration:'none'}}>
                        <h4>(774)454-1621</h4>
                    </a>
                </div>
                </Container>


            </div>


{/* 
            <HubspotForm
                portalId='40692000'
                formId='a4e617e4-f056-498a-928a-4571ccd0bbaf'
                onSubmit={() => console.log('Submit!')}
                onReady={(form: any) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            /> */}

        </div>
    )
}


export default ComingSoonPage;

