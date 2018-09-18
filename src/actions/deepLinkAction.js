import * as types from './types';


// Deep link action
export function changeRoute(params) {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_ROUTE,
            params
        });


    }
}

export function toggleDeepLink() {
    return (dispatch) => {
        dispatch({
            type: types.TOGGLE_DEEP_LINK,
        });
    }
}
