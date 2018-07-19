import * as types from './types';

// Get paring action
export function requestGetPairing(isLoadingGetPairing) {
    return {
        type: types.REQUEST_GET_PAIRING,
        isLoadingGetPairing: isLoadingGetPairing
    };
}

export function getPairingSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_PAIRING_SUCCESS,
            response
        });
    }
}

export function getPairingError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_PAIRING_ERROR,
            response
        });
    }
}

// Get truck menu
export function requestGetTruckMenu(isLoadingGetTruckMenu) {
    return {
        type: types.REQUEST_GET_TRUCK_MENU,
        isLoadingGetTruckMenu: isLoadingGetTruckMenu
    };
}


// Get pairing detail action 
export function requestGetPairingDetail(isLoadingGetPairingDetail) {
    return {
        type: types.REQUEST_GET_PAIRING_DETAIL,
        isLoadingGetPairingDetail: isLoadingGetPairingDetail
    };
}

export function getPairingDetailSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_PAIRING_DETAIL_SUCCESS,
            response
        });
    }
}

export function getPairingDetailError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_PAIRING_DETAIL_ERROR,
            response
        });
    }
}


export function mountPairing() {
    return (dispatch) => {
        dispatch({
            type: types.MOUNT_PAIRING,
        });
    }
}


