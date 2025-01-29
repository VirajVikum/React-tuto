import React from 'react'

export default function Parametrs(props) {
  return (
    <div>
        My name is {props.name}. My school is {props.school}

        <span>{props.children}</span>
    </div>
  )
}
