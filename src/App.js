import "./App.css"
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Components/Login"
import SignUp from "./Components/Register"
import Home from "./Components/Home"
import Forgot from "./Components/forgot"
const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/forgot" element = {<Forgot/>}/>
        <Route path="/signUp" element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App