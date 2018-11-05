import * as types from './types';




export function requestSearch(isLoadingSearch) {
    return {
        type: types.REQUEST_SEARCH,
        isLoadingSearch: isLoadingSearch
    };
}

export function searchSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_SUCCESS,
            response
        });
    }
}

export function searchError(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_ERROR,
            response
        });
    }
}
export function onParamChange(param) {
    return (dispatch) => {
        dispatch({
            type: types.ON_PARAM_CHANGE,
            param
        });
    }
}
