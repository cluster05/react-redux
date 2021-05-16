import { INCREMENT, DECREMENT, INCREMENT_BY_10, DECREMENT_BY_10 } from '../action/index';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case INCREMENT_BY_10:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case DECREMENT_BY_10:
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