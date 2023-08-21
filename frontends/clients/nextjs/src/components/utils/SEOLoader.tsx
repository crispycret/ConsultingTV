import Head from 'next/head';

export interface SEOLoaderProps {
    title?: string; // Page Title
    canonical?: string; // Special Meta Tag - Canonical URL
    jsonLd?: any;
    metaTags?: any; // Meta Tags object, each key is a meta tag name, each value is a meta tag object
    // Refactor to do what the above comment says. Currently each key is an index number
    global?: any; // Global SEO props
}

/**
 * 
 * @param props 
 * @returns 
 * 
 * @description
 * 
 * A component that loads SEO tags and JSON-LD structured data into the <head> of a page.
 * 
 * @example
 * 
 * import { SEOLoader } from '@/components/utils/SEOLoader';
 * 
 * // Create a host object that builds hosting information to be used for SEO.
 * // Canonical URL should be at least partially static, allowing for a set host name (global/hosting.json) and a dynamic path by default.
 * // This can be overridden by passing a canonical prop to the SEOLoader component.
 * // The canonical prop can be set with the useRoute() hook from next/router to get the current path on the client side.
 * // To get the current path on the server side, use the useRouter() hook from next/router and pass the path to the SEOLoader component.
 * 
 * SEOProps = { jsonLd: {}, metaTags: {}, canonical: 'https://cordcuthelp.com/about', title: 'About' }
 */
// export const SEOLoader = (props: SEOLoaderProps) => {
export const SEOLoader = (props: any) => {

    props = reducePropsForSEOLoader(props)

    return (
        <Head>

            {/* Apply global meta tags and JSON-LD if available */}
            { props.global && props.global.metaTags &&
                Object.keys(props.global.metaTags).map((key: any, index: number) =>
                <meta { ...props.global.metaTags[key] } key={ index } />)
            }
            { props.global && props.globaljsonLd && 
                <script type="application/ld+json">{ JSON.stringify(props.global.jsonLd) }</script> 
            }

            {/* Apply page specific title and canonical tag if available */}
            { props.title && <title>{ props.title }</title> }
            { props.canonical && <link rel="canonical" href={ `${props.canonical}` }/> }

            {/* Apply page specific meta tags and JSON-LD if available */}
            { props.metaTags && 
                Object.keys(props.metaTags).map((key: any, index: number) => 
                <meta { ...props.metaTags[key] } key={ index } />) 
            }
            { props.jsonLd && <script type="application/ld+json">{ JSON.stringify(props.jsonLd) }</script> }
            
        </Head>
    )
}



export default SEOLoader;





/**
 * Reduces the props object (baseServerSideProps) to only the props needed for the SEOLoader component.
 * 
 * Include some basic fallbacks for the title, jsonLd, metaTags, and canonical props.
 * Nested ternary operators are used to check for the existence of specific keys in a range of patterns.
 * 
 * @param props
 * @returns
 * 
 * @example - Here is how to use this function
 * 
 * @example - Here is how this function works
 * 
 * let props = {title: '', jsonLd: {}, metaTags: {}, canonical: ''
 * let seoProps = reducePropsForSEOLoader(props)
 * or
 * let props = {content: {title: ''}, seo: {jsonLd: {}, metaTags: {}, canonical: ''}}
 * or, a combination of the two
 * let props = {content: {title: ''}, jsonLd: {}, metaTags: {}, seo {canonical: ''}}
 *  
 */
export const reducePropsForSEOLoader = (props: any): SEOLoaderProps => {
// export const getSEOLoaderProps = (props: any) => {
    return {
        title: props.titile ? props.title 
            : props.content && props.content.title ? props.content.title 
            : null,
            
        jsonLd: props.jsonLd 
            ? props.jsonLd 
            : props.seo && props.seo.jsonld 
            ? props.seo.jsonLd
            : null,

        metaTags: props.metaTags 
            ? props.metaTags
            : props.seo && props.seo.metaTags
            ? props.seo.metaTags
            : null,

        canonical: props.canonical
            ? props.canonical
            : props.seo && props.seo.canonical
            ? props.seo.canonical
            : null,
        
        global: props.seo && props.seo.global 
            ? props.seo.global 
            : null, 
    }
}
