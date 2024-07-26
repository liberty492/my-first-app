import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const fetchdata = async () => {
        const response = await fetch('http://localhost:3000/employee');
        const result = await response.json();
        setData(result);
    }

    const handleDetails = (id) => {
        navigate("employee/details/" + id);

    }
    // useEffect(() => {
    //     fetch("http://localhost:8000/employee").then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         console.log('comes data there'+resp);
    //         setData(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }, [])

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div className='container'>
            <div className='card'>
                <h5 className="card-title text-center bg-primary text-white" >Employee Listing</h5>
                <Link to='employee/create'><button className='btn btn-success'>ADD(+)</button></Link>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>address</th>
                                <th>phone</th>
                                <td>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <button className='btn btn-warning'>edit</button>
                                                <button className='btn btn-primary' onClick={() => handleDetails(item.id)}>Details</button>
                                                <button className='btn btn-danger'>delete</button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}

export default EmpListing;