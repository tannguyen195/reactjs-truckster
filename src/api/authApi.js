
import {
    requestSignUp, signUpError, signUpSuccess,
    requestSignIn, signInError, signInSuccess,
    requestLogOut, logOutSuccess, logOutError,
    requestLoginSocial, loginSocialError, loginSocialSuccess
} from '../actions/authAction.js'
import {
    toggleSignInModal,
    toggleErrorModal,
    toggleErrorSignInPopOver, toggleErrorSignUpPopOver
} from '../actions/toggleAction'
import { apiUrl } from 'config'
import $ from 'jquery'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

// Sign Up api
export const signUp = (data) => {
    return (dispatch) => {
        dispatch(requestSignUp(true))

        $.ajax({
            type: 'POST',
            url: apiUrl + 'api/register',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
            success: function (response, status, xhr) {
                dispatch(signUpSuccess(
                    response
                ));
                cookies.set('token', response.token, { path: '/' });

                window.location.replace("/")
            },
            error: function (error) {
                if (error.responseJSON.errors.email)
                    dispatch(signUpError({ ...error, status: 404 }))
                else dispatch(signUpError({ ...error, status: 422 }))
                dispatch(toggleErrorSignUpPopOver())
            }
        })
    }
}


// Sign In api
export const signIn = (data) => {
    return (dispatch) => {
        dispatch(requestSignIn(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + 'api/login',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
            success: function (response, status, xhr) {
                dispatch(toggleSignInModal())
                dispatch(signInSuccess(
                    response
                ));
                cookies.set('token', response.token, { path: '/' });
                window.location.replace("/")
            },
            error: function (error) {
                dispatch(signInError(error))
                dispatch(toggleErrorSignInPopOver())

            }
        })
    }
}

// Log out api
export const logOut = () => {
    return (dispatch) => {
        dispatch(requestLogOut(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/user/show',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {

                cookies.remove('token', { path: '/' })
                dispatch(logOutSuccess());
                window.location.replace("/")

            },
            error: function (error) {
                dispatch(logOutError(error))
                dispatch(toggleErrorModal(error))
            }
        })
    }
}

// Login social api
export const loginSocial = (data) => {
    return (dispatch) => {
        dispatch(requestLoginSocial(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + 'api/social-login/' + data.provider,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                token: data.token
            }),
            success: function (response, status, xhr) {
                cookies.set('token', response.token, { path: '/' });

                dispatch(loginSocialSuccess(
                    response
                ));
                window.location.replace("/")
            },
            error: function (error) {
                dispatch(loginSocialError(error))
            }
        })
    }
}

