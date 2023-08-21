
import { useContext, useEffect } from 'react';
import { useMobile, useTitle } from 'eternite/hooks';

import NavScroll from '@/components/layout/NavScroll';
import Footer from '@/components/layout/Footer';
import { Landing, Scene1, Scene2 } from "@/components/scenes/home";

import SEO from '@/utils/SEO';
import { baseServerSideProps } from '@/utils/serverside/props';



// Fetch API data, add SEO tags, and pass data to the page component.
// export const getServerSideProps = (ctx?: any) => baseServerSideProps('home', ctx);
export const getServerSideProps = async (ctx?: any) => {

    // let globalJsonLd = await firebase.request_page_file('get', 'jsonLd.json', 'global')
    let props = (await baseServerSideProps('home', ctx)).props

    return {
        props: {
            ...props,
        }
    }
}



export const Home = (props: any) => {


    // List of components to map to the content entities of the content json file.
    const scenes: any[] = [ Landing, Scene1, Scene2 ]

    // const backupTitle = 'Cord Cut Help | Home Page | Help Save Money on TV and Internet Bills'
    // useTitle(props?.content?.title || backupTitle)

    const { mobile } = useMobile()


    // Transcribed from react project
    return (
        // App
        // reactProject/src/App.tsx
        <div className='App'>

            {/* SEO - Inlcude a way to retrieve global props in the SEO.Loader flow to reduce the number of SEO.Loader calls */}
            <SEO.Loader jsonLd={props.seo.global.jsonLd} metaTags={props.seo.global.metaTags} />
            <SEO.Loader {...props} />

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
                        {props.content?.entities && props.content.entities.map((entity: any, index: number) => {
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





