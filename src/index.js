import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const tutorial = 8;
 
ReactDOM.render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1> 
        <p>state, setState and event handler</p> 
        
        <App />   
    </div>,
    document.getElementById('root')
);