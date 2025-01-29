import React from 'react'

export default function Events() {

    function buttonClick(){
        console.log('button clicked');
        alert('button clicked');
    }

  return (
    <>
    
    <div>Events Handling</div>
    <hr />

    <button onClick={buttonClick}>click me</button>
    {/* <button onClick={buttonClick()}>click me</button> run when load */}

    </>

  )
}
