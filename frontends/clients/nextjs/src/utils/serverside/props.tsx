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
 * or
 * export const getServerSideProps = async (ctx) => baseServerSideProps('about', ctx)
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



export const baseServerSideProps = async (page='home', context?: any) => {
    process.env.DEV && console.log(`\n${page} -> getServersideProps():`)

    return {
        props: {
            content: await SEO.load(page, SEO.Types.page),
            seo: {
                global: {
                    metaTags: await SEO.metaTags.global,  // Load global meta tags
                    jsonLd: await SEO.jsonLd.global       // Load global JSON-LD data
                },
                metaTags: await SEO.loadMetaTags(page),   // Load meta tags for this page
                jsonLd: await SEO.loadJsonLd(page),       // Load JSON-LD data for this page
                canonical: await SEO.getHost(context)     // Set canonical URL to the current page.
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
