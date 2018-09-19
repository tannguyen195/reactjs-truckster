import * as types from '../actions/types';


const initial = {

    params: null,
    visibleDeepLink: true
}
const deepLinkReducer = (state = initial, action) => {
    switch (action.type) {
        case types.CHANGE_ROUTE:
            return {
                ...state,
                params: action.params
            }
        case types.TOGGLE_DEEP_LINK:
            return {
                ...state,
                visibleDeepLink: !state.visibleDeepLink
            }
        default:
            return state;
    }
};

export default deepLinkReducer;
