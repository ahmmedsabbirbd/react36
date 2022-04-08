import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const tutorial = 5;
 
ReactDOM.render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>Nested mapping</p> 
        
        <App />   
    </div>,
    document.getElementById('root')
);