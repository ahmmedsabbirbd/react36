import React, { Component } from 'react'; 

class Class extends Component {

    constructor (props) {
        super(props)
        
        this.state = { 
            count: 0
        } 
    }

    HandleInIncrement = ()=>  {  
        this.setState({
            count : this.state.count + 1
        });
    }

    render(){    
        return (
            <div>
                <p>React Hooks - useState(not)</p>   
                <h2>{this.state.count}</h2>
                <button onClick={this.HandleInIncrement}>+</button>
            </div>
        )
    }
}

export default Class;