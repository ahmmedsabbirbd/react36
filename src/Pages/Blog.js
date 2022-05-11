import React, { useEffect, useState } from 'react'; 
import { Link, useLocation, useParams } from 'react-router-dom';
// import { BlogData } from './Data'; // method 1
import BlogCss from './Blogs.module.css';

const Blog = ()=> { 
    const { title } = useParams();
    // const [ data, setData ] = useState(''); // method 1
    const location = useLocation();
 
    // useEffect(()=> {
    //     const SingleData = BlogData.filter((data)=> data.title == title);
    //     setData(SingleData[0]);   
    // }, []) // method 1

    // const { id, description, category, image_1, publish_date} = data; // method 1
    const { id, description, category, image_1, publish_date} = location.state; 

    return <div>
            <h2>Single Blog Page</h2>
            <article >
                <span>{id}</span>
                <h3>{title}</h3>
                {image_1 && <img src={image_1} alt={title} />}
                <p>{description}</p>
                <span>{category}</span>
                <span>{publish_date}</span><br />
                <Link to={'/blogs'}>Go Back</Link>
            </article>
        </div>
}
export default Blog;