import SEO from "@/utils/SEO";
import { baseServerSideProps } from "@/utils/serverside/props";

export const getServerSideProps = (ctx?: any) => baseServerSideProps('quote', ctx)


export const Quote = (props: any) => {
    return (
        <>
            <SEO.Loader {...SEO.reduceProps(props)} />
            <div>
                <h1>Quote</h1>
            </div>
        </>
    )
}


export default Quote;
