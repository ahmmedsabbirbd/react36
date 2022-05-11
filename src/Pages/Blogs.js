import React, { useState } from 'react'; 
import { BlogData } from './Data';
import BlogCss from './Blogs.module.css';
import { Link } from 'react-router-dom';

const Blogs = ()=> {
    const [ data, setData ] = useState(BlogData);

    const TextCut = (str, num) => {

        if (str.length > num) {
            return str.slice(0, num) + '....';
        } else {
            return str;
        } 
    } 

    return <div>
            <h2>Blogs Page</h2>

            <div className={BlogCss.article__wraper}>
                {data.map((data, index) => { 
                    const { id, title, category, description, image_1, publish_date } = data;

                    return (
                        <article key={index}>
                            <span>{id}</span>
                            <h3>{title}</h3>
                            {image_1 && <img src={image_1} alt="" />}
                            <p>{TextCut(description, 10)}</p> 
                            {publish_date &&  <span>{publish_date}</span>}
                            <Link to={title} state={data}>Lorn More</Link>
                        </article>
                    )
                })}
            </div>
        </div>
}
export default Blogs;