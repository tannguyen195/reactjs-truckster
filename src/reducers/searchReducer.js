import * as types from '../actions/types';
import update from 'immutability-helper'

const initial = {
    searchResult: [],
    isLoadingSearch: false,
    step: 1,
    error: null,
    message: "",
    param: ""
}
const searchReducer = (state = initial, action) => {
    switch (action.type) {

        case types.REQUEST_SEARCH:
            return update(state, {
                isLoadingSearch: { $set: true }
            })

        case types.SEARCH_SUCCESS:
            return update(state, {
                isLoadingSearch: { $set: false },
                error: { $set: false },

                searchResult: { $set: action.response.data }

            })
        case types.SEARCH_ERROR:
            return update(state, {
                isLoadingSearch: { $set: false },
                error: { $set: true },
            })
        case types.ON_PARAM_CHANGE:
            return update(state, {
                param: { $set: action.param },
            })
        default:
            return state;
    }
};

export default searchReducer