import React, { useState } from 'react'
import './App.css';

function Hideshow() {
    const [showData, setShowData] = useState(false);

    const hadleclick = () => {
        setShowData(!showData);
    }
    return (
        <div className="App">
            <button onClick={hadleclick}>{showData ? 'hide' : 'show'}</button>
            {/* {showData && <div>lorem reger jukel </div>} */}
            {
                showData ? (<div>lorem reger jukel </div>) :
                    (<h3>data is not available</h3>)
            }
        </div>
    );
}

export default Hideshow;
