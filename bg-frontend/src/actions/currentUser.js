export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
};

export const login = creds => {
    return dispatch => {
        console.log("Credentials:", creds)
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
        }
        )
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
    console.log("DISPATCHED");
    return dispatch => {
        return fetch("http://localhost:3000/api/get_current_user", {
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
        }
        )
        .catch(console.log)
    }
}