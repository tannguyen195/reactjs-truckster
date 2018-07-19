import * as types from './types';

// Search activity action
export function requestSearchActivity(isLoadingSearchActivity) {
    return {
        type: types.REQUEST_SEARCH_ACTIVITY,
        isLoadingSearchActivity: isLoadingSearchActivity
    };
}

export function searchActivitySuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_ACTIVITY_SUCCESS,
            response
        });
    }
}

export function searchActivityError(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_ACTIVITY_ERROR,
            response
        });
    }
}
        
// get activity detail
export function requestGetActivityDetail(isLoadingGetActivityDetail) {
    return {
        type: types.REQUEST_GET_ACTIVITY_DETAIL,
        isLoadingGetActivityDetail: isLoadingGetActivityDetail
    };
}

export function getActivityDetailSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_ACTIVITY_DETAIL_SUCCESS,
            response
        });
    }
}

export function getActivityDetailError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_ACTIVITY_DETAIL_ERROR,
            response
        });
    }
}
        