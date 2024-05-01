import React, { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        else {
            console.log("Unexpected field: ", name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SignUp submitted with:', username, password);
        setUsername('');
        setPassword('');
        // send user data to a backend server
    };

    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleInput}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInput}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
