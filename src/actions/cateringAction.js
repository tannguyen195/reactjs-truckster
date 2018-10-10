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

export function requestCatering(isLoadingCatering) {
    return {
        type: types.REQUEST_CATERING,
        isLoadingCatering: isLoadingCatering
    };
}

export function cateringSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.CATERING_SUCCESS,
            response
        });
    }
}

export function cateringError(response) {
    return (dispatch) => {
        dispatch({
            type: types.CATERING_ERROR,
            response
        });
    }
}

