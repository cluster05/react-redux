import * as actionType from '../action/result';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SAVE_RESULT:
            const id = Math.floor(Math.random() * 1E10);
            return {
                ...state,
                results: state.results.concat({ id, value: action.payload.counter })
            }
        case actionType.REMOVE_RESULT:
            const updatedResult = state.results.filter(result => result.id !== action.payload.id);
            return {
                ...state,
                results: updatedResult
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;