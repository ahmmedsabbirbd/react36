import React, { useEffect, useState } from 'react'; 
import Todo from './Todo';

const DataFetch = ()=> {
    const [ todos, setTodos ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos').then((res)=> {
    //         return res.json()
    //     }).then((data)=> {
    //         setTodos(data);           
    //     })
    // }, [])

    useEffect(()=>{
        fetch('https://ahmmedsabbirbd.github.io/Api.Me/sum-up/sum-up.json').then((res)=> {
            return res.json()
        }).then((data)=> {
            setTodos(data); 
            setIsLoading(false);                    
        }).catch((error)=> { 
            setError(true);
        })
    }, [])

    return <div> 
            <h1>Data Fetch</h1>
            
            { error ? "Data not Fetching": isLoading ? "Data is Loading....." : todos && todos.map( (todo, index)=> <Todo key={index} {...todo}/>) }
        </div>
}

export default DataFetch;