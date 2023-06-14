import React, { useRef, useState } from 'react'
import "./myTicket.css"
import fakeData from "./fakeTicketsData"
const MyTicket = () => {
  let show = fakeData.map((obj)=>{
    return(
      <div className='row-gap'>
        <td className='mid'>{obj.ticket}</td>
        <td className='mid'>{obj.subject}</td>
        <td className='mid'><button style={{'background' : `${obj.status==='Closed' ? '#494949' : `${obj.status==='In progress' ? '#5cdb95' : '#05386b'}`}`,
        'border' : `${obj.status==='Closed' ? '#494949' : `${obj.status==='In progress' ? '#5cdb95' : '#05386b'}`}`}}>{obj.status}</button></td>
        <td className='mid'>{obj.date}</td>
        <td className='mid'>{obj.supportedBy}</td>
      </div>
    )
  })
  let [a,setA] = useState(show)
  let [selectedValue, setSelectedValue] = useState('5')
  let handle = (e)=>{
    setSelectedValue(e.target.value)
    setA(show.slice(0,e.target.value))
  }
  return (
    <div className='my-ticket'>
        <h2>List of Ticket</h2>
        <div classname = 'search'>
          <input type='search' placeholder='Find Ticket'/>
        </div>
        <div className='below-search'>  
          <label>Show : </label>
          <select onChange={handle}>
              <option name='zero'>5</option>
              <option name='one'>1</option>
              <option name='two'>3</option>
          </select>
          <label>Enteries</label>
        </div>
          <div className='row-one'>
            <th className='mid'>Ticket No.</th>
            <th className='mid'>Subject</th>
            <th className='mid'>Status</th>
            <th className='mid'>Date</th>
            <th className='mid'>Supported By</th>
          </div>
          {a}
        <p>Showing {selectedValue} of 5 enteries</p>
    </div>
  )
}

export default MyTicket
