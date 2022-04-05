import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const tutorial = 2;
 
ReactDOM.render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1>
        <p>Function component</p>
        <p>how to create and use react component</p> 

        <App />   
    </div>,
    document.getElementById('root')
);