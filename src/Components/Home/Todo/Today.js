import React from 'react'
import RenderList from './RenderList';

export default function Today(props) {
    const date = new Date()
    const filteredList = props.list.filter((task)=>{
        if(date.getFullYear() !== task.date.getFullYear()){
            return false;
        }
        if(date.getMonth() !== task.date.getMonth()){
            return false;
        }
        if(date.getDate() !== task.date.getDate()){
            return false;
        }
        return true;
    })
  return (
    <div>
        <h2>Today's Tasks</h2>
        <RenderList list = {filteredList}/>
    </div>
  )
}
