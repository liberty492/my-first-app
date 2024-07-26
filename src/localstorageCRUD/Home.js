import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Employees from "./Emplyees";
import { Link } from "react-router-dom";


const LocalstorageCRUD = () => {

    const [employees, setEmployees] = useState(Employees);

    return (
        <div style={{ margin: "10rem" }}>
            <Link to={"/create"}><button className="btn btn-success">Add Customer</button></Link>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            phone
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees && employees.length > 0
                            ? employees.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button className="btn btn-primary">Edit</button> &nbsp;&nbsp;
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            : "no data exists "
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default LocalstorageCRUD;