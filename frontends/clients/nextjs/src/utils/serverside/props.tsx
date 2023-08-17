/**
 * @module utils/serverside/props.tsx
 * 
 * @description 
 * 
 * A collection of functions that return the server side props for a page. 
 * As a general rule, the defaultServerSideProps() function should be used for all pages that do not have a specific server side props function, 
 * but want to include SEO tags, JSON-LD structured data, and page content from a JSON file.
 * 
 * @example
 * 
 * import { baseServerSideProps } from "@/utils/serverside/props"
 * 
 * export const getServerSideProps = baseServerSideProps('about')
 * 
 * export const About = (props) => {
 *    return (
 *       <>
 *         <SEOLoader title="About" { ...props.seo } />
 *        <div>
 *           <h1>About</h1>
 *       </div>
 *     </>
 *  )
 * }
 */

import SEO  from '@/utils/SEO'


// object that contains all global SEO tags and JSON-LD structured data
export const globalSEOProps = {
    metaTags: SEO.metaTags.global,
    jsonLd: SEO.jsonLd.global
}



export const baseServerSideProps = (page='home', context?: any) => {
    process.env.DEV && console.log(`\n${page} -> getServersideProps():`)
    
    // import page content from json file
    // const content = require('@/assets/data/content/home/page.json')
    const content = SEO.load(page, SEO.Types.page)
    
    
    return {
        props: {
            content: SEO.load(page, SEO.Types.page),
            seo: {
                global: globalSEOProps,
                metaTags: SEO.loadMetaTags(page),
                jsonLd: SEO.loadJsonLd(page),
                canonical: SEO.getHost(context)
            },
        }
    }
}



export const defaultServerSideProps = baseServerSideProps()




export const props = {
    default: defaultServerSideProps,
    base: baseServerSideProps,
}

export default props;
