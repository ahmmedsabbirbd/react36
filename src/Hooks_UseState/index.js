import React, { useState } from 'react'; 

function Hooks_UseState () {

    const [count, setCount] = useState(0);
    const HandleOnClick = ()=> {
        setCount(count + 1)
    }

    return (
        <div>
            <p>React Hooks - useState</p>   
            <h2>{count}</h2>
            <button onClick={HandleOnClick} disabled={count === 5 ? true : false}>+</button>
        </div>
    ) 
}

export default Hooks_UseState;