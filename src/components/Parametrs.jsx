import React from 'react'
import  propTypes from 'prop-types'

export default function Parametrs(props) {

  const handleOnClick =() => {
    props.onUpdateClicked("hello", "145");
  } 

  return (
    <div>
        My name is {props.name}. My school is {props.school}

        <span>{props.children}</span>

        <button onClick={handleOnClick}>send event</button>
        {/* <button onClick={props.onUpdateClicked}>send event</button> */}
    </div>
  )
}

Parametrs.propTypes = {
  name: propTypes.string.isRequired,
  school: propTypes.string,
  onUpdateClicked: propTypes.func
};


