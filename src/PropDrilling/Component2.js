import React from 'react'; 
import Component3 from './Component3'; 

const Component2 = (props)=> { 

    return <div> 
            <Component3 user={props.user} />
        </div>
}
export default Component2;