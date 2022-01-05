import { resetLoginForm } from './loginForm';
import { resetSignUpForm } from './signUpForm';
import { getGameShelf } from './gameShelf';
import { resetGameShelf } from './gameShelf';
import { Navigate, useNavigate } from 'react-router-dom';

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
};

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

export const login = (creds, navigate) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/login", {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetLoginForm())
                dispatch(getGameShelf())
                navigate('/')
            }
        })
        .catch(console.log)
    }
}

export const submitSignUp = formData => {
    return dispatch => {
        const userData = {
            user: formData
        }
        return fetch("http://localhost:3001/api/signup", {
            credentials: "include",    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetSignUpForm())
                dispatch(getGameShelf())
            }
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(resetGameShelf())
        return fetch("http://localhost:3001/api/logout", {
            credentials: "include",
            method: "DELETE", 
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/get_current_user", {
            credentials: "include", 
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
            }
        })
        .catch(console.log)
    }
}