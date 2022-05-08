import React, { useState } from 'react';  

const FAQ = (prop)=> { 
    const {title, description} = prop;
    const [ toggle, setToggle ] = useState(false); 

    return (
        <div className='card'>
            <div className='card__header'>
                <h2>{title}</h2>
                <button onClick={ ()=> setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
            </div>
            {toggle ? <p>{description}</p> : ""}
        </div>
    ) 
}

export default FAQ;