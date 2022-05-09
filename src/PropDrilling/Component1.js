import React, { useState } from 'react'; 
import Component2 from './Component2';

const Component1 = ()=> {
    const [ user, setUser ] = useState({name: 'Sabbir Ahmmed', age: 20}); 

    return <div>  
            <h2>Prop Drilling</h2> 
            <Component2 user={user}/>
        </div>
}
export default Component1;