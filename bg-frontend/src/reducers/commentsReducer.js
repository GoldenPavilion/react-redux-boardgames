const commentsReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_COMMENTS":
            return action.comments
        case "RESET_COMMENTS":
            return null
        default:
            return state
    }
}

export default commentsReducer;