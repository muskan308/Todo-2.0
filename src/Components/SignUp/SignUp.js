import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp() {
    const [errorMsg, setErrorMsg] = useState("");
    const [values, setValues] = useState({
      name : "",
      email: "",
      password : ""
    });

    const navigate = useNavigate();
    const handleSubmission = () =>{
      if(!values.name || !values.email || !values.password){
        setErrorMsg("Fill all fields");
        return false;
      }
      setErrorMsg("");
      createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res)=>{
        const user = res.user;
        updateProfile(user, {
          displayName : values.name
        })
        navigate('/login');
      }).catch((error)=>{
        setErrorMsg(error.message);
      })
    }
    // console.log(values);
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>SignUp</h1>
            <InputForm onChange = {(e)=>setValues((prev)=>({...prev,name : e.target.value}))} type="text" label = "Name : " placeholder = "Enter Your Name "/>
            <InputForm onChange = {(e)=>setValues((prev)=>({...prev,email : e.target.value}))} type="email" label = "Email : " placeholder = "Enter Your Email "/>
            <InputForm onChange = {(e)=>setValues((prev)=>({...prev,password : e.target.value}))} type="password" label = "Password : " placeholder = "Enter Your Password  "/>
            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={handleSubmission}>SignUp</button>
                <spna><p>Already have an account ? {"  "}<span><Link to ="/login">Login</Link></span></p></spna>
                
            </div>
        </div>
    </div>
  )
}
