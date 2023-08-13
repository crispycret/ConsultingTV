// import { getList } from "@/apis/archive";
import Head from 'next/head';


/*
 * Because we are fetching a lot of data from an external API, we need to pagenate the data to avoid performance issues.
 * By default the threshold for page size is 128kb. 
 * If the page size exceeds this threshold, we will get a warning and performance will be greatly affected.
 * Threshold size can be increased in next.config.js like this:
 * 
 * // next.config.js
 * {
 * ...
 *  experimental: {
 *  //largePageDataBytes: 128 * 1000, // 128KB by default
 *    largePageDataBytes: 128 * 100000,
 *  }
 * }
 * 

/*
  Understanding the Flow from Server-Side Rendering (SSR) to Client

  - The getServerSideProps function is executed on the server side.
  - The data returned by getServerSideProps is used to pre-render the page on the server before sending it to the client.
  - This means that the page is already rendered with data on the server side.
  - The pre-rendered page is then sent to the client's browser for display.

  This approach of pre-rendering on the server side is essential for SEO. Search engines can better understand and index
  pages that are fully rendered, improving discoverability and search rankings. Providing fresh data through Server-Side
  Rendering ensures that users receive a fully-rendered page with up-to-date content, benefiting both user experience and SEO.
*/
export const getServerSideProps = async () => {

    // Fetch data from an external API
    // const data = await getList();
    const data = ['hello', 'world']

    const seoScore = 85; // Your actual SEO score

    // Create JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Review",
    //   "name": "Your Organization",
      "itemReviewed": {
        "@type": "Thing",
        "name": "Your Website or Page Name",
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": seoScore,
      },
      "author": {
        "@type": "Person",
        "name": "Your Name",
      },
        // Add other properties as needed
    };


    return {
        props: {
            data,
            jsonLd, // Pass the JSON-LD data as a prop
        },
    }

}




export  const SeoJsonLdPage = ({jsonLd, data}: any) => {

    return (
      <div>
        <Head>
            
          <title>SEO Page - My Next.js App</title>
          <meta name="description" content="This is an SEO-friendly page." />
          <meta name="keywords" content="next.js, SEO, optimization" />
          <meta name="author" content="Your Name" />
          <link rel="canonical" href="https://example.com/seo-page" />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="SEO Page - My Next.js App" />
          <meta property="og:description" content="This is an SEO-friendly page." />
          <meta property="og:image" content="https://example.com/images/seo-image.jpg" />
          <meta property="og:url" content="https://example.com/seo-page" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="My Next.js App" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SEO Page - My Next.js App" />
          <meta name="twitter:description" content="This is an SEO-friendly page." />
          <meta name="twitter:image" content="https://example.com/images/seo-image.jpg" />
            
          {/* Include the JSON-LD data in the <head> of the document */}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            
        </Head>

        <h1>SEO Page</h1>
        <p>This page is optimized for search engines and social media platforms.</p>

        <h4>There are {data.count} APIs in this list.</h4>
        <ul>
          {data.entries.map((item: any, i: number) => (
            <li key={i}>{item.API}</li>
          ))}
        </ul>
            
      </div>
    )
}


export default SeoJsonLdPage;

