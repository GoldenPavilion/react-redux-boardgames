import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser';


const Login = ({ username, password, updateLoginForm, login }) => {
    
    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedData = {
            name,
            value
        }
        updateLoginForm(updatedData)
    }
    
    const handleSubmit = event => {
        console.log(username, password)
        event.preventDefault();
        login(username, password)
    }
    
    return(
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    className="username" 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleOnChange} 
                />
                <label>Password:</label>
                <input 
                    className="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                />
                <button type="submit" value="Login">Login</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        username: state.loginReducer.username,
        password: state.loginReducer.password
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
