import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const tutorial = 9;
 
ReactDOM.render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>Conditional Rendering - ternary, short circuit</p> 
        
        <App />   
    </div>,
    document.getElementById('root')
);