import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';


const SignUp = ({ newUserReducer, updateSignUpForm }) => {

    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedData = {
            ...newUserReducer, 
            [name]: value
        }
        updateSignUpForm(updatedData)
    }
    

    const handleCheck = event => {
        if (event.target.checked){
            newUserReducer.host = true
        } else {
            newUserReducer.host = false
        }
    }

    return(
        <div className="sign-up">
            <form className="signup-form">
                <label>Username:</label>
                <input 
                    className="username"
                    type="text"
                    name="username"
                    value={newUserReducer.username}
                    onChange={handleOnChange}
                />
                <label>Password:</label>
                <input 
                    className="password"
                    type="password"
                    name="password"
                    value={newUserReducer.password}
                    onChange={handleOnChange}
                />
                <label>Email:</label>
                <input 
                    className="email"
                    type="text"
                    name="email"
                    value={newUserReducer.email}
                    onChange={handleOnChange}
                />
                <label>Location:</label>
                <input 
                    className="location"
                    type="text"
                    name="location"
                    value={newUserReducer.location}
                    onChange={handleOnChange}
                />
                <label>Would You Like To Host?:</label>
                <input 
                    className="host" 
                    type="checkbox" 
                    name="host" 
                    onChange={handleCheck}
                />
                <button type="submit" value="Sign Up">Sign Up</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newUserReducer: state.newUserReducer
    }
}

export default connect(mapStateToProps, { updateSignUpForm })(SignUp);