const initState = {
    username: "",
    password: "",
    email: "",
    location: "",
    game_host: false
}

const newUserReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initState
        default:
            return state;
    }
}

export default newUserReducer;