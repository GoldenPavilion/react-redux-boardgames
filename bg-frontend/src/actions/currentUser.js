export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user: user
    };
};

export const login = creds => {
    debugger
    return dispatch => {
        return fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
    }
}