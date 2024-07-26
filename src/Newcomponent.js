import React, { useState } from 'react'

const Newcomponent = () => {
    const [val, setVal] = useState(false);

    const handlehover=()=>{
        setVal(!val);
    }
    return (
    <div>
        <button onMouseEnter={handlehover}>{val ? 'logout':'login'}</button>
        {val ? (<h1>welcome login</h1>):(<p>please login</p>)}
    </div>

    )
  
}

export default Newcomponent