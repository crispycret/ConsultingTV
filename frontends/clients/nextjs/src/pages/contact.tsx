import SEO from "@/utils/SEO";
import { baseServerSideProps } from "@/utils/serverside/props";

export const getServerSideProps = (ctx?: any) => baseServerSideProps('contact', ctx)


export const Contact = (props: any) => {
    return (
        <>
            <SEO.Loader {...SEO.reduceProps(props)} />
            <div>
                <h1>Contact</h1>
            </div>
        </>
    )
}


export default Contact;
