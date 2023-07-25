
/**
 * 
 * How to use this module:
 * 
 * Import the module in your index.tsx file and initialize it with your tracking ID:
 * The tracking ID should be stored in the environment variables as REACT_APP_GA4_TRACKING_ID=G-XXXXXXXXX-X
 * 
 * [index.tsx]
 * import ga4 from './analytics/google-analytics';
 * ga4.initialize();
 *
 * Send a pageview event to Google Analytics:
 * Best practice is to place this in the useEffect hook of your App.tsx file.
 * 
 * [App.tsx]
 * import ga4 from './analytics/google-analytics';
 * 
 * useEffect(() => {
 *  ga4.trackPageview();
 * }, []);
 * 
 * 
 * 
 * Send an event to Google Analytics:
 * A custom event can be sent to Google Analytics with the following function:
 * 
 * ga4.trackEvent("category", "action", "label", value, custom={})
 *
 * The custom object can be used to send additional data to Google Analytics.
 *  
 * Examples:
 * ga4.trackEvent("button", "click", "nav buttons", 4)
 * ga4.trackEvent("button", "click", "nav buttons", 4, {buttonName: "About Us"})
 * 
 * 
 * Or you can use the events object to send a predefined events:
 * 
 * 
 * Examples:
 * ga4.events.contactFormSubmission(true) -> sends a contact form submission event to Google Analytics
 * ga4.events.formSubmission("Contact Form", "Contact Form", true) -> sends a contact form submission event to Google Analytics
 * 
 * 
 * contactFormSubmission is a wrapper for formSubmission while formSubmission is a wrapper for trackEvent. Here is the same event sent using each method:
 * 
 * ga4.events.contactFormSubmission(true)
 * ga4.events.formSubmission("Contact Form", "Contact Form", true)
 * ga4.trackEvent("Form", "Submit", "Success", 1, {formType: "Contact Form", formName: "Contact Form"})
 * 
 */


import { 
    initialize, 
    metaTags, 
    track, trackEvent, trackPageview, 
} from './utils';

import events from './events';


export const ga4 = {
    initialize,
    track,
    trackEvent,
    trackPageview,
    metaTags,
    events
}

export default ga4;
