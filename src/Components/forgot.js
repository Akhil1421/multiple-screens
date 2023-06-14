import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {
    let mail = useRef('')
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
        if(mail.current.value){
            navigate('/')
        }
        else{
            setShowWarning(true)
        }
    }
    return (
    <div className="login-outer">
            <div className="login-in">
                <div className="login-inner">
                    <div className="header">
                        Don't worry, Enter your email below  and we will <br/>
                        send you a link to change password .
                    </div>
                    <div className="form two">
                        <input type="email" placeholder='Email' ref={mail}></input>
                    </div>
                    <div className="twoBtns">
                        <button style={{background : "#03cc17", border : "#03cc17"}} onClick={handle}>Submit</button>
                        <button style={{background : "#296ef2", border : "#296ef2"}} onClick={()=>{
                                navigate("/login")
                        }}>Sign In</button>
                    </div>
                    {showWarning && <div className='warn'>
                E-mail has to be non-empty ⚠️!</div>}
                </div>
            </div>
        </div>
  )
}

export default Forgot
