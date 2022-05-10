import React from 'react';
import ReactDOM from "react-dom/client"; 
import App from './App';

const tutorial = 15;

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>PropTypes</p> 
        <p>React Hooks - useReducer Hook</p>
        
        <App />   
    </div>
); 

