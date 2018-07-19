import * as types from '../actions/types';


const initial = {
    visibleSignIn: false,
    visibleSignUp: false,
    visibleForgot: false,
    visibleAnnounce: false,
    visibleShare: false,
    visibleErrorSignInPopOver: false,
    visibleErrorSignUpPopOver: false,
    url: "https://gotruckster.com/",
    openError: false,
    error: false,
    statusText: ""
}
const toggleReducer = (state = initial, action) => {
    switch (action.type) {

        case types.TOGGLE_ERROR_MODAL:
            return {
                openError: !state.openError,
                statusText: action.statusText,
                error: true
            };
        case types.TOGGLE_SIGN_IN_MODAL:

            return {
                visibleErrorSignUpPopOver: false,
                visibleErrorSignInPopOver: !state.visibleSignIn,
                visibleSignIn: !state.visibleSignIn
            };
        case types.TOGGLE_SIGN_UP_MODAL:
            return {
                visibleErrorSignUpPopOver: !state.visibleSignUp,
                visibleErrorSignInPopOver: false,
                visibleSignUp: !state.visibleSignUp
            };
        case types.TOGGLE_FORGOT_MODAL:
            return {
                visibleForgot: !state.visibleForgot
            };
        case types.TOGGLE_ERROR_SIGN_IN_POP_OVER:
            return {
                visibleSignIn: true,
                visibleErrorSignInPopOver: true
            };
        case types.TOGGLE_ERROR_SIGN_UP_POP_OVER:
            return {
                visibleSignUp: true,
                visibleErrorSignUpPopOver: true
            };
        case types.TOGGLE_ANNOUNCE_MODAL:
            return {
                visibleAnnounce: !state.visibleAnnounce
            };
        case types.TOGGLE_SHARE_MODAL:
            return {
                url: action.url,
                visibleShare: !state.visibleShare
            };
        default:
            return state;
    }
};

export default toggleReducer;
