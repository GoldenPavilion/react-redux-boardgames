import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser';


const Login = ({ loginReducer, updateLoginForm, login }) => {
    
    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedData = {
            ...loginReducer,
            [name]: value
        }
        updateLoginForm(updatedData)
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        login(loginReducer)
    }
    
    return(
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    className="username" 
                    type="text"
                    name="username"
                    value={loginReducer.username}
                    onChange={handleOnChange} 
                />
                <label>Password:</label>
                <input 
                    className="password"
                    type="password"
                    name="password"
                    value={loginReducer.password}
                    onChange={handleOnChange}
                />
                <button type="submit" value="Login">Login</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);
