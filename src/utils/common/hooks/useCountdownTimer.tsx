import React, { useState, useEffect } from 'react';

const useCountdownTimer = (defaultWaitSeconds=5) => {

    const [remainingTime, setRemainingTime] = useState(defaultWaitSeconds * 1000); // 10000 milliseconds = 10 seconds


    // Update the remaining time every second until the remaining time is 0.
    const startTimer = (seconds: number, doAfter=()=>{}) => {
        
        setRemainingTime(seconds * 1000) // set the remaining time to n seconds

        // The setInterval() function is used to run a function repeatedly after a certain interval of time.
        const intervalId = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                const updatedTime = prevRemainingTime - 1000;
                if (updatedTime <= 0) {
                    clearInterval(intervalId); // Stop the interval when remainingTime reaches 0
                    doAfter && doAfter() // Run the callback function if it exists
                    return 0; // Set the remainingTime to 0 when it reaches 0
                }
                return updatedTime;
            });
        }, 1000);
    }



    // Function to convert milliseconds to seconds
    const formatTime = (ms: any) => {
        return (ms / 1000).toFixed(0);
    };

    return {
        startTimer,
        remainingTime,
        formatTime
    }

};

export default useCountdownTimer;