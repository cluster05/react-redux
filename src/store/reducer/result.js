import { SAVE_RESULT, REMOVE_RESULT } from '../action/index';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_RESULT:
            const id = Math.floor(Math.random() * 1E10);
            return {
                ...state,
                results: state.results.concat({ id, value: action.payload.counter })
            }
        case REMOVE_RESULT:
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