import React, { useState } from "react";

const Index = () => {

    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlechange = (e) => {
         console.log(e.target.value);
         setFirstname(e.target.value);
    }
     const handlemail = (e) => {
        setEmail(e.target.value);
     }
     const handlepassword = (e)=>{
        setPassword(e.target.value);
     }

    return (
        <div className="form">
            <form>
                <div className="form-content">
                    <input type="text" name="firstname" id="firstname" placeholder="firstname" value={firstname} onChange={handlechange}/>
                </div>
                <div className="form-content">
                    <input type="email" name="email" id="email" placeholder="emial" value={email} onChange={handlemail}/>
                </div>
                <div className="form-content">
                    <input type="password" name="password" id="password" placeholder="password" value={password} onChange={handlepassword}/>
                </div>
                <div className="form-content">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
};
export default Index;