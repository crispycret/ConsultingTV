

import React from 'react';

// import 'assets/images/consulting-tv-logo.png' 
import { Button } from 'react-bootstrap';

// import BACKGROUND_IMAGE from 'assets/images/home-background.jpg' 

export const HomePage = () => {
    
    return (
        <div 
            className="home-page text-light text-center"
            // style={{backgroundImage: `url(${BACKGROUND_IMAGE})`}}
        >
            <div className='p-5'></div>
                <div className='text-center'>
                    <h1>Consulting.TV</h1>
                    <p>Consulting.TV is a platform for consultants to share their knowledge and expertise with the world.</p>
                </div>
            
            <div className='p-5'></div>
            <div className='p-5'></div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Button variant="primary" href="/quote" size="lg">Getting Started</Button>
                    </div>
                </div>
            </div>

            <div className='p-5'></div>
            <div className='p-5'></div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <h2>Consulting.TV</h2>
                    <p>Consulting.TV is a platform for consultants to share their knowledge and expertise with the world.</p>
                    </div>
                    <div className="col-sm">
                    <h2>Consulting.TV</h2>
                    <p>Consulting.TV is a platform for consultants to share their knowledge and expertise with the world.</p>
                    </div>
                    <div className="col-sm">
                    <h2>Consulting.TV</h2>

                    <p>Consulting.TV is a platform for consultants to share their knowledge and expertise with the world.</p>
                    </div>
                </div>
            </div>

            <div className='p-5'></div>


        </div>
    );
};