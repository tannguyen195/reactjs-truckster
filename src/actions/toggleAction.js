import * as types from './types';


export function toggleSignInModal() {
    return {
        type: types.TOGGLE_SIGN_IN_MODAL
    }
}

export function toggleSignUpModal() {
    return {
        type: types.TOGGLE_SIGN_UP_MODAL
    }
}


export function toggleForgotModal() {
    return {
        type: types.TOGGLE_FORGOT_MODAL
    }
}

export function toggleErrorSignInPopOver() {
    return {
        type: types.TOGGLE_ERROR_SIGN_IN_POP_OVER
    }
}
export function toggleErrorSignUpPopOver() {
    return {
        type: types.TOGGLE_ERROR_SIGN_UP_POP_OVER
    }
}


export function toggleAnnounceModal() {
    return {
        type: types.TOGGLE_ANNOUNCE_MODAL
    }
}


export function toggleShareModal() {
    return (dispatch) => {
        dispatch({
            type: types.TOGGLE_SHARE_MODAL,

        });
    }
}