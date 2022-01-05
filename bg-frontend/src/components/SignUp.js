import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';
import { submitSignUp } from '../actions/currentUser';


const SignUp = ({ newUserReducer, updateSignUpForm, submitSignUp }) => {

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
            newUserReducer.game_host = true
        } else {
            newUserReducer.game_host = false
        }
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        submitSignUp(newUserReducer)
    }

    return(
        <div className="sign-up">
            <form className="signup-form" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    className="username"
                    type="text"
                    name="username"
                    value={newUserReducer.username}
                    onChange={handleOnChange}
                />
                <br />
                <label>Password:</label>
                <input 
                    className="password"
                    type="password"
                    name="password"
                    value={newUserReducer.password}
                    onChange={handleOnChange}
                />
                <br />
                <label>Email:</label>
                <input 
                    className="email"
                    type="text"
                    name="email"
                    value={newUserReducer.email}
                    onChange={handleOnChange}
                />
                <br />
                <label>Location:</label>
                <input 
                    className="location"
                    type="text"
                    name="location"
                    value={newUserReducer.location}
                    onChange={handleOnChange}
                />
                <br />
                <label>Would You Like To Host?:</label>
                <input 
                    className="game_host" 
                    type="checkbox" 
                    name="game_host" 
                    onChange={handleCheck}
                />
                <br />
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

export default connect(mapStateToProps, { updateSignUpForm, submitSignUp })(SignUp);