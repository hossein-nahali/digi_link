function AppReducer(prevState, action) {

    switch (action.type) {
        case 'SET_URL':
            return {
                url: action.url,
            }

        default:
            return prevState;
    }
}

export default AppReducer;