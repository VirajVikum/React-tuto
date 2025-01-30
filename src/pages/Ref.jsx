import React, { useRef } from 'react'

export default function Ref() {

    const inputRef = useRef(null);

    const setFocus = () =>{
        inputRef.current.focus();
        // inputRef.current.value="159";
    }

  return (
    <div>
        <h1>UseRef Hook</h1> <br />
        <span>Access dom elements</span>
        <input ref={inputRef} /> <br />

        <button onClick={setFocus}>click me</button>
    </div>
  )
}
