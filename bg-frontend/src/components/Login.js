import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginReducer, updateLoginForm, login }) => {
    const navigate = useNavigate();
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
        login(loginReducer, navigate)
    }
    
    return(
        <div className="login">
            <br />
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        className="form-control" 
                        type="text"
                        name="username"
                        value={loginReducer.username}
                        onChange={handleOnChange} 
                    />
                </div>
                <br />
                <div className="form-group">
                <label>Password: </label>
                    <input 
                        className="form-control"
                        type="password"
                        name="password"
                        value={loginReducer.password}
                        onChange={handleOnChange}
                    />
                </div>
                <br />
                <button 
                    type="submit"
                    className="btn btn-secondary" 
                    value="Login"
                >Login</button>
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
