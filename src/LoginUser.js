import React, { useState } from 'react'

function LoginUser() {
    const [name, changeName] = useState('');
    const [password, changePassword] = useState('');
    const [message, chaneMessage] = useState('');
    const [flip,changeFlip] = useState(true);
  
    const handlechange = (e) => {
      let data = e.target.value;
      changeName(data);
    };
  
    const handlepassword = (e) => {
      changePassword(e.target.value);
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      const userdata = { name, password };
      if (name === password) {
        chaneMessage('Login is successfull..');
      } else {
        chaneMessage('please enter the valid details');
      }
    };
    return (
      <div>
        <center>
          <div>
            <input type="text" value={name} onChange={handlechange} /><br />
            <input type="password" value={password} onChange={handlepassword} />
            <br />
            <button onClick={handleClick}>Login</button>
            <hr />
            <h5>{message}</h5>
          </div>
        </center>
      </div>
    );
  }
  
export default LoginUser