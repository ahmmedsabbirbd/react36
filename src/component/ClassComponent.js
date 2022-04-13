import React, {Component} from 'react';  

class ClassComponent extends Component {

    render(){
        console.log(this);
        const {text, cardTtitle, cardSubTitle} = this.props;

        return (
            <div className='w-full p-4 sm:w-6/12'>
                <div className='bg-sky-500/100 p-5 rounded-[20px]'>
                    <h1>{cardTtitle}</h1>
                    <h5>{cardSubTitle}</h5>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default ClassComponent;