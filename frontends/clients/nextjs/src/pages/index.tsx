
import { useContext, useEffect } from 'react';
import { useMobile, useTitle } from 'eternite/hooks';

import NavScroll from '@/components/layout/NavScroll';
import Footer from '@/components/layout/Footer';
import { Landing, Scene1, Scene2 } from "@/components/scenes/home";


// import page content from json file
const content = require('@/assets/data/home-page.json')


// import SEO components
import jsonLd from '@/utils/json-ld';
import { SEOLoader } from '@/components/utils/seo';
import metaTags from '@/utils/metaTags';



export const getServerSideProps = () => {
    console.log("\nHome -> getServersideProps():")
    // Load Home Page Json-LD and meta tags
    let jsonLdData = jsonLd.load('home/json-ld.json')
    // let jsonLdData = jsonLd.load('home/json-ld.min.json')

    let metaTagData = metaTags.load('home/meta-tags.json')
    return {
        props: {
            jsonLdData,
            metaTagData,
        },
    }

}


export const Home = (props: any) => {

    useTitle('Cord Cut Help')

    const { mobile } = useMobile()

    // List of components to map to the content entities of the content json file.
    const scenes: any[] = [
        Landing,
        Scene1,
        Scene2
    ]

    if (typeof window === "undefined") {
        console.log("\nHome -> Server-Side:")
        console.log(props)
    } else {
        console.log("\nHome -> Client-Side:")
        console.log(props)
    }


    // Transcribed from react project
    return (
        // App
        // reactProject/src/App.tsx
        <div className='App'>

            <SEOLoader jsonLd={props.jsonLdData} metaTags={props.metaTagData} canonical={true} />

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
                        {content.entities.map((entity: any, index: number) => {
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