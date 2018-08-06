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

export function getSearchResult(response) {

    return (dispatch) => {

        dispatch({
            type: types.GET_SEARCH_RESULT,
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