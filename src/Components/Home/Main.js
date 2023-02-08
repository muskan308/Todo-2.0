import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Main() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/login')
    })
  return (
    <div style={{height : "100vh"}}>
        
    </div>
  )
}
