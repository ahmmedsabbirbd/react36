import React from 'react'; 
import { NavLink } from 'react-router-dom';
import './Navbar.module.css';

const Navbar = ()=> {  
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/Contact">Contact</NavLink> 
    </nav>
}
export default Navbar;