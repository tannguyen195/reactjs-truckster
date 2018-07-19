import * as types from './types';
import { Cookies } from 'react-cookie';
import { getUser } from '../api/profileApi'
const cookies = new Cookies();
// Sign up action
export function requestSignUp(isLoadingSignUp) {
    return {
        type: types.REQUEST_SIGN_UP,
        isLoadingSignUp: isLoadingSignUp
    };
}

export function signUpSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.SIGN_UP_SUCCESS,
            response
        });
    }
}

export function signUpError(response) {
    return (dispatch) => {
        dispatch({
            type: types.SIGN_UP_ERROR,
            response
        });
    }
}
// Login social action
export function requestLoginSocial(isLoadingLoginSocial) {
    return {
        type: types.REQUEST_LOGIN_SOCIAL,
        isLoadingLoginSocial: isLoadingLoginSocial
    };
}

export function loginSocialSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_SOCIAL_SUCCESS,
            response
        });
    }
}

export function loginSocialError(response) {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_SOCIAL_ERROR,
            response
        });
    }
}

// Sign In action
export function requestSignIn(isLoadingSignIn) {
    return {
        type: types.REQUEST_SIGN_IN,
        isLoadingSignIn: isLoadingSignIn
    };
}

export function signInSuccess(response) {
    return (dispatch) => {
        dispatch({
            type: types.SIGN_IN_SUCCESS,
            response
        });
    }
}

export function signInError(response) {
    return (dispatch) => {
        dispatch({
            type: types.SIGN_IN_ERROR,
            response
        });
    }
}

//Check user login
export function checkLogin() {
    let token = cookies.get('token', { doNotParse: true })
    return (dispatch) => {

        if (token) {
            dispatch(signInSuccess({
                token: token
            }))
            dispatch(getUser())
        }
        else dispatch(signInError("error"))
    }
}

//Log out
export function requestLogOut(isLoadingLogOut) {
    return {
        type: types.REQUEST_LOG_OUT,
        isLoadingLogOut: isLoadingLogOut
    };
}

export function logOutSuccess() {
    return (dispatch) => {
        dispatch({
            type: types.LOG_OUT_SUCCESS,
        });
    }
}

export function logOutError(response) {
    return (dispatch) => {
        dispatch({
            type: types.LOG_OUT_ERROR,
            response
        });
    }
}

