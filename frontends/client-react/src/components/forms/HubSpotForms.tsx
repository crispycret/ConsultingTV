import React, {useEffect} from "react";

// const HubspotContactForm = () => {
const HubspotForm = () => {
    useEffect(() => {
        // const script = document.createElement('script');
        // script.src='https://js.hsforms.net/forms/v2.js';
        // document.body.appendChild(script);

        // script.addEventListener('load', () => {
        //     // @TS-ignore
        //     if (window.hbspt) {
        //         // @TS-ignore
        //         window.hbspt.forms.create({
        //             portalId: 'YOUR_PORTAL_ID_HERE',
        //             formId: 'YOUR_FORM_ID_HERE',
        //             target: '#hubspotForm'
        //         })
        //     }
        // });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>HubspotContactForm
        </div>
    );

}

export default HubspotForm;