import { useState } from 'react';
import '../styles/Inputs.css';

function Inputs({ updateUserId }) {

    let storedEmailValue = localStorage.getItem("Useremail") ? localStorage.getItem("Useremail") : '';
    const [email, setEmail] = useState( storedEmailValue );
    const [message, setMessage] = useState('');
    
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClick = () => {

        //Validate if this is an email
        if ( !(/\S+@\S+\.\S+/.test(email)) ) {
            setMessage("This is not an email");
        }else{
            setMessage('');

            if (localStorage.getItem("Useremail") !== email) {
                
            
                localStorage.setItem("Useremail",email);

                // Set random userId when a new user is set.
                let randUserId = generateRandomNumber(1, 10);
                if (localStorage.getItem("Userid") === randUserId) {
                    randUserId = generateRandomNumber(1, 10);
                }
                localStorage.setItem("Userid",randUserId);
                updateUserId(randUserId);
            }
        }
    };
        
    return (
        <div className='Inputs'>
            <div className='Inputs-message'>{message}</div>
            <div>
                <input
                    className='Inputs-input'
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
                <button className='Inputs-button' onClick={handleClick}>Set email</button>
            </div>
        </div>            
    );
};

export default Inputs;