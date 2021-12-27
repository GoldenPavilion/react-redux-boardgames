const initState = {
    username: "",
    password: "",
    email: "",
    location: "",
    host: ""
}

const newUserReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        default:
            return state;
    }
}

export default newUserReducer;