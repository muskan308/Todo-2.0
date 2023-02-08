import React, { useRef, useState } from 'react'

export default function Inbox(props) {
    const [newTask, setNewTask] = useState(false);
    const titleRef = useRef("");
    const calanderRef = useRef("");
    const addHandler = (e) =>{
        e.preventDefault();
        if(titleRef.current.value === ""){
            window.alert("Please Enter the Title")
            return;
        }
        let newObj = {
            number: props.list.length +1 ,
            title : titleRef.current.value ,
            date : new Date(calanderRef.current.value),
        }
        props.append(newObj);
        setNewTask(false)
    }
    const cancelHandler = (e) =>{
        e.preventDefault();
        setNewTask(false)
    }
    return (
        <div>
            <h2>INBOX</h2>
            {!newTask ? (
                <button className = "btn btn-sm btn-success" onClick={()=>{setNewTask(true)}}>Add Item</button>
            ) : (
                <form>
                    <input style={{border:"0", borderRadius : "2px"}} typr="text" ref={titleRef} /><br/><br/>
                    <div>
                        <button className='btn btn-success btn-sm' onClick={(e)=>{addHandler(e)}}>Add Task</button> &nbsp;
                        <button className='btn btn-danger btn-sm' onClick={(e)=>{cancelHandler(e)}}>Cancel</button>&nbsp;
                        <input type='date' style={{border:"0", borderRadius : "2px", height : "30px", margin :"0 2px", padding :"0 10px"}} ref={calanderRef} defaultValue = "2023-01-01"/>
                    </div>
                </form>
            )}
            <br/><br/>
            <div>
                {props.list.map((list, index)=>{
                    return (
                        <ul key={list.number}>
                            <li>{list.title} ({list.date.toLocaleDateString()}) &nbsp; <button className = "btn btn-sm btn-outline-danger" onClick={()=>{props.del(index)}}>Delete</button></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
