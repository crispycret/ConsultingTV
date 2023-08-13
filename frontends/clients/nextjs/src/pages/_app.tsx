import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../app/globals.css";
// import "../styles/globals.css";


function MyApp({ Component, pageProps }: any) {
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
