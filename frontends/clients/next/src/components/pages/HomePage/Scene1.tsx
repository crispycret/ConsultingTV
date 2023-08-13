import { Button, Col, Container, Row } from "react-bootstrap";

import { useMobile } from "eternite/hooks";

import { HowItWorks, WhyChooseUs } from "components/content/details";
import Spacing from "components/layouts/Spacing";
import { lwavesBottom1 } from "components/content/design";




export const Scene1 = () => {
    const { mobile } = useMobile()
    return (
        <div className='min-vh-100 w-100' style={{
            backgroundImage:`url(${lwavesBottom1})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            }}>

            {mobile && <Spacing size={5} /> }

            {!mobile && <Spacing size={5} /> }
            {/* {!mobile && <Spacing size={5} /> } */}
            
            <Row className='my-auto'>
                <HowItWorks />
                <Spacing size={5} />
                <WhyChooseUs />
            </Row>

        </div>
    );
}



export default Scene1;