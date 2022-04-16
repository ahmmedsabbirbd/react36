import React, { useState } from 'react';
import style from './Form.module.css'; 

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const HandleNameChange = (e)=> {
        setName(e.target.value); 
    }

    const HandleEmailChange = (e)=> {
        setEmail(e.target.value);
    }

    const HandlePasswordChange = (e)=> {
        setPassword(e.target.value);
    }

    let userInfo = {
        name,
        email,
        password
    }

    const HandleSubmit = (e)=> {
        e.preventDefault();
        console.log('Submited');
        console.log(userInfo);
    }
 
    return (
        <div>  
            <p>Form - controlled component</p>
            <h1>Resistration</h1>
            <form action="" onSubmit={HandleSubmit} >
                <div className={style.formGroup} >
                    <label htmlFor="" >Name : </label>
                    <input name='name' id='name' type="text" onChange={HandleNameChange} value={name} required />
                </div>
                
                <div className={style.formGroup} >
                    <label htmlFor="" >Email : </label>
                    <input name='email' id='email' type="email" value={email} onChange={HandleEmailChange} required />
                </div>

                <div className={style.formGroup} >
                    <label htmlFor="" >Password : </label>
                    <input name='password' id='password' type="password" value={password} onChange={HandlePasswordChange} required />
                </div>
                
                <div className={style.formGroup} >
                    <button type='submit'>Resister</button>
                </div>
            </form>
        </div>
    ) 
}

export default Form;