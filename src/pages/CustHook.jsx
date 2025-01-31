import React, { useEffect, useState } from 'react'



const useApi = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const api = {
        
        post: (data)=>{
            setIsLoading(true);
            // console.log(data);
            setTimeout(()=>{
                setData({response: {message: 'OK', code: 101}});
                setIsLoading(false);
            },5000)
        },
        get: ()=>{
            console.log('get');
        }
    }

    return [data, isLoading, api];

}

export default function CustHook() {

    const [data,isLoading, api] = useApi();

    useEffect(()=>{
        if (!isLoading){
            console.log(data);
        }else{
            console.log('Loading...');
        }
    })

    const handleSubmit = (event)=>{
        event.preventDefault();

        api.post({name: 'VJ'});
    }

  return (
    <div>
        <h1>Custom Hook</h1>

        <form action="" onSubmit={handleSubmit}>
            <button type='submit'>click</button>
        </form>
    </div>
  )
}
