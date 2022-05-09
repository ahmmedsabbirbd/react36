import React from 'react'; 

const Todo = (props)=> {  
    const {id, title, description, publish_date} = props;
    return <div className='card'> 
            <p>{id}</p>
            <p>{publish_date}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
}

export default Todo;