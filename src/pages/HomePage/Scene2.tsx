import ContactForm from "components/forms/ContactForm";

import { lwavesTop2 } from "components/Content/design";
import Spacing from "components/layouts/Spacing";
import { Contact } from "components/Content/Contact";
import useMobile from "utils/common/hooks/useMobile";

export const Scene2 = () => {
    const { mobile } = useMobile()
    return (
        <div className='min-vh-100 w-100' style={{
            backgroundImage:`url(${lwavesTop2})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            }}>

                
            <Spacing size={5} />
            {!mobile ? <Spacing size={5} /> : <Spacing size={1} />}
            {/* {!mobile ? <Spacing size={5} /> : <Spacing size={1} />} */}

            <h1>Contact Us</h1>

            <Spacing size={3} />

            <ContactForm />

            {!mobile ? <Spacing size={5} /> : <Spacing size={3} />}

            <footer>
                <Contact /> 
                {mobile && <Spacing size={4} />}
            </footer>
        </div>
    );
}



export default Scene2;