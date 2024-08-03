import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../authContext";


const LoginForm = () => {
    const [Username,SetUsername] = useState('')
    const [Password,SetPassword] = useState('')
    const [Error,setError] = useState('')
    const navigate = useNavigate();

    const {login} = useAuth()


    const usernameExists = async(username) => {
        try {
            const response = await fetch('/api/user_exists',{
                method: 'POST',
                body: JSON.stringify({username}),
                headers: {
                    'Content-Type': 'application/json',
                  },
            })

            const data = await response.json()
            console.log(data.exists)

            return data.exists
        } catch (error) {
            console.error('Error checking username availability:', error);
            return true;
            
        }
    }

    const correctPassword = async(username,password) => {

        try {
            const response = await fetch('/api/userLogin',{
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                    'Content-Type': 'application/json',
                  },
            })

            const data = await response.json()
            return data.correctUser
        } catch (error) {
            console.error('Error checking credentails:', error);
            return false;
            
        }

    }

    const handleLogin = async(e) => {
        e.preventDefault()

        const correctUsername = await usernameExists(Username)
        const corPassword = await correctPassword(Username, Password)

        if (!correctUsername) {
            setError("Wrong Username")
        } else if (!corPassword) {
            setError("Wrong Password")
        } else {
            setError("")
            navigate('/home')
            login()
            
            }
    }



    return(
        <form onSubmit={handleLogin}>
            <div className="login-form">
            <h3>Login</h3>

            <label>Enter Username</label>
            <input
            type="text"
            onChange={(e)=>SetUsername(e.target.value)}
            value={Username}/>

            <label>Enter Password</label>
            <input
            type="password"
            onChange={(e)=>SetPassword(e.target.value)}
            value={Password}/>

            <button className="login-button">Login</button>

            {Error && <p className="error">{Error}</p>}

            </div>
        </form>
    )

};
export default LoginForm;
