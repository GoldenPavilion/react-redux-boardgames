import React from 'react';
import { connect } from 'react-redux';
import { updateSignUpForm } from '../actions/signUpForm';
import { submitSignUp } from '../actions/currentUser';
import { useNavigate } from 'react-router-dom';


const SignUp = ({ newUserReducer, updateSignUpForm, submitSignUp }) => {
    const navigate = useNavigate();
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
        submitSignUp(newUserReducer, navigate)
    }

    return(
        <div className="sign-up">
            <br />
            <form className="signup-form" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Username:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="username"
                        value={newUserReducer.username}
                        onChange={handleOnChange}
                    />
                </div>
                <br />
                <div class="form-group">
                    <label>Password:</label>
                    <input 
                        className="form-control"
                        type="password"
                        name="password"
                        value={newUserReducer.password}
                        onChange={handleOnChange}
                    />
                </div>
                <br />
                <div class="form-group">
                    <label>Email:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="email"
                        value={newUserReducer.email}
                        onChange={handleOnChange}
                    />
                </div>
                <br />
                <div class="form-group">
                    <label>Location:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="location"
                        value={newUserReducer.location}
                        onChange={handleOnChange}
                    />
                </div>
                <br />
                <div class="form-check">
                    <label>Would You Like To Host? </label>
                    <br/>
                    <input 
                        className="from-check-input" 
                        type="checkbox" 
                        name="game_host" 
                        onChange={handleCheck}
                    /> Yes, please. 
                </div>
                <br />
                <button 
                    type="submit" 
                    value="Sign Up"
                    class="btn btn-secondary"
                >Sign Up</button>
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