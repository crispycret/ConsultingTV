import ReactGA from 'react-ga4';
import track from './track';
import utils from './utils';
import events from './events';



const ga = {
    initialize: utils.initialize,
    getMetaTags: utils.getMetaTags,
    track,
    events
};

export default ga;