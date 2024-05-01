// ❤️❤️ ❤️❤️ ❤️❤️
// import "./App.css";

// We can do inline or external stylesheet?
//https://www.w3schools.com/react/react_css.asp

import React from 'react'
// import QuestionWindow from './Components/QuestionWindow'
// import Login from './Components/Login'
import SignUp from './Components/SignUp';
import './App.css'
import Login from './Components/Login';


const App = () => {
  return (
    <div>
      <h1>Welcome to DateNight</h1>
      <SignUp />
      {/* <QuestionWindow /> */}
    </div>
  );
};

export default App;
