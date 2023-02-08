import React from 'react'

export default function RenderList(props) {
  return (
    <div>
        {props.list.map((list)=>{
            return (
                <div>
                    <ul>
                        <li>{list.title} ({list.date.toLocaleDateString()})</li>
                    </ul>
                </div>
            )
        })}
    </div>
  )
}
