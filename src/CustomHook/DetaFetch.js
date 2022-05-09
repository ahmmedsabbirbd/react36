import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const DataFetch = ()=> { 
    const { data, isLoading, error } = useFetch('https://my-json-server.typicode.com/typicode/demo/posts');
    const LoadingMessage = 'Data is loading';
    const ErrorMessage = 'Data not fetched';
    const DataContent = data && data.map( (data, index)=> <div className='card' key={index}>{data.title}</div> );

    return <div> 
            <h1>Data Fetch</h1>
            { error ? ErrorMessage : isLoading ? LoadingMessage : DataContent } 
        </div>
}

export default DataFetch;