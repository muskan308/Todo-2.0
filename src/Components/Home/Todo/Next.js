import React from 'react'
import RenderList from './RenderList'

export default function Next(props) {
    const date = new Date();
    const filteredList = props.list.filter((task)=>{
        const diffTime = task.date - date;
        const diffDays = diffTime/(1000*60*60*24);
        if(diffDays >= -1 && diffDays < 7){
            return true;
        }
        return false;
    })
  return (
    <div>
        <h2>Tasks for next 7 days</h2>
        <RenderList list = {filteredList}/>
    </div>
  )
}
