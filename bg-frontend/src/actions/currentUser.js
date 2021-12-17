export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user: user
    };
};

export const login = creds => {
    return dispatch => {
        return fetch("http://localhost:3000/sessions")
        .then(resp => resp.json())
        .then(user => console.log(user))
    }
}