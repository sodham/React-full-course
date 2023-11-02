import React, { useState } from 'react';

const Index = () => {
    const [Count, setCount] = useState(0);
    // const incrementCount = () => {
    //     setCount(Count +1);
    // };

    const incrementCount = () => {
        setCount((prevCount) => {
            return prevCount +1;

        });

        setCount((prevCount) => prevCount + 1);
    }
    const decrementCount = () =>{
        setCount(Count - 1);
    };


    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{Count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Index;