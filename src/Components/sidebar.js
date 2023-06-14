import React, { useState } from 'react'
import {LuLayoutDashboard} from "react-icons/lu"
import { BsFillTicketFill } from 'react-icons/bs'
import {FaTicketAlt} from "react-icons/fa"
import {IoIosArrowDroprightCircle} from "react-icons/io"
const Sidebar = ({setCurrent}) => {
  let [a, setA] = useState([1,0,0])
  const handle = (e)=>{
    console.log(e)
    let c = [1,0,0]
    setA(a=>{
        let x = a.map((val,index)=>{
            if(index===Number(e.substr(1))-1){
                return 1;
            }
            return 0;
        })
        setCurrent(x)
        return x;
    })
  }
  console.log(a)
  return (
    <div className='sidebar'>
        <div className='single' onClick={()=>handle('11')}>
            {a[0]!==0 && <div className='mid'>
            <IoIosArrowDroprightCircle/>
            </div>}
            <div className='mid'>
            <LuLayoutDashboard/></div>
            <div className='mid'><span>Dashboard</span></div>
        </div>
        <div className='single' onClick={()=>handle('12')}>
        {a[1]!==0 && <div className='mid'>
            <IoIosArrowDroprightCircle/>
            </div>
          }
            <div className='mid'><BsFillTicketFill/></div>
            <div className='mid'><span>New Ticket</span></div>
        </div>
        <div className='single' onClick={()=>handle('13')} >
        {a[2]!==0 && <div className='mid'>
            <IoIosArrowDroprightCircle/>
            </div>
        }
            <div className='mid'><FaTicketAlt/></div>
            <div className='mid'><span>My Ticket</span></div>
        </div>
    </div>
  )
}

export default Sidebar
