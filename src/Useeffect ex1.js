import React, { useEffect, useState } from "react";

const Toggle = (props) => {
    console.log(props);
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        console.log("this is from useeffect..", count)
    }, [count, toggle])

    return (
        <div>
            <p>{props.greet}</p>
            <h2 onClick={() => setToggle(!toggle)}>{toggle ? 'open' : 'close'}</h2>
            <h1>{count}</h1>
            <p>{props.greet}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Toggle;