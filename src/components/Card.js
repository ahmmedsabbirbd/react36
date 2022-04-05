import React from 'react';  

const cardText = 'Card One';
const cardDescription = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas commodi ea quas soluta eos fugit quis eligendi delectus culpa!';

function Card(){
    return  <div className="card"> 
                <h2>{cardText}</h2>
                <p>{cardDescription}</p>
            </div>
}

export default Card;