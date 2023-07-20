// import HubspotForm from 'react-hubspot-form'



import EmailInputWithButton from "components/forms/EmailInputWithButton";
import Footer from "components/layouts/Footer";
import { Container, Row } from "react-bootstrap";


export const ComingSoonPage = () => {
    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
        {/* <div
            className="flex-grow-1 flex-column bg-danger text-light" 
            style={{
            // backgroundImage: "url(https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg)"
        }}> */}

            {/* Header */}
            <div className='w-100 my-2 '>
                <h1>Consulting.TV</h1>
                <h2>Cut the Cord and Save.</h2>
            </div> 


            {/* Body */}
            <div className="w-100 flex-grow-1 d-flex justify-content-center align-items-center">
                <div className='text-light'>
                    
                    <h1 className="my-5">Coming Soon</h1>

                    <><div className="my-5"></div><div className="my-5"></div></>
                    <><div className="my-5"></div><div className="my-5"></div></>

                        <h3 className='text-center'>Hello,</h3>
                        <p className='text-center'>Thanks for stopping by, we're exicited to show you what we have cooking up.</p>
                    <div>
                        <p className='text-center'>
                            We are currently under development but encourage you to reach out to learn more about how you can save on your TV/Internet, Cellular and Streaming services.
                        </p>
                        <div className="mt-5 mx-auto col-6 col-offset-4" >
                            <EmailInputWithButton />
                        </div>

                    </div> 
                </div> 
            </div>


            {/* Footer */}
            <div className='w-100 bottom-0 mb-5 text-light '>
                <a href="mailto:donny@cordcuthelp.com" 
                    className='text-light' style={{textDecoration:'none'}}>
                    <h4>donny@cordcuthelp.com</h4>
                </a>
                <a href="tel:(774) 454-1621"
                    className='text-light ' style={{textDecoration:'none'}}>
                    <h4>(774)454-1621</h4>
                </a>
            </div>

        </div>
    )
}


export default ComingSoonPage;

