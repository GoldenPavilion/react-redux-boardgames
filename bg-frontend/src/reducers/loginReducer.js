const initState = {
    username: "",
    password: ""
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.user
        default:
            return state;
    }
}

export default loginReducer;