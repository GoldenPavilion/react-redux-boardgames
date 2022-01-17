const initState = {
    value: ""
}

const searchReducer = (state = initState, action) => {
    debugger
    switch(action.type){
        case "UPDATE_SEARCH_FORM":
            return action.searchData
        case "RESET_SEARCH_FORM":
            return initState;
        default:
            return state;
    }
}

export default searchReducer;