import React from 'react';
import PropTypes from 'prop-types';

const User = (props)=> { 
        
    return <div>  
            <h3>{props.name} </h3>
            <h3>{props.age} </h3>
            <h2>Gf</h2>
            <h3>{props.gf.one} </h3>
            <h3>{props.gf.two} </h3>
            <h3>{props.gf.three} </h3>
        </div>
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gf: PropTypes.object,
};

export default User;