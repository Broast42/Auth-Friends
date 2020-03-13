import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [creds, setCreds] = useState({});

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        });
    };

    const signIn = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/login`, creds)
            .then(res => {
                localStorage.setItem("token", res.data.payload);

                props.history.push("/friends")
            })
            .catch(err => {
                console.log("error", err);
            });

    };


    return(
        <div>
            <form onSubmit={signIn}>
                <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;