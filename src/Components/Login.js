import React, { useEffect, useState,useRef } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"

const Login = ()=>{
    let name = useRef('');
    let pass = useRef('');
    let timerId = useRef(null);
    let [showWarning, setShowWarning] = useState(false)
    useEffect(() => {
        if (showWarning) {
  
            //Creating a timeout
            timerId.current = setTimeout(() => {
                setShowWarning(false);
            }, 5000);
        }
  
        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };
    }, [showWarning]);
    let navigate = useNavigate()
    let handle = ()=>{
        if(name.current.value && pass.current.value){
            navigate('/')
        }
        else{
            setShowWarning(true)
        }
    }
    return(
        <div className="login-outer">
            <div className="login-in">
                <div className="login-inner">
                    <div className="header">
                        <i><h2>Helpdesk System</h2></i>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Username" ref={name}/>
                        <input type="password" placeholder="Password" ref={pass}/>
                    </div>
                    <div className="sbtL">
                        <button onClick={handle}>Sign In</button>
                    </div>
                    <div className="others">
                        <span className="one"><Link to = "/forgot">Forgot password</Link></span>
                        <span className="two"><Link to = "/signup">Sign Up</Link></span>
                    </div>
                    {showWarning && <div className='warn'>
                Password & username have to be non-empty ⚠️!</div>}
                </div>
            </div>
        </div>
    )
}

export default Login