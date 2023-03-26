import React from 'react';
/**
 * @Author Daniel Fimister
 * This script provides the current date and time as of when it is initialised
 * it is intended for this to be used to measure when a user session starts
 */
class Timer extends React.Component {
    
    render() {
        const initDate = new Date();
        let dateNow = initDate.toLocaleString();
        return(
            <div>{dateNow}</div>
        )
    }
}
export default Timer;