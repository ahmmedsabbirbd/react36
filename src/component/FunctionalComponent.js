import React from 'react';  

function FunctionalComponent(props){ 
    const {text} = props;

    return <div className='card'>
            <p>Typer your text : {text}</p>
        </div>
}

export default FunctionalComponent;