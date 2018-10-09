import * as types from '../actions/types';
import update from 'immutability-helper'

const initial = {
    cateringData: {
       
    },
    step: 7
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
        default:
            return state;
    }
};

export default cateringReducer