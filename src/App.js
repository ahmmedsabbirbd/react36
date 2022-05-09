import React from 'react'; 
import Component1 from './PropDrilling/Component1'; 
import UserContext from './UserContext/Component1'; 

function App(){
    return <div className="container">
            <div className="card__wraper"> 
                <Component1 />
                <UserContext />
            </div>
        </div>
}

export default App;