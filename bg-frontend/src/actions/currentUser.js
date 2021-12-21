export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    };
};

export const login = creds => {
    return dispatch => {
        console.log(creds)
        return fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
    }
}