import React, {useState} from 'react'
import TopBar from './TopBar'
import Sidebar from './sidebar'
import Dashboard from './dashboard'
import NewTicket from './newTicket'
import MyTicket from './myTicket'
const Home = () => {
  let [current, setCurrent] = useState([1,0,0])
  console.log(current)
  return (
    <div className='home'>
        <TopBar/>
        <div className='show'>
            <Sidebar setCurrent = {setCurrent}/>
            {current[0]===1 && <Dashboard/>}
            {current[1]===1 && <NewTicket/>}
            {current[2]===1 && <MyTicket/>}
        </div>
    </div>
  )
}

export default Home
