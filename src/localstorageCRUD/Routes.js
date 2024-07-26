import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LocalstorageCRUD from "./Home";


const Home=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LocalstorageCRUD/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Home;