import React from 'react'
import "./newTicket.css"
const NewTicket = () => {
  return (
    <div className='new-ticket'>
        <h2>Create New Ticket</h2>
        <div className='ticket-form'>
            <div className='upper'>
              <div className='upper-left'>
                <div className='upper-left-top'>
                    <div className='mid'><label>Ticket No. :</label></div>
                    <input type='text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}></input>
                </div>
                <div className='upper-left-top'>
                    <div classname='mid'><label>Name : </label></div>
                    <input type='text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}></input>
                </div>
              </div>
              <div className='upper-left'>
                <div className='upper-left-top'>
                <div classname='mid'><label>Date :</label></div>
                    <input type='text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}></input>
                </div>
                <div className='upper-left-top'>
                <div classname='mid'><label>Department : </label></div>
                    <input type='text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}></input>
                </div>
              </div>
              </div>
              <div className='middle'>
                <div><label>Subject : </label></div>
                <input type='text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}></input>
              </div>
              <div className='down'>
              <div className='lower-left'>
                <div className='lower-left-one'>
                  <label>Category : </label>
                  <input type =  'text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}/>                
                </div>
                <div className='lower-left-one'>
                  <label>Type : </label>
                  <input type =  'text' style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}/>                
                </div>
                <div className='lower-left-one'>
                  <label>Priority : </label>
                  <input type =  'text'  style={{background : "#dadada", border : "#dadada", borderRadius : "0.2rem"}}/>                
                </div>
              </div>
              <div className='des'>
                  <label>Description : </label>
                  <textarea style={{resize : "none"}}/>
                  {/* <input type='text'/> */}
              </div>
              </div>
              <div className='btns mid'>
                <button onClick={()=>{
                  alert('Currently Unavailable')
                }}>Submit</button>
              </div>
            </div>
        </div>
  )
}

export default NewTicket
