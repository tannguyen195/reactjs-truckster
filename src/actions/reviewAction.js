import * as types from './types';

export function requestGetTruckReview(isLoadingGetTruckReview) {
    return {
        type: types.REQUEST_GET_TRUCK_REVIEW,
        isLoadingGetTruckReview: isLoadingGetTruckReview
    };
}

export function getTruckReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_TRUCK_REVIEW_SUCCESS,
            response
        });
    }
}

export function getTruckReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_TRUCK_REVIEW_ERROR,
            response
        });
    }
}

// User post review action
export function requestPostReview(isLoadingPostReview) {
    return {
        type: types.REQUEST_POST_REVIEW,
        isLoadingPostReview: isLoadingPostReview
    };
}

export function postReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.POST_REVIEW_SUCCESS,
            response
        });
    }
}

export function postReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.POST_REVIEW_ERROR,
            response
        });
    }
}

// User edit review action
export function requestEditReview(isLoadingEditReview) {
    return {
        type: types.REQUEST_EDIT_REVIEW,
        isLoadingEditReview: isLoadingEditReview
    };
}

export function editReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_REVIEW_SUCCESS,
            response
        });
    }
}

export function editReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_REVIEW_ERROR,
            response
        });
    }
}



// Get user review
export function requestGetUserReview(isLoadingGetUserReview) {
    return {
        type: types.REQUEST_GET_USER_REVIEW,
        isLoadingGetUserReview: isLoadingGetUserReview
    };
}

export function getUserReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_REVIEW_SUCCESS,
            response
        });
    }
}

export function getUserReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_REVIEW_ERROR,
            response
        });
    }
}

// Mark favorite action

export function requestMarkFavorite(isLoadingMarkFavorite) {
    return {
        type: types.REQUEST_MARK_FAVORITE,
        isLoadingMarkFavorite: isLoadingMarkFavorite
    };
}

export function markFavoriteSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.MARK_FAVORITE_SUCCESS,
            response
        });
    }
}

export function markFavoriteError(response) {
    return (dispatch) => {
        dispatch({
            type: types.MARK_FAVORITE_ERROR,
            response
        });
    }
}

// Unmark favorite 
export function requestUnmarkFavorite(isLoadingUnmarkFavorite) {
    return {
        type: types.REQUEST_UNMARK_FAVORITE,
        isLoadingUnmarkFavorite: isLoadingUnmarkFavorite
    };
}

export function unmarkFavoriteSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.UNMARK_FAVORITE_SUCCESS,
            response
        });
    }
}

export function unmarkFavoriteError(response) {
    return (dispatch) => {
        dispatch({
            type: types.UNMARK_FAVORITE_ERROR,
            response
        });
    }
}

// Get user favorite 
export function requestGetUserFavorite(isLoadingGetUserFavorite) {
    return {
        type: types.REQUEST_GET_USER_FAVORITE,
        isLoadingGetUserFavorite: isLoadingGetUserFavorite
    };
}

export function getUserFavoriteSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_FAVORITE_SUCCESS,
            response
        });
    }
}

export function getUserFavoriteError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_FAVORITE_ERROR,
            response
        });
    }
}

// Brewery review action
export function requestGetBreweryReview(isLoadingGetBreweryReview) {
    return {
        type: types.REQUEST_GET_BREWERY_REVIEW,
        isLoadingGetBreweryReview
    };
}

export function getBreweryReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_BREWERY_REVIEW_SUCCESS,
            response
        });
    }
}

export function getBreweryReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_BREWERY_REVIEW_ERROR,
            response
        });
    }
}

// User post brewery review 
export function requestPostBreweryReview(isLoadingPostBreweryReview) {
    return {
        type: types.REQUEST_POST_BREWERY_REVIEW,
        isLoadingPostBreweryReview
    };
}

export function postBreweryReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.POST_BREWERY_REVIEW_SUCCESS,
            response
        });
    }
}

export function postBreweryReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.POST_BREWERY_REVIEW_ERROR,
            response
        });
    }
}

// User edit review action
export function requestEditBreweryReview(isLoadingEditBreweryReview) {
    return {
        type: types.REQUEST_EDIT_BREWERY_REVIEW,
        isLoadingEditBreweryReview
    };
}

export function editBreweryReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_BREWERY_REVIEW_SUCCESS,
            response
        });
    }
}

export function editBreweryReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_BREWERY_REVIEW_ERROR,
            response
        });
    }
}



// Get brewery user review
export function requestGetUserBreweryReview(isLoadingGetUserBreweryReview) {
    return {
        type: types.REQUEST_GET_USER_REVIEW,
        isLoadingGetUserBreweryReview
    };
}

export function getUserBreweryReviewSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_BREWERY_REVIEW_SUCCESS,
            response
        });
    }
}

export function getUserBreweryReviewError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_BREWERY_REVIEW_ERROR,
            response
        });
    }
}



//Mark favorite brewry action

export function requestMarkFavoriteBrewery(isLoadingMarkFavoriteBrewery) {
    return {
        type: types.REQUEST_MARK_FAVORITE_BREWERY,
        isLoadingMarkFavoriteBrewery: isLoadingMarkFavoriteBrewery
    };
}

export function markFavoriteBrewerySuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.MARK_FAVORITE_BREWERY_SUCCESS,
            response
        });
    }
}

export function markFavoriteBreweryError(response) {
    return (dispatch) => {
        dispatch({
            type: types.MARK_FAVORITE_BREWERY_ERROR,
            response
        });
    }
}

// Unmark favorite 
export function requestUnmarkFavoriteBrewery(isLoadingUnmarkFavoriteBrewery) {
    return {
        type: types.REQUEST_UNMARK_FAVORITE_BREWERY,
        isLoadingUnmarkFavoriteBrewery: isLoadingUnmarkFavoriteBrewery
    };
}

export function unmarkFavoriteBrewerySuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.UNMARK_FAVORITE_BREWERY_SUCCESS,
            response
        });
    }
}

export function unmarkFavoriteBreweryError(response) {
    return (dispatch) => {
        dispatch({
            type: types.UNMARK_FAVORITE_BREWERY_ERROR,
            response
        });
    }
}

// Get user favorite 
export function requestGetUserFavoriteBrewery(isLoadingGetUserFavoriteBrewery) {
    return {
        type: types.REQUEST_GET_USER_FAVORITE_BREWERY,
        isLoadingGetUserFavoriteBrewery: isLoadingGetUserFavoriteBrewery
    };
}

export function getUserFavoriteBrewerySuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_FAVORITE_BREWERY_SUCCESS,
            response
        });
    }
}

export function getUserFavoriteBreweryError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_FAVORITE_BREWERY_ERROR,
            response
        });
    }
}