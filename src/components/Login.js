import React from 'react';
import {useState} from 'react';
import APIClient from '../apiClient';

function Login(props){
    const apiClient = new APIClient("");
    const[inputs, setInputs] = useState({});
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values, [name]:value}));

    }
    const handleClick = (event)=>{
        event.preventDefault();
        apiClient.login(inputs).then((data)=>{
           // sessionStorage.setItem('token', data);
            const apiClient = new APIClient(data);
            props.setToken(data);
            apiClient.fetch();
        })
    }

   
        return(
            <div>
                <div>
                <label>Username</label>
                    <input type='text' name='username' onChange={handleChange} placeholder='username'/>
                </div>
                <div>
                <label>Password</label>
                    <input type='password' name='password' onChange={handleChange}/>
                </div>
                <div>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        );
}

export default Login;