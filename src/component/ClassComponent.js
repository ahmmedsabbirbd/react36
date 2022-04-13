import React, {Component} from 'react';  

class ClassComponent extends Component {

    
    render(){
        console.log(this);
        const {text} = this.props;

        return (
            <div className='card'>
                <p>type your description : {text}</p>
            </div>
        )
    }
}

export default ClassComponent;