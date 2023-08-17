import SEO from "@/utils/SEO";
import { baseServerSideProps } from "@/utils/serverside/props";

// export const getServerSideProps = (ctx?: any) => baseServerSideProps('404', ctx)
// export const getServerSideProps = (ctx?: any) => baseServerSideProps('notFound', ctx)


export const NotFound = (props: any) => {
    return (
        <>
            {/* <SEO.Loader {...SEO.reduceProps(props)} /> */}
            <div>
                <h1>Not Found</h1>
            </div>
        </>
    )
}


export default NotFound;
