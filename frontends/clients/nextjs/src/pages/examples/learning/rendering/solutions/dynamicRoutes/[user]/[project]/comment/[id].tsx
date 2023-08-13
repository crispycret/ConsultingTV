/*
Use getStaticProps() in Combination with getStaticPaths():
- Ideal for creating dynamic routes with pre-rendered content.
- Especially useful when you have a fixed set of dynamic paths that can be determined at build time.
- Generates static pages during the build process based on the paths returned by getStaticPaths().
*/

// Use getStaticProps and getStaticPaths for dynamic routes
// Suitable for generating static pages with dynamic content


// Extracts url params from the request object
export async function getStaticPaths() {
    // Generate paths for dynamic routes
    // const paths = await getDynamicPaths(); // Return an array of dynamic paths
    // Generate paths for dynamic routes
    const paths = [
        { params: { user: 'user1', project: 'project1', id: '1' } },
        { params: { user: 'user2', project: 'project2', id: '2' } },
        // Add more paths as needed
    ];

    return {
        paths,
        fallback: false,
    };
}



export async function getStaticProps({ params }: any) {
    // Fetch data based on dynamic route parameters
    // const data = await fetchData(params.id);
    const { user, project, id } = params;
    const data = { user, project, id };

    return {
        props: { data },
    };
}


export default function DynamicRoutesPage({ data }: any) {
    return (
        <div>
            <h1>Dynamic Route Page</h1>
            <p>User: {data.user}</p>
            <p>Project: {data.project}</p>
            <p>ID: {data.id}</p>
        </div>
    );
}


