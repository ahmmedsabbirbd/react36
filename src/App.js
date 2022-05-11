import React from 'react';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Navbar from './Component/Navbar';
import Blog from './Pages/Blog';
import User from './Pages/User';

function App(){
    return (<div className="container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="*" element={ <Error />} />
                    <Route path="/contact" element={ <Contact />} />
                    <Route path="/blogs" element={ <Blogs />} />
                    <Route path="/blogs/:title" element={ <Blog />} />
                    <Route path="/user/" element={ <User />} />
                </Routes>
            </BrowserRouter>
        </div>)
}

export default App;