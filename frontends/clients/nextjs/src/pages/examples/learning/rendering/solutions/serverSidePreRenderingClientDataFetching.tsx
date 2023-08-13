/*
Server-Side Pre-rendering with Client-Side Data Fetching:
- Useful for pages with a substantial amount of data that can't be pre-rendered efficiently.
- Initial content is pre-rendered on the server side, providing SEO benefits.
- Use client-side data fetching for the rest of the data after the page loads.
- Suitable for content-heavy pages where the initial view matters more for SEO than the dynamic content.
*/

import { useEffect, useState } from "react";

// Use getServerSideProps for initial server-side rendering and client-side data fetching
// Suitable for pages with heavy initial content and dynamic data
export async function getServerSideProps() {
    // Fetch initial data on the server side
    // const initialData = await fetchInitialData();
    const initialData = { data: 'data' };

    return {
        props: { initialData },
    };
}
export default function ServerSidePreRenderingClientDataFetchingPage({ initialData }: any) {

    const [moreData, setMoreData] = useState(initialData)
    useEffect(() => {
        const fetchData = async () => {
            // const moreData = await fetchMoreData(); // Fetch additional data on the client side
            const moreData = {data: 'more data'}; // Fetch additional data on the client side
            // Update state or perform actions with moreData
            setMoreData(moreData)
        };

        fetchData();
      }, []);
      
    return (
        <div>
            {/* Render initial data */}
            { initialData.data }

            {/* Use client-side data fetching for more data */}
            { moreData.data }
        </div>
    );
}

