import React, { useEffect, useState } from 'react'; 

const UseEffectExample = ()=> {
    const [ count, setCount ] = useState(0);


    //when this component is rendering so it's call
    useEffect(()=>{
        // console.log("useEffect");
    })

    //only one time call
    useEffect(()=>{
        // console.log("useEffect");
    })

    //when this count is change so it's call
    useEffect(()=>{
        // console.log("useEffect");
    }, [count])

    return <div> 
            {/* {console.log("Rander")}; */}
            <h1>UseEffect</h1>
            <h2>{count}</h2>
            <button onClick={()=> setCount((count)=> count + 1)}>+</button> 
        </div>
}
export default UseEffectExample;