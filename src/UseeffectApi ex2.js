import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const ApiData = 'https://jsonplaceholder.typicode.com/users';

export const Useeffctapi = () => {

    const [usersdata, setUsersdata] = useState([]);
    const [loader, setLoader] = useState(false);
    const [iserror, setIseror] = useState({ status: false, msg: '' });

    const fetchusersdata = async (apiurl) => {
        setLoader(true);
        setIseror({ status: false, msg: '' });
        try {
            const response = await fetch(apiurl);
            console.log('json data is', response);
            const data = await response.json()
            setUsersdata(data);
            setLoader(false);
            setIseror({ status: false, msg: '' });
            if (response.status === 404) {
                throw new Error('Data not available');
            }
        } catch (error) {
            console.log(error.message);
            setIseror({ status: true, msg: error.message || 'something went wrong,no data' });
            setLoader(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchusersdata(ApiData);
    }, [])

    if (loader) {
        return <center>
            <h3>Loading...  <RingLoader color="#42f56f" />
            </h3>
        </center>
    }

    if (iserror?.status) {
        return (
            <div>
                <h3 style={{ color: 'red' }}>{iserror?.msg}</h3>
            </div>
        )

    }

    return (
        <div className="uniq">
            <center>
                <ul>
                    {
                        usersdata.map((eachobj) => {
                            const { id, name, email, username } = eachobj
                            return (
                                <li>
                                    <div>{name}</div>
                                    <div>{email}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </center>
        </div>
    )
}
