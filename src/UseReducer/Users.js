import React, { useReducer, useState } from 'react';
import User from './User';

const reducer = (state, action) => {
    return state;
}
const Users = ()=> { 
    const [ information, dipatch ] = useReducer(reducer, {
        name: 'Sabbir Ahmmed',
        age: 20,
        gf: {
            one: 'd',
            two: 'o' ,
            three: 'n' 
        }
    });

    const { name, age, gf } = information;

    console.log(information);
    
    // const [ name, setName ] = useState('Sabbir Ahmmed');
    // const [ age, setAge ] = useState(20);
    // const [ gf , setGf ] = useState({
    //     one: 'd',
    //     two: 'o' ,
    //     three: 'n' 
    // });
    
    return <div>
            <h2>PropType</h2>
            <p>It's not Complete</p>
            <User name={name} age={age} gf={gf} />
            {/* <button onClick={}>Plus</button> */}
        </div>
}
export default Users;