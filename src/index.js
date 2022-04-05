import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css'; //when i use style.css other file so 

var tutorial = 1;

const cardTwoStyle = {
    padding : '20px',
    backgroundColor : "rgb(205 194 194)",
}

ReactDOM.render(
    <div>
        <h1 className='title'>Start React {tutorial}</h1>
        <p>Inline css & External css</p>
        <p>CSS Styling in JSX</p>

        <div className="container">
            <div className="card__wraper">
                <div className="card">
                    <h2>Card One</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas commodi ea quas soluta eos fugit quis eligendi delectus culpa!</p>
                </div>

                <div className="card" style={cardTwoStyle}>
                    <h2>Card Tow</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas commodi ea quas soluta eos fugit quis eligendi delectus culpa!</p>
                </div>

                <div className="card" style={{backgroundColor : 'red'}}>
                    <h2>Card Three</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas commodi ea quas soluta eos fugit quis eligendi delectus culpa!</p>
                </div>
                
                <div className="card" style={{backgroundColor : 'yellow'}}>
                    <h2>Card Four</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptas commodi ea quas soluta eos fugit quis eligendi delectus culpa!</p>
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('root')
);