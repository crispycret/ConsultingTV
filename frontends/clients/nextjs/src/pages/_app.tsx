import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
import ga from "@/apis/analytics/ga4";
// import "../styles/globals.css";


export const getServerSideProps = () => {
    console.log("MyApp -> getServersideProps():")
    // ga.initialize()
}

function MyApp({ Component, pageProps }: any) {

    if (typeof window !== "undefined") {
        console.log("\nMyApp -> Client-Side:")
        ga.initialize()
    }

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
