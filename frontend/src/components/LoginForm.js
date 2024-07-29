import { useState } from "react";

const LoginForm = () => {
    [Username,SetUsername] = useState('')
    [Password,SetPassword] = useState('')



    return(
        <form>
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
            </div>
        </form>
    )

}