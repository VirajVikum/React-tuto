import React, { useState } from 'react'

export default function Num() {

    const [count, setCount] = useState(0);

    // let count=0;

    const increment =() => {
        // count ++;
        setCount(count+1);
    }

    const decrement =() => {
        // count --;
        setCount(count-1);
    }

  return (
    <div>
        <h1>Realtime updating</h1>

        
        <span>Count is </span>
        <button onClick={increment}>+</button>
        <span> {count} </span>
        <button onClick={decrement}>-</button>

    </div>

  )
}
