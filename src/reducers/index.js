
import { combineReducers } from 'redux';
import profileReducer from './profileReducer'
import toggleReducer from './toggleReducer'
import authReducer from './authReducer'
import truckReducer from './truckReducer'
import reviewReducer from './reviewReducer'
import activityReducer from './activityReducer'
import breweryReducer from './breweryReducer'
import pairingReducer from './pairingReducer'
import nearbyReducer from './nearbyReducer'
import deepLinkReducer from './deepLinkReducer'
import cateringReducer from './cateringReducer'

import searchReducer from './searchReducer'
const rootReducer = combineReducers({
    profileReducer,
    toggleReducer,
    authReducer,
    truckReducer,
    activityReducer,
    reviewReducer,
    breweryReducer,
    pairingReducer,
    nearbyReducer,
    deepLinkReducer,
    cateringReducer,
    searchReducer
});

export default rootReducer;
