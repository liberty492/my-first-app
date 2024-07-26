import React from 'react'
import { useContext } from 'react'
import { store } from './App'
const Contextapi = () => {
    const [count, setcount] = useContext(store);
    return (
        <><div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>increment</button>&nbsp; <button onClick={() => setcount(count - 1)}>decrement</button>
        </div>
        </>
    )
}

export default Contextapi