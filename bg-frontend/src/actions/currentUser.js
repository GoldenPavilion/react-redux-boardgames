export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
};

export const login = creds => {
    return dispatch => {
        console.log("Credentials:", creds)
        return fetch("http://localhost:3000/api/login", {
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
        }
        )
        .catch(console.log)
    }
}

export const getCurrentUser = creds => {
    return dispatch => {
        return fetch("http://localhost:3000/api/login", {
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
        }
        )
        .catch(console.log)
    }
}