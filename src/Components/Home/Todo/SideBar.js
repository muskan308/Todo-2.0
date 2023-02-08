import React from 'react'

export default function SideBar(props) {
  return (
    <>
    <div>
        <div style={{fontWeight:"bold", cursor:"pointer", backgroundColor : "#03C8A8", width: "40%", padding: "2% 5%", margin : "2%", display: "flex", justifyContent: "center", alignItems:"center"}} onClick={()=>{props.change("INBOX")}}>Inbox</div>
        <div style={{fontWeight:"bold",cursor:"pointer", backgroundColor : "#03C8A8", width: "40%", padding: "2% 5%", margin : "2%",display: "flex", justifyContent: "center", alignItems:"center"}} onClick={()=>{props.change("TODAY")}}>Today</div>
        <div style={{fontWeight:"bold",cursor:"pointer", backgroundColor : "#03C8A8", width: "40%", padding: "2% 5%", margin : "2%",display: "flex", justifyContent: "center", alignItems:"center"}} onClick={()=>{props.change("NEXT")}}>Next 7 Days</div>
    </div>
    </>
  )
}
