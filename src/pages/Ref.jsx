import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export default function Ref() {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const setFocus = () =>{
        inputRef.current.focus();
        // inputRef.current.value="159";
    }

    const changeFocus = () =>{
        inputRef2.current.focus();
        // inputRef.current.value="159";
    }

    const updateFocus = () =>{
        inputRef3.current.clickMe();
        // inputRef.current.value="159";
    }

    const MyComponent = () =>{
        return <input ref={inputRef2} />
    }

    let NewComponent = (props, ref) =>{
        const inputRef3 = useRef();

        useImperativeHandle(ref,()=>({
            clickMe: ()=> {
                console.log('click me');
                inputRef3.current.focus();
            }
        }));

        return <input ref={inputRef3} />
    }

    NewComponent = forwardRef(NewComponent);

  return (
    <div>
        <h1>UseRef Hook</h1> <br />
        <span>Access dom elements</span>
        <input ref={inputRef} /> <br />

        <button onClick={setFocus}>click me</button> <br />
        <span>component</span> <button onClick={changeFocus}>click me </button> <br />
        <span>component more...</span> <button onClick={updateFocus}>click me </button>


        <hr />
        <h1>UseImperative Hook</h1> <br />

        <MyComponent ref={inputRef2} />
        <NewComponent ref={inputRef3} />


    </div>
  )
}
