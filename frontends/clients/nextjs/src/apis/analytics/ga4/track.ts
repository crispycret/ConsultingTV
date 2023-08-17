
import React from 'react';
import ReactGA from 'react-ga4';
import { getMetaTags } from './utils';


export const track = (hitType: string, payload?: any) => {
    ReactGA.send({
        hitType, // pageview, event, etc...
        ...getMetaTags(), // Add meta tags to every hit
        ...payload  // specific hit data
    });
}


// Track a pageview
track.page = () => track("pageview")



// Track an event, examples: 
// trackEvent("user", "register", "new user", 1)
track.event = (category: string, action: string, label: string, value?: number, custom?: any) => {
    track("event", {
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value,
        ...custom
    });
}



export default track