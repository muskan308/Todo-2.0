import React, { useState } from 'react'
import MainBar from './MainBar'
import SideBar from './SideBar'

export default function Todo() {
    const [active, setActive] = useState("INBOX");
  return (
    <div style={{height : "92vh", padding :"10%",background : "linear-gradient(to right, #F6D285, #BBF0F3"}}>
        <div className='row' >
            <div className='col-md-4' >
                <SideBar change = {setActive}/>
            </div>
            <div className='col-md-8'>
                <MainBar active =  {active}/>
            </div>
        </div>
    </div>
  )
}
