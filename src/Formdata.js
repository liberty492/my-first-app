import React, { useState } from 'react'

const Sync = () => {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [data, setdata] = useState([]);


    const handletext = () => {
        const empdata = { name, email }
             setdata(empdata);
    }
    return (
        <div>
            <input value={name} onChange={(e) => setname(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handletext}>submit</button>
            <h6>{data.name}</h6>
            <h6>{data.email}</h6>
        </div>
    )
}

export default Sync