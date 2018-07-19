import * as types from './types';

export function requestSearchBrewery(isLoadingSearchBrewery) {
    return {
        type: types.REQUEST_SEARCH_BREWERY,
        isLoadingSearchBrewery: isLoadingSearchBrewery
    };
}

export function searchBrewerySuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_BREWERY_SUCCESS,
            response
        });
    }
}

export function searchBreweryError(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_BREWERY_ERROR,
            response
        });
    }
}
        
// Get brewery detail action 
export function requestGetBreweryDetail(isLoadingGetBreweryDetail) {
    return {
        type: types.REQUEST_GET_BREWERY_DETAIL,
        isLoadingGetBreweryDetail: isLoadingGetBreweryDetail
    };
}

export function getBreweryDetailSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_BREWERY_DETAIL_SUCCESS,
            response
        });
    }
}

export function getBreweryDetailError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_BREWERY_DETAIL_ERROR,
            response
        });
    }
}
export function mountBrewery() {
    return (dispatch) => {
        dispatch({
            type: types.MOUNT_BREWERY,
        });
    }
}
        
