import React from 'react'

export default function Events() {

    function buttonClick(){
        console.log('button clicked');
        alert('button clicked');
    }

    const handleInputChange = (event, name, age, obj)=>{
      console.log(event.target.value, name, age, obj);
    }

  return (
    <>
    
    <div>Events Handling</div>
    <hr />

    <button onClick={buttonClick}>click me</button>
    {/* <button onClick={buttonClick()}>click me</button> run when load */}

    <button onClick={()=>{
      console.log('annonimous function');
    }}>Annonimous button</button>

{/* <input type="text" onChange={handleInputChange} /> */}
    <input type="text" onChange={(event)=>handleInputChange(event,'vj',25,{})} />

    

    </>

  )
}
