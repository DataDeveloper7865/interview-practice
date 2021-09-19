import React, { useState, useEffect } from 'react';
import './useEffectEx.css'

function UseEffectEx() {
    const [num, setNum] = useState(0);

    useEffect(function setTitleOnRerender() {
        document.title = `WOW${"!".repeat(num)}`;
    }, [num]);

    function increment(evt) {
        setNum(num => num + 1)
    }

    function reset(evt) {
        setNum(0);
    }

    return (
        <div>
            <button onClick={increment}> Get More Excitement! </button>
            <button onClick={reset}> Go Back To Regular Excitement </button>
        </div>
    )
}

export default UseEffectEx;