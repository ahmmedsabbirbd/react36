import React from 'react';        
import Event_Handler_Class from './Event_Handler_Class';     
import Event_Handler_Binding from './Event_Handler_Binding';     
import Class from './Hooks_UseState/Class';     
import Hooks_UseState from './Hooks_UseState';     
import Form from './Form_Controlled_Component/Form';     

function App(){
    return <div className="container">
            <div className="card__wraper">  
                <Event_Handler_Class />
                <Event_Handler_Binding />
                <Class />
                <Hooks_UseState />
                <Form />
            </div>
        </div>
}

export default App;