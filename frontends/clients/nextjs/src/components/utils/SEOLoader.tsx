import Head from 'next/head';

export interface SEOLoaderProps {
    jsonLd?: any;
    metaTags?: any;
    canonical?: string;
    title?: string;
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
            { props.title && <title>{ props.title }</title> }
            {/* Include the JSON-LD data and Meta Tags in the <head> of the document */}
            {/* { props.canonical && <link rel="canonical" href="https://cordcuthelp.com/" /> } */}
            { props.canonical && <link rel="canonical" href={ `${props.canonical}` }/> }
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
 */
export const reducePropsForSEOLoader = (props: any) => {
// export const getSEOLoaderProps = (props: any) => {
    return {
        title: props.content && props.content.title,
        jsonLd: props.seo && props.seo.jsonLd,
        metaTags: props.seo && props.seo.metaTags,
        canonical: props.seo && props.seo.canonical,
    }
}
