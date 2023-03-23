import React from 'react';
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