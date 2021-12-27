import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';


const SignUp = ({ newUserReducer, updateSignUpForm }) => {

    return(
        <div className="sign-up">
            <form className="signup-form">
                <label>Username:</label>
                <input 
                    className="username"
                    type="text"
                    name="username"
                />
                <label>Password:</label>
                <input 
                    className="password"
                    type="password"
                    name="password"
                />
                <label>Email:</label>
                <input 
                    className="email"
                    type="text"
                    name="email"
                />
                <label>Location:</label>
                <input 
                    className="location"
                    type="text"
                    name="location"
                />
                <label>Would You Like To Host?:</label>
                <select className="host" name="host">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
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