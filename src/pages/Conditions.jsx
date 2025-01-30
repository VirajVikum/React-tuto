import React, { useState } from 'react'

export default function Conditions() {

    const [cond, setCond] = useState(false);

    const handleLogin = () => {
        setCond(!cond);
    }

    const [users, setUsers] = useState(['01', '02', '03', '04', '05']);

    return (
        <div>
            <h1>Conditional Rendering</h1>

            {cond && <h1>Hello VJ</h1>}
            <button onClick={handleLogin}>{!cond ? 'Login' : 'Logout'}</button>

            <hr />

            <h1>Mapping</h1>

            {users.map(user => <p>User {user}</p>)}

{/* Like this in JS */}
            {users.map(
                function (user) 
                { 
                    return user + '\n'; 
                }
            )}
            

        </div>
    )
}
