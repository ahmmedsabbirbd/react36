import React from 'react';
import ReactDOM from "react-dom/client"; 
import App from './App';

const tutorial = 10;

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>Event Handler - onChange - onClick & Binding </p>
        <p>React Hooks - useState</p> 
        <p>Form - controlled component</p>
        
        <App />   
    </div>
); 

