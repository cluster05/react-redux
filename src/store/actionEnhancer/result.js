import * as actionType from '../action/result';

const saveValue = (counter) => {
    return {
        type: actionType.SAVE_RESULT,
        payload: {
            counter
        }
    }
}

const removeValue = (id) => {
    return {
        type: actionType.REMOVE_RESULT,
        payload: {
            id
        }
    }
}

const asyncSaveValue = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveValue(counter))
        }, 5000);
    }
}

const asyncRemoveValue = (id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(removeValue(id))
        }, 2000);
    }
}

export { asyncSaveValue, asyncRemoveValue }