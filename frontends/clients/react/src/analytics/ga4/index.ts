import ReactGA from 'react-ga4';

import track from './track';
import utils from './utils';
import events from './events';



const ga = {
    track,
    initialize: utils.initialize,
    metaTags: utils.metaTags,
    events
};

export default ga;