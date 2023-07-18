import EmailInputWithButton from "components/forms/EmailInputWithButton";


export const ComingSoonPage = () => {
    return (
        <div
        className="flex-grow-1 d-flex justify-content-center align-items-center bg-dark text-light" 
        style={{
            // backgroundImage: "url(https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg)"
        }}>
            <div className='my-0'>

                {/* <div className='mb-5'>
                    <h1>Consulting.TV</h1>
                    <h2>Cut the cord and hazale while you save.</h2>
                </div> */}


                <h1>Coming Soon</h1>

                <div className="mt-5"></div>
                    <div className="mt-5">
                </div>
                <div>
                    <h3 className='text-center'>Hello,</h3>
                    <p className='text-center'>Thanks for Stopping, Were exicited to show you what were cooking up soon.</p>
                    <p className='text-center'>We are currently under development but encourage you to sign up for our services.</p>
                    <div className="mt-5 mx-5">
                        <EmailInputWithButton />
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ComingSoonPage;

