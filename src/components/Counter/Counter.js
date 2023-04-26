import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [lastClick, setLastClick] = useState()
    return (
        <>
            <button onClick={() => {
                setCount(count + 1);
                setLastClick(new Date());
            }}>Click me</button>
            I was clicked {count} times.
            {lastClick && <>The last click was at {lastClick.toLocaleDateString()}</>}
        </>
    );
};

export default Counter;