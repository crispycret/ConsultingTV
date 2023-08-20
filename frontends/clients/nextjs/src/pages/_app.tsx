import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
// import ga from "@/apis/analytics/ga4";




console.log('Starting the application...');

export const getServerSideProps = () => {
    process.env.DEV && console.log("MyApp -> getServersideProps():")
    // ga.initialize()
}

function MyApp({ Component, pageProps }: any) {
    console.log('Starting the application...');

    if (typeof window !== "undefined") {
        process.env.DEV && console.log("\nMyApp -> Client-Side:")
        // ga.initialize()
    }

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
