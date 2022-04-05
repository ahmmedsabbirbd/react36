import React from 'react'; 
import Card from './components/Card';

function App(){
    return <div className="container">
            <div className="card__wraper">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
}

export default App;