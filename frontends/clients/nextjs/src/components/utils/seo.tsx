import Head from 'next/head';



export interface SEOLoaderProps {
    jsonLd?: any;
    metaTags?: any;
    canonical?: any;
}

export const SEOLoader = ({jsonLd, metaTags, canonical}: SEOLoaderProps) => {


    return (
        <Head>
            { canonical && <link rel="canonical" href="https://cordcuthelp.com/" />}
            {metaTags && metaTags.map((metaTag: any, index: number) => <meta {...metaTag} key={index} />)}
{/*             
            {metaTags && metaTags.map((metaTag: any, index: number) => {
                return (
                    <meta {...metaTag} key={index} />
                )
            })}
*/}
{/* 
            <meta name="description" content="This is an SEO-friendly page." />
            <meta name="keywords" content="next.js, SEO, optimization" />
            <meta name="author" content="Your Name" />
            <link rel="canonical" href="https://example.com/seo-page" /> 
*/}

            {/* Open Graph Meta Tags */}
{/* 
            <meta property="og:title" content="SEO Page - My Next.js App" />
            <meta property="og:description" content="This is an SEO-friendly page." />
            <meta property="og:image" content="https://example.com/images/seo-image.jpg" />
            <meta property="og:url" content="https://example.com/seo-page" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="My Next.js App" />
 */}
            {/* Twitter Card Meta Tags */}
{/*     
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="SEO Page - My Next.js App" />
            <meta name="twitter:description" content="This is an SEO-friendly page." />
            <meta name="twitter:image" content="https://example.com/images/seo-image.jpg" />
*/}

            {/* Include the JSON-LD data in the <head> of the document */}
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            
        </Head>
    )
}