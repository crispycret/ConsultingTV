
import { useContext, useEffect } from 'react';
import { useMobile, useTitle } from 'eternite/hooks';

import NavScroll from '@/components/layout/NavScroll';
import Footer from '@/components/layout/Footer';
import { Landing, Scene1, Scene2 } from "@/components/scenes/home";



// import SEO components
import SEO from '@/utils/SEO';
import { SEOLoader, reducePropsForSEOLoader } from '@/components/utils/SEOLoader';
import { baseServerSideProps, defaultServerSideProps } from '@/utils/serverside/props';



/**
 * Fetch API data, add SEO tags, and pass data to the page component.
 * @returns 
 */
export const getServerSideProps = (ctx?: any) => baseServerSideProps('home', ctx);

// export const getServerSideProps = () => {
//     console.log("\nHome -> getServersideProps():")
//     console.log("process.env.TEST_ENV_VAR: " + process.env.TEST_ENV_VAR)
//     // import page content from json file
//     const content = require('@/assets/data/content/home-page.json')
//     return {
//         props: {
//             content,
//             seo: {
//                 metaTags: SEO.load('home/meta-tags.json'),
//                 jsonLd: SEO.load('home/json-ld.json')
//             },
//         }
//     }
// }



export const Home = (props: any) => {


    console.log("\nHome -> canonical: " +  props.seo.canonical)
    // console.log("\nHome -> context: " +  props.ctx)


    console.log("\nHome -> process.env:")
    console.log(process.env.NEXT_PUBLIC_GA4_TRACKING_ID)
    console.log(process.env.NEXT_PUBLIC_BACKEND_ENDPOINT)
    console.log(process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID)
    console.log(process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID)


    useTitle(props.content.title)
    // useTitle('Cord Cut Help | Home Page | Help Save Money on TV and Internet Bills')

    const { mobile } = useMobile()

    // List of components to map to the content entities of the content json file.
    const scenes: any[] = [
        Landing,
        Scene1,
        Scene2
    ]

    if (typeof window === "undefined") {
        console.log("\nHome -> Server-Side:")
        // console.log(props)
    } else {
        console.log("\nHome -> Client-Side:")
        // console.log(props)
    }


    // Transcribed from react project
    return (
        // App
        // reactProject/src/App.tsx
        <div className='App'>

            {/* <SEOLoader 
                title={props.content.title}
                jsonLd={props.seo.jsonLd} 
                metaTags={props.seo.metaTags} 
                canonical={true} 
            /> */}

            <SEOLoader { ...reducePropsForSEOLoader(props)} />



            {/* Main Layout */}
            {/* reactProject/src/components/layouts/MainLayout.tsx */}
            <div className="d-flex flex-column min-vh-100">
                <NavScroll />

                {/* Main Layout - <main> */}
                <main className="flex-grow-1 d-flex"> 
                    {/* Content */}
                    {/* reactProject/src/pages/HomePage.tsx */}
                    <div className={` w-100 min-vh-100 bg-secondary text-white`}>

                        {/* Loop through the content entities and draw a scene using that entity data if there is a scene to draw. */}
                        {props.content.entities.map((entity: any, index: number) => {
                            return scenes.length > index ? (
                                <div key={index} className="">
                                    {/* Render the component and pass the entity data */}
                                    {scenes[index](entity)}
                                </div>
                            ) : ( <div key={index}></div> ) })
                        }
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}




export default Home;