import React from 'react';

const SignUp = () => {
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
                    type="text"
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
                    <option value="Yes">No</option>
                </select>
                <button type="submit" value="Sign Up">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;