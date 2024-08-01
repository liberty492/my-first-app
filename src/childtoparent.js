import React, { useState } from 'react'

const Childtoparent = () => {
    const [count, setCount] = useState(0);
    const setcountchange = (value) => {
        setCount(count + value)
    }
    return (
        <>
            <div>{count}</div>
            <Child setcountchange={setcountchange} />
        </>
    )
}

export default Childtoparent;

function Child(props) {
    let data=2;

    return (
        <button onClick={() => props.setcountchange(data)}>increment(+)</button>
    )
}