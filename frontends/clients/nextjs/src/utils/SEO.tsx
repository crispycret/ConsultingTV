import firebase from '@/apis/backend/firebase' 
import SEOLoader, { reducePropsForSEOLoader } from "@/components/utils/SEOLoader";

export const Types = {
    page: 'page',
    metaTags: 'metaTags',
    jsonLd: 'jsonLd'
}
export const Pages = {
    global: 'global',
    home: 'home',
    about: 'about',
    contact: 'contact',
    faq: 'faq',
    privacy: 'privacy',
    terms: 'terms',
    notFound: 'notFound'
}


export const defaultLoadError = (page=Pages.global, type=Types.page) => 
    `Error loading JSON file: @/assets/data/${page}/${type}.json. Falling back to an empty array.`


export const firebaseLoadError = (page=Pages.global, type=Types.page) => 
    `Error loading Backend(Flask) Firebase API JSON file: .../${page}/${type}.json. Falling back to default JSON file.`




/**
 * Load a json file from the firebase database or from the assets/data/ folder as a backup.
 * @param path - The path to the JSON file, relative to the assets/data/seo folder.
 * @returns An array of built meta tags.
 * @todo End up combining all content into one json file for each page.
 */
export const load = async (page=Pages.global, type=Types.page, local=false) => {
    let data = null;

    // Try to load the JSON file from the firebase database.
    if (!local) {
        try { 
            data = (await firebase.request_page_file('get', `${type}.json`, page)).data
            // data = await firebase.get_page_file(`${type}.json`, page)
        } catch (error) { console.warn("Error loading JSON file from firebase database. Falling back to local JSON file.")}
    }

    // Use the default static file if available as a backup.
    if (!data) {
        try { data = require(`@/assets/data/${page}/${type}.json`); } 
        catch (error) { console.warn(defaultLoadError(page, type)); }
    }
    
    return data
}

export const loadHosting = () => load(Pages.global, 'hosting', true)
export const loadJsonLd = async (page=Pages.global) => await load(page, Types.jsonLd)
export const loadMetaTags = (page=Pages.global) => load(page, Types.metaTags)


// Must be called from getServerSideProps() to get the host name by passing the context object.
export const getHost = async (ctx?: any) => {
    let url = null

    // let url = await loadHosting()
    // url = url?.host || null

    if (!url && ctx) {
        const proto = ctx?.req.headers["x-forwarded-proto"] || 
        ctx?.req.connection.encrypted ? "https" : "http" ||
        'http'
        url = `${proto}://${ctx?.req.headers.host}${ctx?.req.url}` 
    }
    return url
}

const SEO = {
    Types, Pages,
    load, loadJsonLd, loadMetaTags, loadHosting,
    host: getHost(),
    getHost,
    metaTags: {
        global: loadMetaTags(),
        home: loadMetaTags(Pages.home),
        // about: loadMetaTags(Pages.about),
        // contact: loadMetaTags(Pages.contact),
        // faq: loadMetaTags(Pages.faq),
        // privacy: loadMetaTags(Pages.privacy),
        // terms: loadMetaTags(Pages.terms),
        // notFound: loadMetaTags(Pages.notFound)
    },
    jsonLd: {
        global:  loadJsonLd(),
        home: loadJsonLd(Pages.home),
        // about: loadMetaTags(Pages.about),
        // contact: loadMetaTags(Pages.contact),
        // faq: loadMetaTags(Pages.faq),
        // privacy: loadMetaTags(Pages.privacy),
        // terms: loadMetaTags(Pages.terms),
        // notFound: loadMetaTags(Pages.notFound)
    }, 
    Loader: SEOLoader,
    reduceProps: (props: any) => reducePropsForSEOLoader(props)
}

export default SEO