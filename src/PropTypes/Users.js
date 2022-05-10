import React, { useState } from 'react';
import User from './User';

const Users = ()=> { 
    const [ name, setName ] = useState('Sabbir Ahmmed');
    const [ age, setAge ] = useState(20);
    const [ gf , setGf ] = useState({
        one: 'd',
        two: 'o' ,
        three: 'n' 
    });
    
    return <div>
            <h2>PropType</h2>
            <User name={name} age={age} gf={gf} />
        </div>
}
export default Users;