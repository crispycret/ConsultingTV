import { Button, Col, Container, Row } from "react-bootstrap";

import useMobile from "utils/common/hooks/useMobile";

import { HowItWorks, WhyChooseUs } from "components/Content/details";
import Spacing from "components/layouts/Spacing";
import { lwavesBottom1 } from "components/Content/design";




export const Scene1 = () => {
    const mobile = useMobile()
    return (
        <div className='vh-100 w-100' style={{backgroundImage:`url(${lwavesBottom1})`, backgroundSize: 'cover'}}>
            <Spacing size={5} />

            {!mobile && <Spacing size={5} /> }
            {!mobile && <Spacing size={5} /> }
            
            <Row className='my-auto'>
                <HowItWorks />
                <Spacing size={5} />
                <WhyChooseUs />
            </Row>

        </div>
    );
}



export default Scene1;