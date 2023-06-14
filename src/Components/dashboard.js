import React from 'react'

const Dashboard = () => {
    let show = [{name :'Total Tickets', number : '12',color : "#2f82ff"},{name :'Total Solved', number : '8', color :"#0bff68"},
    {name :'Total Awaiting Approval', number : '2', color :"#fe594e"},{name :'Total in progress', number : '2', color :"#fcff6c"}]
    show = show.map((obj,ind)=>{
        return(
            <div className='cont' key={ind} style={{background : `${obj.color}`, color : "blue"}}>
                <h3 style={{color: "black"}}>{obj.name}</h3>
             <div className='number mid'><h1>{obj.number}</h1></div>
            </div>
        )
    })
  return (
    <div className='dashboard'>
      <div className='head'><h3>Dashboard</h3></div>
      <div className='info'>
            {show}
      </div>
    </div>
  )
}

export default Dashboard
