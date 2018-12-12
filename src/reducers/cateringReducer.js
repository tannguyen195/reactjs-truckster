import * as types from '../actions/types';
import update from 'immutability-helper'

const initial = {
    cateringData: {

    },
    isLoadingCatering: false,
    step: 1,
    error: null,
    message: "",
    status: 200
}
const cateringReducer = (state = initial, action) => {
    switch (action.type) {
        case types.NEXT_STEP:

            return update(state, {
                step: { $set: state.step + 1 },
                cateringData: { $merge: { ...action.payload } }
            })
        case types.PREVIOUS_STEP:
            return update(state, {
                step: { $set: state.step - 1 }
            })

        case types.REQUEST_CATERING:
            return update(state, {
                isLoadingCatering: { $set: true }
            })

        case types.CATERING_SUCCESS:
            return update(state, {
                isLoadingCatering: { $set: false },
                error: { $set: false },
                status: { $set: 200 }

            })
        case types.CATERING_ERROR:
            return update(state, {
                isLoadingCatering: { $set: false },
                error: { $set: true },
            })
        default:
            return state;
    }
};

export default cateringReducer