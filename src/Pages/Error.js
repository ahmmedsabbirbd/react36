import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Error = ()=> {  
    const navigate = useNavigate();

    return <div>
            <h2>Page not found</h2>
            <p>Type Correct url</p>
            <button onClick={ ()=> navigate('/') }>Go Home</button>
        </div>
}
export default Error;