import React, { useEffect, useState } from 'react'

export default function Effct() {

    const [count,setCount] = useState(0);

    const [user,setUser] = useState({fname:"viraj", lname:"vikum"});

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    useEffect(()=>{
        console.log('clicked');
        alert('Button cicked');
    },[count])

    const changeUser = () => {
        setUser({
            ...user,    //spreading to not remove all properties
            lname: Math.random()
        })
    }

    useEffect(()=>{
        console.log('name changed');
        return () => {
            console.log('unmount');   //run when unmount
        }
        // count+1;
    },[user.lname]);

    // useEffect(()=>{
    //     console.log('name changed');
    //     // count+1;
    // },[]);   run like mount(only when render)

    // useEffect(()=>{
    //     console.log('name changed');
    //     // count+1;
    // },[]);   run like wire:poll(for every updates)

    // useEffect(()=>{
    //     console.log('name changed');
    //     return () => {
    //         console.log('unmount');   //run when unmount
    //     }
    // },[]);   

  return (
    <>
    <div><h1>useEffct Hook</h1></div>

    <span>onchange/side effect</span> 

    <hr />

    <button onClick={increment}>+</button>
    <span> {count} </span>
    <button onClick={decrement}>-</button>
<hr />
<h1>Use of arrow functions</h1>
    <button onClick={() => setCount(count + 1)}>+</button>

    <hr />

    <button onClick={changeUser}>Shift user</button>

    <span>User Name: {user.fname} {user.lname}</span>


    </>
  )
}
