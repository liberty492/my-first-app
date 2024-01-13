import React, { useEffect, useState } from "react";

const Toggle = () => {

    const [count, setCount] = useState(0);
    const [toggle , setToggle] = useState(true);

    useEffect(() => {
        console.log("this is from useeffect..", count)
    }, [count,toggle])

    return (
        <div>
            <h2 onClick={()=>setToggle(!toggle)}>{toggle ? 'open' : 'close'}</h2>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h3>example-1 of useeffect</h3>
        </div>
    )
}

export default Toggle;