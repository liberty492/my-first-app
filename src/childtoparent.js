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

    return (
        <button onClick={() => props.setcountchange(2)}>increment(+)</button>
    )
}