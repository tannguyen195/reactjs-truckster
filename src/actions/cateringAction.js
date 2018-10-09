import * as types from './types';


export function nextStep(payload) {
    return (dispatch) => {
        dispatch({
            type: types.NEXT_STEP,
            payload
        });
    }
}
export function previousStep() {
    return (dispatch) => {
        dispatch({
            type: types.PREVIOUS_STEP,
        });


    }
}
