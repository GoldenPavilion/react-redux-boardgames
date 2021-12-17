import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    
}

export default Login;
