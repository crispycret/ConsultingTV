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
    `Error loading SEO JSON file: @/assets/data/${page}/${type}.json. Falling back to an empty array.`

/**
 * Loads a json file containing meta tags from the assets/data/seo folder.
 * @param path - The path to the JSON file, relative to the assets/data/seo folder.
 * @returns An array of built meta tags.
 */
export const load = (page=Pages.global, type=Types.page) => {
    let data = null;
    try { data = require(`@/assets/data/${page}/${type}.json`); } 
    catch (error) { console.warn(defaultLoadError(page, type)); }
    return data
}

export const loadJsonLd = (page=Pages.global) => load(page, Types.jsonLd)
export const loadMetaTags = (page=Pages.global) => load(page, Types.metaTags)

export const loadHosting = () => load(Pages.global, 'hosting')


// Must be called from getServerSideProps() to get the host name by passing the context object.
export const getHost = (ctx?: any) => {
    let url = loadHosting()?.host || null

    if (!url && ctx) {
        const proto = ctx?.req.headers["x-forwarded-proto"] || 
        ctx?.req.connection.encrypted ? "https" : "http" ||
        'http'
        url = `${proto}://${ctx?.req.headers.host}${ctx?.req.url}` 
    }
    return url
}

export const SEO = {
    Types, Pages,
    load, loadJsonLd, loadMetaTags, loadHosting,
    getHost,
    metaTags: {
        global: loadMetaTags(),
        home: loadMetaTags(Pages.home),
        about: loadMetaTags(Pages.about),
        contact: loadMetaTags(Pages.contact),
        faq: loadMetaTags(Pages.faq),
        privacy: loadMetaTags(Pages.privacy),
        terms: loadMetaTags(Pages.terms),
        notFound: loadMetaTags(Pages.notFound)
    },
    jsonLd: {
        global: loadMetaTags(),
        home: loadMetaTags(Pages.home),
        about: loadMetaTags(Pages.about),
        contact: loadMetaTags(Pages.contact),
        faq: loadMetaTags(Pages.faq),
        privacy: loadMetaTags(Pages.privacy),
        terms: loadMetaTags(Pages.terms),
        notFound: loadMetaTags(Pages.notFound)
    }, 
    Loader: SEOLoader,
    reduceProps: (props: any) => reducePropsForSEOLoader(props)
}

export default SEO