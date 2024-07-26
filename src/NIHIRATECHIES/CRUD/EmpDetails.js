import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpDetails = () => {
    const { empid } = useParams();
    const [empdata, setEmpdata] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpdata(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h6>Employee Details</h6>
                </div>
                <div className='card-body'>
                    {empdata &&
                        <div> <h5>{empdata.name}</h5>
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default EmpDetails