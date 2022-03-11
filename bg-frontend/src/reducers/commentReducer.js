const initState = {
    content: "",
}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_COMMENT_FORM":
            return action.formData
        case "RESET_COMMENT_FORM":
            return initState;
        default:
            return state;
    } 
}

export default commentReducer;