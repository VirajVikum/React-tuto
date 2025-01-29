import React, { useEffect, useState } from 'react'

export default function Effct() {

    const [count,setCount] = useState(0);

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
    </>
  )
}
