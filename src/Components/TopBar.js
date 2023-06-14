import React from 'react'
import {BsFillBellFill} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import {MdLogout} from "react-icons/md"
import {useNavigate} from "react-router-dom"
import "./topBar.css"
const TopBar = () => {
  let navigate = useNavigate()
  let handleClick = ()=>{
    navigate('/login')
  }
  let handle = ()=>{
    alert('Currently Unavailable')
  }
  return (
    <div className='bar'>
        <div className='text'>
            <i><h3>Helpdesk</h3></i>
        </div>
        <div className='options'>
            <div className='mid'  style={{cursor : 'pointer'}} onClick={handle}><BsFillBellFill style = {{color : 'black'}}/></div>
            <div className='mid' style={{cursor : 'pointer'}} onClick={handle}><FaUserAlt style = {{color : 'black'}}/></div>
            <div className='mid' style={{cursor : 'pointer'}} onClick={handleClick}><MdLogout style = {{color : 'black'}}/></div>
        </div>
    </div>
  )
}

export default TopBar
