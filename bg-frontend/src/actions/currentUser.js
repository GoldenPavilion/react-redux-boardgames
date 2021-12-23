export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
};

export const login = creds => {
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
        .then(user => {
            if (user.error){
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

export const logout = () => {
    dispatch(clearCurrentUser)
    return dispatch => {
        return fetch("http://localhost:3001/api/logout", {
            credentials: "include",
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
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
        .then(user => {
            if (user.error){
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}