import * as types from '../actions/types';


const initial = {

    isLoadingGetNearby: false,
    total: null,
    nearby: null,
    currentPage: 1,
    lastPage: 1,
    error: false
}
const nearbyReducer = (state = initial, action) => {
    switch (action.type) {

        // Get truck nearby action
        case types.MOUNT_NEARBY:
            return {
                ...state,
                nearby: null,
                currentPage: 1,
                lastPage: 1,
            }
        case types.REQUEST_GET_NEARBY:
            return {
                ...state,
                error: false,
                isLoadingGetNearby: action.isLoadingGetNearby
            };

        case types.GET_NEARBY_SUCCESS:
            return {
                ...state,
                isLoadingGetNearby: false,
                nearby: state.nearby !== null ? state.nearby.concat(action.response.data) : action.response.data,
                currentPage: action.response.current_page,
                lastPage: action.response.last_page,
            }
        case types.GET_NEARBY_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetNearby: false,
            };
        default:
            return state;
    }
};

export default nearbyReducer;
