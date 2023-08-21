import { Spacer } from "@/components/layout";
import { Col, Row } from "@/lib/bootstrap";
import SEO from "@/utils/SEO";
import { baseServerSideProps } from "@/utils/serverside/props";
import { useCountdownTimer, useMobile } from "eternite/hooks";

// export const getServerSideProps = (ctx?: any) => baseServerSideProps('404', ctx)
// export const getServerSideProps = (ctx?: any) => baseServerSideProps('notFound', ctx)


import { useRouter } from 'next/navigation'
import router from "next/router";
import { useEffect } from "react";
 



// export const getServerSideProps = (ctx?: any) => baseServerSideProps('404', ctx)


export const NotFound = (props: any) => {


    const {startTimer, cancelTimer, remainingTime, formatTime} = useCountdownTimer(3)

    useEffect(() => {
        startTimer(3, () => {
            router.push('/')
        })
    }, [])
    
    const { mobile } = useMobile()

    return (
        <>
            {/* <SEO.Loader {...props} /> */}
            <div className='App text-center text-light bg-dark'>

                <Row className='min-vh-100 w-100 m-0 p-0' style={{}}>
        
                    <Col md={6} className='my-auto mx-auto'>
                        <Spacer size={5} />
                        <Col md={8} className="mx-auto">
                            <h2 className='h2'>OOOF! No Page Found</h2>
                            <Spacer size={3} />
                            <p className='lead'>Stick to navigating this site normally please.</p>
                            <p className='lead'>Redirecting you back to the home page in {formatTime(remainingTime)}.</p>
                        </Col>

                        <Spacer size={3} />

                    </Col>
                </Row>

            </div>
        </>
    )
}


export default NotFound;
