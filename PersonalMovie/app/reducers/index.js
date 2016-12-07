const movie = (state={}, action) => {
    switch(action.type) {
        case 'FIND_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

export default movie
