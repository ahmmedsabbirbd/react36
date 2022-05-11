import React from 'react';  
import { useSearchParams } from 'react-router-dom';

const User = ()=> {
    const [ searchParam, setSearchParam ] = useSearchParams();
    const name = searchParam.get('name');
    const age = searchParam.get('age');
    console.log(name);
    console.log(age);

    return <div>
            <h2>User</h2>
            <h3>{name}</h3>
            <h3>{age}</h3>
        </div>
}
export default User;