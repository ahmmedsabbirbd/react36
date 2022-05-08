import React from 'react';
import ReactDOM from "react-dom/client"; 
import App from './App';

const tutorial = 11;

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>how to create FAQ section for website</p>
        
        <App />   
    </div>
); 

