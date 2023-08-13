



/**
 * Loads a json file containing meta tags from the assets/data/seo folder.
 * @param path - The path to the JSON file, relative to the assets/data/seo folder.
 * @returns An array of built meta tags.
 */
export const load = (path: string) => {
    
    let metaTags;

    try {
        metaTags = require('@/assets/data/seo/' + path);
    } catch (error) {
        console.warn('Error loading Meta Tag JSON file used for SEO: @/assets/data/seo/' + path + '. Falling back to an empty array.', error);
        metaTags = []
    }
    return metaTags
}


export const loadGlobalMetaTags = () => load('global/meta-tags.json')


export default {
    load,
    global: loadGlobalMetaTags()
}