import React, { useState } from 'react'

export default function 
() {

    const [data, setData] = useState();

    const handleSubmit = (event) =>{
        console.log(data);
        event.preventDefault();   //stop refreshing
    }

    const handleChange = (event) =>{

        setData({
            ...data,
            [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }


  return (
    <div>
        <h1>Forms</h1>
        <span>
            Use Formik package for handle validations
        </span>
        <form onSubmit={handleSubmit}>
            <input type="text" name='fname' onChange={handleChange} /> <br />
            <input type="text" name='lname' onChange={handleChange} /> <br />
            <input type="checkbox" name='isOk' onChange={handleChange} /> <br />
            <input type="submit" /> <br />
        </form>
    </div>
  )
}
