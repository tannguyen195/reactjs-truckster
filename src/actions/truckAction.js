import * as types from './types';


//Search truck action
export function requestSearchTruck(isLoadingSearchTruck) {
    return {
        type: types.REQUEST_SEARCH_TRUCK,
        isLoadingSearchTruck: isLoadingSearchTruck
    };
}

export function searchTruckSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_TRUCK_SUCCESS,
            response
        });
    }
}

export function searchTruckError(response) {
    return (dispatch) => {
        dispatch({
            type: types.SEARCH_TRUCK_ERROR,
            response
        });
    }
}

// Get truck detail action 
export function requestGetTruckDetail(isLoadingGetTruckDetail) {
    return {
        type: types.REQUEST_GET_TRUCK_DETAIL,
        isLoadingGetTruckDetail: isLoadingGetTruckDetail
    };
}

export function getTruckDetailSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_TRUCK_DETAIL_SUCCESS,
            response
        });
    }
}

export function getTruckDetailError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_TRUCK_DETAIL_ERROR,
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

export function getTruckMenuSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_TRUCK_MENU_SUCCESS,
            response
        });
    }
}

export function getTruckMenuError(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_TRUCK_MENU_ERROR,
            response
        });
    }
}



export function mountTruck() {
    return (dispatch) => {
        dispatch({
            type: types.MOUNT_TRUCK,
        });
    }
}

export function requestGetSuggestTruck(isLoadingGetSuggestTruck) {
    return (dispatch) => {
        dispatch({
            type: types.REQUEST_GET_SUGGEST_TRUCK,
            isLoadingGetSuggestTruck: isLoadingGetSuggestTruck
        })
    }
}
export function getSuggestTruckSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_SUGGEST_TRUCK_SUCCESS,
            response
        })
    }
}
export function getSuggestTruckError() {
    return (dispatch) => {
        dispatch({
            type: types.GET_SUGGEST_TRUCK_ERROR
        })
    }
}

export function requestGetRecommendTruck(isLoadingGetRecommendTruck) {
    return (dispatch) => {
        dispatch({
            type: types.REQUEST_GET_RECOMMEND_TRUCK,
            isLoadingGetRecommendTruck: isLoadingGetRecommendTruck
        })
    }
}
export function getRecommendTruckSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_RECOMMEND_TRUCK_SUCCESS,
            response
        })
    }
}

export function getRecommendTruckError() {
    return (dispatch) => {
        dispatch({
            type: types.GET_RECOMMEND_TRUCK_ERROR
        })
    }
}

export function requestGetCuisineList(isLoadingGetCuisineList) {
    return (dispatch) => {
        dispatch({
            type: types.REQUEST_GET_CUISINE_LIST,
            isLoadingGetCuisineList: isLoadingGetCuisineList
        })
    }
}
export function getCuisineListSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_CUISINE_LIST_SUCCESS,
            response
        })
    }
}
export function getCuisineListError() {
    return (dispatch) => {
        dispatch({
            type: types.GET_CUISINE_LIST_ERROR
        })
    }
}

export function requestGetAlbumDetail(isLoadingGetAlbumDetail) {
    return (dispatch) => {
        dispatch({
            type: types.REQUEST_GET_ALBUM_DETAIL,
            isLoadingGetAlbumDetail: isLoadingGetAlbumDetail
        })
    }
}
export function getAlbumDetailSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_ALBUM_DETAIL_SUCCESS,
            response
        })
    }
}
export function getAlbumDetailError() {
    return (dispatch) => {
        dispatch({
            type: types.GET_ALBUM_DETAIL_ERROR
        })
    }
}