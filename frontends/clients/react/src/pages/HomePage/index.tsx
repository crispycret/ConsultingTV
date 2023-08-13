import { useState } from "react";


import useTitle from "utils/common/hooks/useTitle";

import Landing from "./Landing";
import Scene1  from "./Scene1";
import Scene2  from "./Scene2";




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


