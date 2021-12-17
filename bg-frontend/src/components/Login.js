import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
        return(
            <div className="login">
                <form className="login-form">
                    <label>Username:</label>
                    <input
                        className="username" 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleOnChange} 
                    />
                    <label>Password:</label>
                    <input 
                        className="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <button type="submit" value="Login">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
