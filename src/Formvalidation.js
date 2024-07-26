import React, { useState } from "react";

const Index = () => {

    const [username, setUserame] = useState('');
    const [mail, setMail] = useState('');
    const [errors, setErrors] = useState({
        nameuser: '',
        mailid: ''
    })

    const changeusername = (e) => {
        setUserame(e.target.value);
    }
    const changemail = (e) => {
        setMail(e.target.value);
    }

    const validating = (e) => {
        e.preventDefault();
        if (username.trim() === "") {
            setErrors({ ...errors, nameuser: "enter username" })
        } else {
            setErrors({ ...errors, nameuser: "" });
        }
    }


    return (
        <div>
            <center>
                <form onSubmit={validating}>
                    <div>
                        <input
                            type='text'
                            value={username}
                            onChange={changeusername}
                        />
                    </div>
                    <p style={{ color: 'red' }}>{errors.nameuser}</p>
                    <div>
                        <input
                            type="password"
                            value={mail}
                            onChange={changemail}
                        />
                    </div>
                    <p>{errors.mail}</p>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </center>
        </div>
    )
}
export default Index;