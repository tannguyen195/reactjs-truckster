
import { combineReducers } from 'redux';
import profileReducer from './profileReducer'
import toggleReducer from './toggleReducer'
import authReducer from './authReducer'
import truckReducer from './truckReducer'
import reviewReducer  from './reviewReducer'
import activityReducer from './activityReducer'
import breweryReducer from './breweryReducer'
import pairingReducer from './pairingReducer'
import nearbyReducer from './nearbyReducer'
const rootReducer = combineReducers({
    profileReducer,
    toggleReducer,
    authReducer,
    truckReducer,
    activityReducer,
    reviewReducer,
    breweryReducer,
    pairingReducer,
    nearbyReducer
});

export default rootReducer;