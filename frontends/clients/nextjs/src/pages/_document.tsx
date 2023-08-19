
import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * This is a custom document that overrides the default Next.js document.
 * 
 * Adding SEO tags and JSON-LD structured data to the <head> of this page will provide some SEO benefits.
 * These tags will be included on every page of the site but can be overridden on a per-page basis to provide 
 * more specific SEO information for each page.
 * 
 * For example, consider the following scenario:
    In _document.tsx, you define a global meta description: <meta name="description" content="Global description" />.
    In PageComponent.tsx, you define a page-specific meta description: <meta name="description" content="Page-specific description" />

    The meta description for PageComponent.tsx will be "Page-specific description" because it overrides the global meta description.
 */

import SEO from '@/utils/SEO';
import SEOLoader from '@/components/utils/SEOLoader';
import { LinkGoogleFonts } from '@/utils/LinkGoogleFonts';

class MyDocument extends Document {

  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    // console.log("\nMyDocument -> getInitialProps:")
    // console.log(initialProps)
    return {
      ...initialProps,
    }
  }



  render() {
    return (
      <Html>

        {/* <Entry /> */}
        {/* Add document head elements */}
        <Head>
          <LinkGoogleFonts />
          <SEOLoader jsonLd={SEO.jsonLd.global} metaTags={SEO.metaTags.global} />
        </Head>
      
        {/* Add document body elements */}
        <body>
            <Main />
            <NextScript />
        </body>

      </Html>
    );
  }
}
export default MyDocument;