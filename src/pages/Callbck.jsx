import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function Callbck() {

    const [count, setCount] = useState(0);
    const [rand, setRand] = useState(0);

    const add = () => {
        // console.log('clicked');
        setCount(count+1);
    }

    // const showNumber =()=>{
    //     return 'last updated number is :'+count;        // run at every rerendering times
    // }

    // const showNumber =useCallback(()=>{
    //     return 'last updated number is :'+count;        // return the full function (can get passed parameters)
    // },[count]);

    const showNumber =useMemo(()=>{
        return 'last updated number is :'+count;            // return only value
    },[count]);


    const changeRand = () => {
        setRand(Math.random());
    }

    useEffect(() => {
      console.log('count changed');
      }, [showNumber]);
    

  return (
    <div>
        <h1>Callbck</h1>

        <h3>{count}</h3>

        <br />
        {/* {showNumber()}<br />   only in call back--> return the function */}
        {showNumber}<br />   {/* memo--> return the function */}
        

        <button onClick={add}>+</button> <br />
        <button onClick={changeRand}>update</button> <br />
        <span>Random : {rand}</span>
    </div>
  )
}
