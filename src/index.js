import React from 'react';
import ReactDOM from "react-dom/client"; 
import App from './App';

const tutorial = 13;

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>React Hooks - useEffect</p>
        <p>fetching data with useEffect </p>
        <p>custom hook</p>
        
        <App />   
    </div>
); 

