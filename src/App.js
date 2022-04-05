import React from 'react'; 
import Card from './components/Card';

function App(){
    return <div className="container">
            <div className="card__wraper">
                <Card cardText="Card Title one" cardDescription="A card is a rectangular piece of plastic, issued by a bank, company, or shop, which you can use to buy things or obtain money." />
                <Card cardText="Card Title two" cardDescription="Holiday-makers should beware of using plastic cards in foreign cash dispensers." />
                <Card cardText="Card Title three" cardDescription="He paid the whole bill with an American Express card." />
                <Card cardText="Card Title four"/>
                <Card  />
            </div>
        </div>
}

export default App;