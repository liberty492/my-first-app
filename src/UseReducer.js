/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer = () => {

    }

    const intitialstate =
    {
        data: [
            {
                firstname: "ramjadapolu", emai: "ramjadapolu@gmail.com", phone: 9848483873
            },
            {
                firstname: "ramjadapolu", emai: "ramjadapolu@gmail.com", phone: 9848483873
            }

        ],
        length: 2,
    };
    const [state, dispatch] = useReducer(reducer, intitialstate);

    return (
        <div>
            {
                state.data.map((eachObj) => {
                    const { firstname, emai, phone, length } = eachObj;
                    return (
                        <div>{length}-{firstname}</div>
                    )
                })
            }
        </div>
    )
}

export default UseReducer