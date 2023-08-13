/*
Use getStaticProps() for Full Page Pre-rendering (Static Generation):
- Recommended when the data is relatively stable and doesn't change frequently.
- Generates static HTML and JSON files during the build process.
- Provides the fastest loading times, as pages are pre-rendered and served directly from a CDN.
- Well-suited for content-rich pages that don't require real-time data.
*/

// Use getStaticProps to fetch data during build time
// Suitable for content-rich pages that don't require real-time updates
export async function getStaticProps() {
    // Fetch data from an external API
    // const data = await fetchData();
    const data = { data: 'data'};

    return {
        props: { data },
    };
}
export default function StaticGenerationPage({ data }: any) {
    return <div>{ data.data }</div>;
}
