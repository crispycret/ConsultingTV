import ReactGA  from "react-ga4";
import { clientInfo } from "eternite/utils";


export const initialize = (trackingId?: string) => {
    trackingId = trackingId || process.env.REACT_APP_GA4_TRACKING_ID || "";
    ReactGA.initialize(trackingId);
}



// metaTags is a collection of data that is sent with every hit to GA4.
export const metaTags = {
    metaInfoPagetitle: document.title,
    metaInfoPageName: window.location.pathname,
    metaInfoUrl: window.location.href,
    metaInfoReferrer: document.referrer,
    metaSystemOS: clientInfo.getOS(),
    metaSystemOVersion: clientInfo.getOSVersion(),
    metaSystemBrowser: clientInfo.getBrowser(),
    metaSystemBrowserVersion: clientInfo.getBrowserVersion(),
    metaSystemLanguage: navigator.language,
    metaSystemDevice: clientInfo.getDevice(),
    metaSystemDeviceType: clientInfo.getDeviceType(),
    metaSystemDeviceScreenResolution: `${window.screen.width}x${window.screen.height}`,
    metaSystemDeviceViewportSize: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
    metaSystemDeviceColorDepth: window.screen.colorDepth,
    
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


const utils = {
    initialize,
    metaTags,
}


export default utils