import * as actionType from '../action/counter';


const increment = () => {
    return {
        type: actionType.INCREMENT,
        payload: {
            value: 1
        }
    }
}
const decrement = () => {
    return {
        type: actionType.DECREMENT,
        payload: {
            value: -1
        }
    }
}
const incrementBy10 = () => {
    return {
        type: actionType.INCREMENT_BY_10,
        payload: {
            value: 10
        }
    }
}
const decrementBy10 = () => {
    return {
        type: actionType.DECREMENT_BY_10,
        payload: {
            value: -10
        }
    }
}

export { increment, decrement, incrementBy10, decrementBy10 };