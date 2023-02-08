import React, { useState } from 'react'
import Inbox from './Inbox'
import Next from './Next'
import Today from './Today'


let list = [
    { number: 1, title: "Complete ReactJs", date: new Date("02/15/2023") },
]

export default function MainBar(props) {
    const [filteredList, setFilteredList] = useState(list);
    const addToList = (obj) => {
        list.push(obj);
        setFilteredList([...list]);
    }

    const del = (ind) =>{
        const updatedlist = list.filter((x, index)=>{
            return index !== ind;
        })
        list = [...updatedlist];
        setFilteredList(list);
    }
    return (
        <div>
            {props.active === "INBOX" &&
                <Inbox list={filteredList} append={addToList} del = {del} />
            }
            {props.active === "TODAY" && (
                <Today list={filteredList} />
            )}
            {props.active === "NEXT" && (
                <Next list={filteredList} />
            )}
        </div>
    )
}
