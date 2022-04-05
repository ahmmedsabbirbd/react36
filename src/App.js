import React from 'react'; 
import Card from './components/Card';
import CardData from './CardData.json';

// let Cards = [];
// for(let i = 0; i < CardData.length; i++) { 
//     Cards.push(<Card cardText={CardData[i].cardText} key={i} cardDescription={CardData[i].cardDescription} />);
// } //Json data show step-1

function App(){
    return <div className="container">
            <div className="card__wraper">
                {/* {Cards}  step-2 */}
 
                {CardData.map((item, index) => <Card cardText={item.cardText} key={index} cardDescription={item.cardDescription} />)}
            </div>
        </div>
}

export default App;