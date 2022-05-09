import React from 'react'; 

const Component4 = (props)=> { 
    const { name, age } = props.user;
    
    return <div>
            <h3>Component4</h3>
            <h4>{name}</h4>
            <h4>{age}</h4>
        </div>
}
export default Component4;