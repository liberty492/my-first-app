import React, { useState } from "react";
import { Button,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';


const Todolist = () => {

    const [todo, setTodo] = useState("");
    const [listtodo, setListtodo] = useState([]);

    const handletodo = (e) => {
        setTodo(e.target.value);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const newtodo = [...listtodo, todo];
        setListtodo(newtodo);
        setTodo("");

    }


    return (
        <div clasName="card">
            <h3>Todolist Applciation</h3>
            <input type="text" name="todo" value={todo} onChange={handletodo} />&nbsp;
            <Button onClick={handlesubmit}>ADD</Button>
            <br />
            <hr />
            {
                listtodo.map((item) => {
                    return <div>{item}</div>
                })
            }
            <hr />
            <div className="row">
                <center>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 className="card-title text-center bg-primary text-white" >
                                    Registration Form
                                </h5>
                                <div><input /></div>
                                <div><input /></div>
                                <div><input /></div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>

        </div>
    )
}
export default Todolist;