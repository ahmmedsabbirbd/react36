import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = ()=> {
    const user = useContext(UserContext);
    const { name, age } = user;
    
    return <div> 
            <h3>{name}</h3>  
            <h3>{age}</h3>  
        </div>
}
export default Component4;