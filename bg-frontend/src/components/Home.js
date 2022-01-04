import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h3>Welcome to BoardGameShelf!</h3>
            <p>Login or Signup to start your collection.</p>
            <Link to="/signup">Sign Up</Link> <Link to="/login">Login</Link>
        </div>
    )
}

export default Home;