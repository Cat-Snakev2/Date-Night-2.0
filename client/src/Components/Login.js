import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        if (name === 'username'){
            setUsername(value);
        }else if (name === 'password'){
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted with:', username, password);
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
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
                <button type="submit">Login</button>
                <button type="submit">Sign Up</button>

            </form>
        </div>
    );

};

export default Login;

//chatgpt

// import React, { useState } from 'react';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         if (name === 'username') {
//             setUsername(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Login submitted with:', username, password);
//     };

//     return (
//         <div className='login-container'>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-group'>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={handleInput}
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor="password">Password:</label>
//                     <input 
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={password}
//                         onChange={handleInput}
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
