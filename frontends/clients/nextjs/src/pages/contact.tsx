
import { Col, Row } from "@/lib/bootstrap";

import SEO from "@/utils/SEO";
import { baseServerSideProps } from "@/utils/serverside/props";

import { ContactForm } from "@/components/forms";
import { Footer, Spacer } from "@/components/layout";
import NavScroll from "@/components/layout/NavScroll";
import { useMobile } from "eternite/hooks";

export const getServerSideProps = (ctx?: any) => baseServerSideProps('quote', ctx)


export const Quote = (props: any) => {

    // const bgImageSrc = entity ? `url(${require(`@/assets/images/${entity.bgImage}`).default.src})` : ''
    // const bgImageSrc = `url(${require(`@/assets/images/_haikei/layered-waves-haikei-top-dark.svg`).default.src})`
    const bgImageSrc = `url(${require(`@/assets/images/_haikei/layered-waves-haikei-bottom-dark.svg`).default.src})`
    const bgImageSrcMobile = `url(${require(`@/assets/images/_haikei/blob-scene-haikei-dark.svg`).default.src})`

    const { mobile } = useMobile()

    return (
        <>
            <SEO.Loader {...props} />
            <NavScroll />

            <div className='App text-center text-light m-0 p-0'>

                <Row className='min-vh-100 w-100 m-0 p-0' style={{
                        backgroundImage:`${ mobile ? bgImageSrcMobile : bgImageSrc }`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -30
                }}>
        
                    <Col md={6} className='my-auto mx-auto'>
                        <Spacer size={5} />
                        <Col md={8} className="mx-auto">
                            <h2 className='h2'>How to Contact Us</h2>
                            <Spacer size={3} />
                            <p className='lead'>Do you have questions regarding our service? Please provide some contact information and a service technician will reach out to you shortly. </p>
                        </Col>

                        <Spacer size={3} />

                        {!mobile && <>
                            <Spacer size={5} />
                            <Spacer size={5} />
                        </> }
                    </Col>
                    <Col md={6} className='my-auto'>
                        <Spacer size={3} />
                        <h2>Contact Form</h2>
                        <Spacer size={3} />
                        <ContactForm />
                        <Spacer size={3} />
                    </Col>
                </Row>
            </div>

            <Footer />
        </>
    )
}


export default Quote;
