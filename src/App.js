import React from 'react';  
import FunctionalComponent from './component/FunctionalComponent';  
import ClassComponent from './component/ClassComponent';  

function App(){
    return <div className="container">
            <div className="card__wraper">  
                <FunctionalComponent text="amar sonar bangla. Ami tomary valo bashi" />
                <ClassComponent text="I love hack" />
            </div>
        </div>
}

export default App;