import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isrunning, setIsrunning] = useState(false);
    const id = useRef(null);

    useEffect(() => {
        if (isrunning) {
            id.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(id.current);
        }
        return () => {
            clearInterval(id.current);
        }
    }, [isrunning])


    const handlestart = () => {
        if (!isrunning) {
            setIsrunning(true);
        }
    }
    const handlepause = () => {
        if (isrunning) {
            setIsrunning(false);
        }
    }
    const handlereset = () => {
        setTime(0)
    }
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={handlestart}>start</button>
            <button onClick={handlepause}>pause</button>
            <button onClick={handlereset}>reset</button>
        </div>
    );
}

export default Stopwatch;