import React from 'react';  
import Users from './PropTypes/Users';
import UserReducer from './UseReducer/Users';

function App(){
    return <div className="container">
            <div className="card__wraper"> 
                <Users />
                <UserReducer />
            </div>
        </div>
}

export default App;