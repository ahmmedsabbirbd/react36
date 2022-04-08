import React from 'react';  
import users from './users';

function App(){
    return <div className="container">
            <div className="card__wraper">  
                {
                    users.map((user, index) =>  <article key={index} >
                            <h1>Name : {user.name}</h1>
                            <h2>Age : {user.age}</h2>
                            <p>{user.bio}</p> 
                            {
                                user.phones.map((phone, index) => <div>
                                    <p>{phone.home}</p><p>{phone.office}</p>
                                    </div>
                                )
                            } 
                        </article>)
                } 
            </div>
        </div>
}

export default App;