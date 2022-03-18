const initState = {
    content: "",
    game_id: null, 
    user_id: null
}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_COMMENT_FORM":
            debugger
            return action.formData
        case "RESET_COMMENT_FORM":
            return initState;
        default:
            return state;
    } 
}

export default commentReducer;