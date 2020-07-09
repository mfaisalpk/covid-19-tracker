import React from 'react';
import CountUp from 'react-countup';

function OwnCountUp(prop){
    return <>
            <CountUp 
                start={0}
                duration={2.5} 
                separator="," 
                end={prop.end}
            />
        </>    
}

export default OwnCountUp;