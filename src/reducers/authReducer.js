import * as types from '../actions/types';


const initial = {
    userData: null,
    token: null,
    isLoadingLogOut: false,
    isLoggedIn: false,
    isLoadingSignUp: false,
    isLoadingSignIn: false,
    message: "",
    messageSignIn: null,
    messageSignUp: null,
    statusSignIn: null,
    statusSignUp: null,
    isLoadingLoginSocial: null
}
const authReducer = (state = initial, action) => {
    switch (action.type) {

        case types.REQUEST_SIGN_UP:
            return {
                ...state,
                isLoadingSignUp: action.isLoadingSignUp
            };

        case types.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoadingSignUp: false,
                userData: action.response,
            }
        case types.SIGN_UP_ERROR:

            let messageSignUp = null
            switch (action.response.status) {

                case 422: {
                    messageSignUp = action.response.responseJSON.errors.password;
                    break;
                }
                case 404: {
                    messageSignUp = action.response.responseJSON.errors.email;
                    break;
                }
                default: { messageSignUp = ["Something went wrong!"] }
            }

            return {
                ...state,
                isLoadingSignUp: false,
                messageSignUp: messageSignUp,
                statusSignUp: action.response.status
            };

        case types.REQUEST_SIGN_IN:
            return {
                ...state,
                isLoadingSignIn: action.isLoadingSignIn
            };

        case types.SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoadingSignIn: false,
                token: action.response.token,
                isLoggedIn: true
            }

        case types.SIGN_IN_ERROR:

            let messageSignIn = null

            switch (action.response.status) {

                case 422: {
                    messageSignIn = action.response.responseJSON.errors.password;
                    break;
                }
                case 404: {
                    messageSignIn = ["The email address you've entered doesn't match any account"];
                    break;
                }
                default: { messageSignIn = ["Something went wrong!"] }
            }

            return {
                ...state,
                isLoadingSignIn: false,
                messageSignIn: messageSignIn,
                statusSignIn: action.response.status
            };

        case types.REQUEST_LOGIN_SOCIAL:
            return {
                ...state,
                isLoadingSignIn: action.isLoadingLoginSocial
            };

        case types.LOGIN_SOCIAL_SUCCESS:
            return {
                ...state,
                isLoadingSignIn: false,
            }
        case types.LOGIN_SOCIAL_ERROR:
            return {
                ...state,
                isLoadingSignIn: false,
                message: 'Something went wrong'
            };

        case types.REQUEST_LOG_OUT:
            return {
                ...state,
                error: null,
                isLoadingLogOut: action.isLoadingLogOut
            };

        case types.LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoadingLogOut: false,
            }
        case types.LOG_OUT_ERROR:
            return {
                isLoadingLogOut: false,
                message: 'Something went wrong'
            };


        default:
            return state;
    }
};

export default authReducer;
