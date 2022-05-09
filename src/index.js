import React from 'react';
import ReactDOM from "react-dom/client"; 
import App from './App';

const tutorial = 14;

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>prop drilling</p>
        <p>React Hooks - useContext Hook</p>
        
        <App />   
    </div>
); 

