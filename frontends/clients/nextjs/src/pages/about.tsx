import SEOLoader, { reducePropsForSEOLoader } from "@/components/utils/SEOLoader"
import { baseServerSideProps } from "@/utils/serverside/props"



// export const getServerSideProps = (ctx?: any) => baseServerSideProps('about', ctx)


// See contact.tsx for an example of how to use the SEOLoader component.
export const About = (props: any) => {
    return (
        <>
            {/* <SEOLoader {...reducePropsForSEOLoader(props)} /> */}

            <div>
                <h1>About</h1>
            </div>
        </>
    )
}


export default About;