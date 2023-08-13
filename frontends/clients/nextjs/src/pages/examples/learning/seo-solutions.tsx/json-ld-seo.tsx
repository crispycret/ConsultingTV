import Head from 'next/head';

export default function SEOPage() {
  return (
    <div>
      <Head>
        <title>SEO Page - My Next.js App</title>

        {/* Schema.org JSON-LD for structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Article",
              "headline": "SEO Page - My Next.js App",
              "description": "This is an SEO-friendly page.",
              "image": {
                "@type": "ImageObject",
                "url": "https://example.com/images/seo-image.jpg",
                "width": 1200,
                "height": 630
              },
              "author": {
                "@type": "Person",
                "name": "Your Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "My Next.js App",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://example.com/images/logo.png",
                  "width": 600,
                  "height": 60
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://example.com/seo-page"
              }
            }
          `}
        </script>
      </Head>

      <h1>SEO Page</h1>
      <p>This page is optimized for search engines and social media platforms.</p>
    </div>
  );
}
