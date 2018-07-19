
import * as types from '../actions/types';
const initial = {
    status: null,
    error: false,
    isLoadingGetPairing: false,
    pairings: [],
    isLoadingGetPairingDetail: false,
    pairingDetail: null,
    currentPage: 1,
    lastPage: 1
}
const pairingReducer = (state = initial, action) => {
    switch (action.type) {
        // Get paring action
        case types.REQUEST_GET_PAIRING:
            return {
                ...state,
                status: null,
                error: false,
                isLoadingGetPairing: action.isLoadingGetPairing
            };

        case types.GET_PAIRING_SUCCESS:
            return {
                ...state,
                isLoadingGetPairing: false,
                pairings: state.pairings.concat(action.response.data),
                currentPage: action.response.current_page,
                lastPage: action.response.last_page,
            }
        case types.GET_PAIRING_ERROR:
            return {
                ...state,
                isLoadingGetPairing: false,
                status: action.response.status,
                message: action.response.statusText
            };

        // Get pairing detail reducer 
        case types.REQUEST_GET_PAIRING_DETAIL:
            return {
                ...state,
                error: false,
                pairing: null,
                isLoadingGetPairingDetail: action.isLoadingGetPairingDetail
            };

        case types.GET_PAIRING_DETAIL_SUCCESS:
            return {
                ...state,
                error: false,
                isLoadingGetPairingDetail: false,
                pairingDetail: action.response,
            }
        case types.GET_PAIRING_DETAIL_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetPairingDetail: false,
                status: action.response.status,
                message: action.response.statusText
            };
        case types.MOUNT_PAIRING:
            return {
                ...state,
                pairings: [],
                currentPage: 1,
                lastPage: 1,
            }
        default:
            return state;
    }
};

export default pairingReducer;
