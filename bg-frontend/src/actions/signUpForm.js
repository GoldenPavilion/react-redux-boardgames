export const updateSignUpForm = formData => {
    return {
        type: 'UPDATE_SIGNUP_FORM',
        formData
    }
}

export const submitForm = formData => {
    return dispatch => {
        return fetch("http://localhost:3001/api/signup", {
            credentials: "include",    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(user => console.log(user))
    }
}