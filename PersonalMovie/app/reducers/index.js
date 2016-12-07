const reducers = (state={}, action) => {
    switch(action.type) {
        case 'FIND_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

export default reducers
