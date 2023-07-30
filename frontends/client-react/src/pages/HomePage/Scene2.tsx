import ContactForm from "components/forms/ContactForm";

import { lwavesTop2 } from "components/Content/design";
import Spacing from "components/layouts/Spacing";
import { Contact } from "components/Content/Contact";

export const Scene2 = () => {
    return (
        <div className='vh-100 w-100' style={{backgroundImage:`url(${lwavesTop2})`, backgroundSize: 'cover'}}>
            <Spacing size={5} />
            <Spacing size={5} />
            <h1>Contact Us</h1>
            <Spacing size={3} />

            <ContactForm />

            <Spacing size={5} />

            <footer>
                <Contact /> 
            </footer>
        </div>
    );
}



export default Scene2;