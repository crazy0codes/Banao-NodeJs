import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    async function handleLogin() {
       const loginfetch =  await fetch(`https://banao-nodejs.onrender.com/api/login?email=${user.username}&password=${user.password}`,
       {
        method : 'POST'
       }
       )
       const isUser = await loginfetch.json()
       alert(JSON.stringify(isUser))
    }


    return (
        <div>
            <h2>Login</h2>
            <h4>{JSON.stringify(user)}</h4>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                    let username = e.target.value
                    setUser(prev => ({
                        ...prev,
                        username,
                    }))
                }
                }
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                    let password = e.target.value
                    setUser(prev => ({
                        ...prev,
                        password
                    }))
                }
                }
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;