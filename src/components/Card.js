import React from 'react';  

const DcardText = 'Default card';
const DcardDescription = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas commodi ea quas soluta eos fugit quis eligendi delectus culpa!';

function Card(props){
    const {cardText, cardDescription} = props;
    
    return  <div className="card"> 
                <h2>{cardText ? cardText : DcardText}</h2>
                <p>{cardDescription ? cardDescription : DcardDescription}</p>
            </div>
}

export default Card;