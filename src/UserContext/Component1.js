import React, { useState } from 'react'; 
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = ()=> {
    const [ user, setUser ] = useState({name: 'Sabbir Ahmmed', age: 20}); 

    return (
        <UserContext.Provider value={user}>
            <div>  
                <h2>userContext</h2> 
                <Component2 />
            </div>
        </UserContext.Provider>
    )
}
export default Component1;