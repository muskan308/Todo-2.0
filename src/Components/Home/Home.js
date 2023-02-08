import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import LoggedOut from './LoggedOut';
import Todo from './Todo/Todo'

export default function Home() {
  const [userName, setUserName] = useState("");
  onAuthStateChanged(auth, (user) => {
    setUserName(user.displayName);
  })

  const navigate = useNavigate();


  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>

      {userName ? (<div>

        <div style={{margin : "0 2%", display : "flex", justifyContent : "space-between", alignItems:"center"}}>
          <h1 style={{fontFamily:"sans-serif"}}>Welcome {userName}</h1>
          <button className = "btn btn-warning" style = {{height:"30%"}} onClick={handleSignOut}>Sign Out</button>
        </div>
        <Todo />

      </div>) : (
        <LoggedOut />
      )

      }


    </div>
  )
}
