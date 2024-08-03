import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
    const [fullName, SetFullName] = useState('')
    const [username,SetUsername] = useState('')
    const [password,SetPassword] = useState('')
    const [repeatPassword,SetRepeatPassword] = useState('')
    const [error, setError] = useState('');
    const navigate =  useNavigate()

    const checkUsername = async(uname) => {
        try {
            const response = await fetch('/api/user_exists',{
                method: 'POST',
                body: JSON.stringify({uname}),
                headers: {
                    'Content-Type': 'application/json',
                  },
            })

            const data = await response.json()
            return data.exists
        } catch (error) {
            console.error('Error checking username availability:', error);
            return true;
            
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault()
        const user = {fullName, username, password}

        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }

        const usernameExists = await checkUsername(username)
        console.log(usernameExists)

        if (usernameExists) {
            setError('Username already taken');
            return;
        }

       try {
        console.log('in this block')
        console.log(user)

        const response = await fetch('/api/userSignUp', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                  },
        })

        console.log(response)

        if (response.ok) {
            setError('');
            // Clear form fields after successful signup
            SetFullName('');
            SetUsername('');
            SetPassword('');
            SetRepeatPassword('');
            navigate('/login');
        
        } else {
            const errorData = await response.json();
            console.log('something went wrong')
            setError(errorData.message);
        }

       } catch (error) {
        
       }
    }


    return(
        <form onSubmit={handleRegister}>
            <div className="login-form">
            <h3>Login</h3>

            <label>Enter Full Name</label>
            <input
            type="text"
            onChange={(e)=>SetFullName(e.target.value)}
            value={fullName}/>

            <label>Enter Username</label>
            <input
            type="text"
            onChange={(e)=>SetUsername(e.target.value)}
            value={username}/>

            <label>Enter Password</label>
            <input
            type="password"
            onChange={(e)=>SetPassword(e.target.value)}
            value={password}/>

            <label>Repeat Password</label>
            <input
            type="password"
            onChange={(e)=>SetRepeatPassword(e.target.value)}
            value={repeatPassword}/>

            <button className="register-button"> Register </button>
            <button type="button" onClick={() => navigate('/login')}>Back to Login</button>
            

            {error && <p className="error">{error}</p>}
            </div>
        </form>
    )

};

export default SignupForm;