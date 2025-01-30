import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 };
        case 'sub':
            return { count: state.count - 1 };
        default:
            return { count: state.count };
    }
}

export default function Reducr() {

    const initialState = {
        count: 0
    }

    const [state, dispatc] = useReducer(reducer, initialState);
 
    return (
        <div>
            <h1>Reducr</h1>
            <p>Conditionally updating</p>

            Count: {state.count} <br />


            <button onClick={()=> dispatc({ type:"add"})}>+</button>
            <button onClick={()=> dispatc({ type:"sub"})}>-</button>
        </div>
    )
}
