import React, { useEffect, useState } from 'react'; 

const useFetch = (url)=> {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(()=>{
        fetch(url).then((res)=> {
            return res.json()
        }).then((data)=> {
            setData(data); 
            setIsLoading(false);                    
        }).catch((error)=> { 
            setError(true);
        })
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;