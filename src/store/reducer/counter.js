import * as actionType from '../action/counter';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case actionType.INCREMENT_BY_10:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case actionType.DECREMENT_BY_10:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;