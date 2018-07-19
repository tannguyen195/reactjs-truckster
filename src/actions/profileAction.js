import * as types from './types';

// Get user action
export function requestGetUser(isLoadingUser) {
    return {
        type: types.REQUEST_GET_USER,
        isLoadingUser: isLoadingUser
    };
}

export function getUserSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.GET_USER_SUCCESS,
            response
        });
    }
}

export function getUserError(error) {
    return {
        type: types.GET_USER_ERROR,
        error
    };
}

// Update user information action
export function requestUpdateProfile(isLoadingUpdateProfile) {
    return {
        type: types.REQUEST_UPDATE_PROFILE,
        isLoadingUpdateProfile: isLoadingUpdateProfile
    };
}

export function updateProfileSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_PROFILE_SUCCESS,
            response
        });
    }
}

export function updateProfileError(response) {
    return (dispatch) => {
        dispatch({
            type: types.UPDATE_PROFILE_ERROR,
            response
        });
    }
}

// Change password 
export function requestChangePassword(isLoadingChangePassword) {
    return {
        type: types.REQUEST_CHANGE_PASSWORD,
        isLoadingChangePassword: isLoadingChangePassword
    };
}

export function changePasswordSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_PASSWORD_SUCCESS,
            response
        });
    }
}

export function changePasswordError(response) {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_PASSWORD_ERROR,
            response
        });
    }
}

