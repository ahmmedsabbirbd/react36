import React, { Component } from 'react'; 

class Event_Handler_Class extends Component {

    constructor (props) {
        super(props)

        this.state = { 
            InputVaue: ''
        }
    }

    HandleOnChange = (e)=> { 
        this.setState({
            InputVaue : e.target.value
        }, ()=>{
            console.log(this.state.InputVaue);
        })
    }

    render(){    
        return (
            <div> 
                <p>Event Handler - onChange - onClick</p>
               <input type="text" onChange={this.HandleOnChange} />
               <p>{this.state.InputVaue}</p>
            </div>
        )
    }
}

export default Event_Handler_Class;