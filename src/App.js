import React from 'react'; 
import DataFetch from './DataFetch/DataFetch';
import CustomHook from './CustomHook/DetaFetch';
import UseEffectExample from './useEffect/UseEffectExample';

function App(){
    return <div className="container">
            <div className="card__wraper">
                <UseEffectExample />
                <DataFetch />
                <CustomHook />
            </div>
        </div>
}

export default App;