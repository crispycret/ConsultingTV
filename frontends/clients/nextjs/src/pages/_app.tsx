import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
import ga from "@/apis/analytics/ga4";
// import "../styles/globals.css";


export const getServerSideProps = () => {
    process.env.DEV && console.log("MyApp -> getServersideProps():")
    // ga.initialize()
}

function MyApp({ Component, pageProps }: any) {

    if (typeof window !== "undefined") {
        process.env.DEV && console.log("\nMyApp -> Client-Side:")
        ga.initialize()
    }

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
