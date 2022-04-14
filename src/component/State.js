import React, {Component} from 'react';  

class State extends Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0
        }
    }

    handInCreament = ()=> { 
        this.setState({
            count : this.state.count + 1
        })
    }
    
    handDeCreament = ()=> { 
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){ 
        const {count} = this.state;
        return ( 
            <div>
                <span style={{display : 'block', fontSize : 30}}>Count : {count}</span>
                <button onClick={this.handInCreament} disabled={count === 20 ? true :false}>+</button>
                <button onClick={this.handDeCreament} disabled={count === 0 ? true :false}>-</button>
            </div> 
            )
    }
}

export default State;