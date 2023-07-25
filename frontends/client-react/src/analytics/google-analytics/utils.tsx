import React from 'react';
import ReactGA from 'react-ga4';
import system from 'utils/common/system';


// https://developers.google.com/analytics/devguides/collection/ga4/sending-data
// https://developers.google.com/analytics/devguides/collection/ga4/validate-data
// https://developers.google.com/analytics/devguides/collection/ga4/using-events

// metaTags is a collection of data that is sent with every hit to GA4.
export const metaTags = {
    title: document.title,
    page: window.location.pathname,
    hostname: window.location.hostname,
    location: window.location.href,
    referrer: document.referrer,
    language: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
    colorDepth: window.screen.colorDepth,
    deviceType: system.getDeviceType(),
    device: system.getDevice(),
    browser: system.getBrowser(),
    browserVersion: system.getBrowserVersion(),
    os: system.getOS(),
    osVersion: system.getOSVersion(),
    
    // userId: getUserId(),
    // clientId: getClientId(),
    // campaignName: getCampaignName(),
    // campaignSource: getCampaignSource(),
    // campaignMedium: getCampaignMedium(),
    // campaignKeyword: getCampaignKeyword(),
    // campaignContent: getCampaignContent(),
    // campaignId: getCampaignId(),
    // eventCategory: getEventCategory(),
    // eventAction: getEventAction(),
    // eventLabel: getEventLabel(),
    // eventValue: getEventValue(),
    // nonInteraction: getNonInteraction(),
    // transport: getTransport(),
    // queueTime: getQueueTime(),
    // customTask: getCustomTask(),
    // name: getName(),
    // hitCallback: getHitCallback(),
    // hitPayload: getHitPayload(),
    // sessionControl: getSessionControl(),
    // groups: getGroups(),
}



export const initialize = (trackingId?: string) => {
    trackingId = trackingId || process.env.REACT_APP_GA4_TRACKING_ID || "";
    
    ReactGA.initialize(trackingId);
}

export const track = (hitType: string, payload?: any) => {
    ReactGA.send({
        hitType, // pageview, event, etc...
        ...metaTags, // Add meta tags to every hit
        ...payload  // specific hit data
    });
}

// Track a pageview
export const trackPageview = () => track("pageview")


// Track an event, examples: 
// trackEvent("button", "click", "nav buttons", 4)
// trackEvent("video", "play", "cats video")
// trackEvent("form", "submit", "contact form", 1)
// trackEvent("user", "register", "new user", 1)
export const trackEvent = (category: string, action: string, label: string, value?: number, custom?: any) => {
    track("event", {
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value,
        ...custom
    });
}



export default {
    initialize,
    metaTags,
    track,
    trackPageview,
    trackEvent
}