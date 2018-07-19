import * as types from '../actions/types';


const initial = {
    isLoadingUser: false,
    isLoadingUpdateProfile: false,
    userData: null,

}
const profileReducer = (state = initial, action) => {
    switch (action.type) {


        case types.REQUEST_GET_USER:
            return {
                isLoadingUser: action.isLoadingUser
            };

        case types.GET_USER_SUCCESS:

            return {
                ...state,
                isLoadingUser: false,
                userData: action.response,
            }
        case types.GET_USER_ERROR:
            return {
                isLoadingUser: false,
                message: 'Something went wrong'
            };
        case types.REQUEST_UPDATE_PROFILE:
            return {
                ...state,
                error: null,
                isLoadingUpdateProfile: action.isLoadingUpdateProfile
            };

        case types.UPDATE_PROFILE_SUCCESS:

            return {
                ...state,
                isLoadingUpdateProfile: false,
                userData: { ...action.response.user, gender: parseInt(action.response.user.gender, 10) },
            }
        case types.UPDATE_PROFILE_ERROR:
            return {
                ...state,
                isLoadingUpdateProfile: false,
                message: 'Something went wrong'
            };

        case types.REQUEST_CHANGE_PASSWORD:
            return {
                ...state,
                isLoadingChangePassword: action.isLoadingChangePassword
            };

        case types.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoadingChangePassword: false,

            }
        case types.CHANGE_PASSWORD_ERROR:
            return {
                ...state,
                isLoadingChangePassword: false,
                message: 'Something went wrong'
            };

        default:
            return state;
    }
};

export default profileReducer;
