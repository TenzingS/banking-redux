const reducer = (state = 0, action) => {  //initial state and action 
    switch (action.type) {
        case "deposit":
            return state + action.payload;  //deposit so we add
        case "withdraw":
            return state - action.payload;  //withdraw so we subtract
        default:
            return state //if action provided doesn't make sense or exist
    }
};

export default reducer;