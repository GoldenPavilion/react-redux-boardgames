import React from 'react';
import { connect } from 'react-redux';

const Login = ({ username, password }) => {
    return(
        <div className="login">
            <form className="login-form">
                <label>Username:</label>
                <input
                    className="username" 
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleOnChange} 
                />
                <label>Password:</label>
                <input 
                    className="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleOnChange}
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

export default connect(mapStateToProps)(Login);
