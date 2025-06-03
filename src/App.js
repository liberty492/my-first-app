import './App.css';
import Crudform from './Crudform';
import Todolist from './Crudtelugu';
import Index from './Formvalidation';
import Hideshow from './Hideshow';
import Form from './Redux/Forms';
import Account from './Redux/Accounts';
import Regularexpression from './Regularexpressions';
import SearchData from './SearchData';
import Stries from './Stries';
import Toggle from './Useeffect ex1';
import { Jsonplaceholderapi, jsonplaceholderapi } from './UseeffectApi ex2';
import UseReducer from './UseReducer';
import UseReducerAPI from './UseReducerAPI';
import FilterGreterthan40 from './interviewscoding/filtergreterthan40';
import Checkboxselection from './interviewscoding/checkboxselection';
import Newcomponent from './Newcomponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './NIHIRATECHIES/CRUD/EmpListing';
import EmpCreate from './NIHIRATECHIES/CRUD/EmpCreate';
import Childtoparent from './childtoparent';
import EmpDetails from './NIHIRATECHIES/CRUD/EmpDetails';
import FormData from './Formdata';
import Stopwatch from './Stopwatch';
import { useState, createContext } from 'react';
// import { create } from 'json-server';
import Contextapi from './Contextapi';
import Crudoperations from './Crudoperations';
//import Trycrud from './Trycrud';
import LoginUser from './LoginUser';
import CocktailApi from './CocktailApiuseeffect ex3';

export const store = createContext();

function App() {
  const [count, setcount] = useState(0);
  return (
    <div>
      {/* <store.Provider value={[count, setcount]}>
        <Contextapi />
      </store.Provider> 
      <LoginUser/>*/}
      {/* <CocktailApi/> */}
      {/* Contextapi */}
      {/* <Trycrud/> */}
      {/* <LoginUser/> */}
      {/* <SearchData/> */}
      {/* <Crudoperations/> */}
      {/* <Regularexpression /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListing/>}/>
        <Route path='employee/create' element={<EmpCreate/>}/>
        <Route path='employee/details/:empid' element={<EmpDetails/>}/>
      </Routes>
    </BrowserRouter> */ }
      {/* <Practice />
     // <Hideshow />
      //<Index />
      //<Newcomponent />
    // <Crudform />
    // <Toggle />
    //<Jsonplaceholderapi />
    //<Todolist />
    //<Home />
    // <Stries />
    //<SearchData />
    <Regularexpression />
    //  <>
    //    <Form />
    //    <Account />
    //  </>
    //<UseReducer />
    // <UseReducerAPI />
      <First />
    // <Secondprops />
    //<FilterGreterthan40 />
    //<Checkboxselection />
     //<Childtoparent /> */}
      {/* <FormData/> */}
      <Stopwatch/>

    </div>
  );
}
export default App;
