import { useState } from "react";

// import { useTitle } from "eternite/hooks"

import Landing from "components/pages/HomePage/Landing";
import Scene1  from "components/pages/HomePage/Scene1";
import Scene2  from "components/pages/HomePage/Scene2";

import { hooks } from "eternite"
const { useMobile, useTitle } = hooks

export const HomePage = () => {

    useTitle('Home | Cord Cut Help');

    const [scenes, setScenes] = useState([
        <Landing/>,
        <Scene1/>,
        <Scene2/>
    ])

    return (
        <div className="w-100 min-vh-100 bg-secondary text-white">
            {scenes.map((scene, index) => {
                return (
                    <div key={index}>
                        {scene}
                    </div>
                )
            })}
        </div>
    );
}


export default HomePage;


