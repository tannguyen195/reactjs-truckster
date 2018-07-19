import * as types from './types';


// Get truck nearby action 
export function mountNearby() {
    return (dispatch) => {
        dispatch({
            type: types.MOUNT_NEARBY,
        });
    }
}

export function requestGetNearby(isLoadingGetNearby) {
    return {
        type: types.REQUEST_GET_NEARBY,
        isLoadingGetNearby: isLoadingGetNearby
    };
}

export function getNearbySuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_NEARBY_SUCCESS,
            response
        });
    }
}

export function getNearbyError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_NEARBY_ERROR,
            response
        });
    }
}

