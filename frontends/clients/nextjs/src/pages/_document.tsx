
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

import { LinkGoogleFonts } from '@/utils/LinkGoogleFonts';

class MyDocument extends Document {

  render() {
    return (
      <Html>

        {/* <Entry /> */}
        {/* Add document head elements */}
        <Head>
          <LinkGoogleFonts />
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