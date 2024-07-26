import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmpCreate = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const navigate=useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, name, email, address, phone }
        fetch('http://localhost:3000/employee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }
    return (
        <div className='container '>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className='card '>
                        <div className='card-body'>
                            <h5 className="card-title text-center bg-warning text-blue" >
                                Registration Form
                            </h5>
                            <div className='row mt-6'>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter id"
                                        value={id}
                                        onChange={(e) =>
                                            setId(e.target.value)
                                        }

                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Enter address"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="phone"
                                        class="form-control"
                                        placeholder="Enter phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </div>
                                <div class="form-group">
                                    <button className='btn btn-primary' onClick={handlesubmit}>save</button>
                                    <button className='btn btn-danger'>back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default EmpCreate