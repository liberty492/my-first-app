import { useState } from 'react'
import { CardTitle } from 'react-bootstrap';

function Regularexpression() {

    const [username, setUsername] = useState("");
    const [error, setError] = useState("");


    const handlechange = (e) => {
        let data = e.target.value;
        setUsername(data);
    }

    const validationError = () => {
        if (username === "" || username === null) {
            setError("username should not be empty");
        }
        else if (username.length < 4) {
            setError(`username must be atleast 4 characters`);
        }
        else {
            setError(<p style={{ color: "green", fontWeight: "bold" }}>good name..</p>);
        }
    }

    return (
        <div class="container">
            <div class="row align-items-center vh-100">
                <div class="col-4 ">
                    <div class="card shadow border">
                        <div class="card-body d-flex flex-column align-items-center">
                            <CardTitle>username validation</CardTitle>
                        </div>
                        <div>
                            <input type='text' id='username' name='username' value={username} onChange={handlechange} />&nbsp;&nbsp;
                            <span style={{ color: "red" }}>{error}</span><br /><br />
                            <button onClick={validationError}>vallidation</button>
                        </div>
                    </div>
                </div>
                <div class="col-4 ">
                    <div class="card shadow border">
                        <div class="card-body d-flex flex-column align-items-center">
                            <CardTitle>username validation</CardTitle>
                        </div>
                        <div>
                            <input type='text' id='username' name='username' value={username} onChange={handlechange} />&nbsp;&nbsp;
                            <span style={{ color: "red" }}>{error}</span><br /><br />
                            <button onClick={validationError}>vallidation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Regularexpression;