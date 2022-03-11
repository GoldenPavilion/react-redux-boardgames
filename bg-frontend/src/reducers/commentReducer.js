const initState = {
    content: "",
}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_COMMENT_FORM":
            return action.formData
        default:
            return state;
    } 
}

export default commentReducer;