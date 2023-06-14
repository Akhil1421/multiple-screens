import React, { useRef , useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
const Register = ()=>{
    let name = useRef()
    let pass = useRef()
    let mail = useRef()
    let timerId = useRef(null);
    let [showWarning, setShowWarning] = useState(false)
    let navigate = useNavigate()
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
                    <div className="header three">
                        <i><h3>Helpdesk System</h3></i>
                        <span>Sign up here</span>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Username" ref={name}/>
                        <input type="password" placeholder="Password" ref={pass}/>
                        <input type="email" placeholder="Email" ref={mail}/>
                    </div>
                    <div className="sbtR">
                        <button onClick={handle}>Sign Up</button>
                    </div>
                    <div className="others2">
                        <span className="two">Already have account ? &nbsp;<Link to="/login" style={{color : "blue"}}>Sign In </Link>&nbsp; here</span>
                    </div>
                    {showWarning && <div className='warn'>
                Password , username & email have to be non-empty ⚠️!</div>}
                </div>
            </div>
        </div>
    )
}

export default Register