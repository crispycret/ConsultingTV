/*
Use getServerSideProps() with fallback: true:
- Useful for generating pages on-demand while still taking advantage of pre-rendering.
- Generates the page on each request, which is slower than static generation but can handle dynamic content.
- Good for pages that are rarely visited or need up-to-date data (e.g., archive pages).
*/

// Use getServerSideProps with fallback: true for on-demand rendering
// Suitable for rarely visited pages or pages with dynamic content

export async function getServerSideProps() {
    // Fetch data from an external API
    // const data = await fetchData();
    const data = { data: 'data'};

    return {
        props: { data },
    };
}
export default function ServerSideRenderingFallbackPage({ data }: any) {
    return <div>{ data.data }</div>;
}
