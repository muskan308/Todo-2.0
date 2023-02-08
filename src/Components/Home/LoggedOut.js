import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoggedOut() {
  return (
    <div style={{background : "linear-gradient(to right, #F6D285, #BBF0F3", width : "100%", height: "100vh", display :"flex", flexDirection: "column", justifyContent : "center", alignItems:"center"}}>
        <h1>Please Login</h1>
        <NavLink to="/login"><button style={{height : "40px", border: "0", borderRadius : "10px", cursor : "pointer"}}>Login Page</button></NavLink>
    </div>
  )
}
