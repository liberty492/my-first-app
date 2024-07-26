import React, { useState } from 'react'

const arr = ["cricket", "volly-ball", "football"]

export default function Checkboxselection() {
    const [arrcopy, setArrycopy] = useState(arr);
    const [chkValue, setChkValue] = useState(true);

    const handledelete = (itemindex) => {
        const clearinit = arrcopy.filter((item, eachobj) => {
            return eachobj !== itemindex
        })
        setArrycopy(clearinit);
    }

    return (
        <div>
            <ul>
                {
                    arrcopy.map((item, i) => {
                        return (
                            <div>
                                <li>
                                    <input
                                        type="checkbox"
                                        onClick={() => setChkValue(!chkValue)}
                                    />
                                    {item}
                                    <button type="button" disabled={chkValue} onClick={() => handledelete(i)}>
                                        delete
                                    </button>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
