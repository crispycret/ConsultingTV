import Head from 'next/head';


export default function SEOPage() {
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
      </Head>
      <h1>SEO Page</h1>
      <p>This page is optimized for search engines and social media platforms.</p>
    </div>
  );
}
