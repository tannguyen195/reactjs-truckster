import * as types from '../actions/types';
import moment from 'moment'

import { getEventTime } from 'global'
const initial = {
    error: null,
    message: "",
    isLoadingSearchActivity: false,
    isLoadingGetActicityDetail: false,
    status: null,
    activity: null,
    activities: [],
    activitiesWeek: [],
    currentPage: null,
    lastPage: null
}
const activityReducer = (state = initial, action) => {
    switch (action.type) {
        // Get truck review reducer
        case types.REQUEST_SEARCH_ACTIVITY:
            return {
                ...state,
                error: false,
                isLoadingSearchActivity: action.isLoadingSearchActivity
            };

        case types.SEARCH_ACTIVITY_SUCCESS:

            if (action.response.isFeature) {
                let activitiesWeekState = []
                action.response.data.forEach(element => {
                    let timeTemp = ""

                    let events = getEventTime(element)

                    for (let i = 0; i < events.length; ++i) {

                        if (moment(events[i], "YYYY-MM-DD h:mm a").unix() > moment().unix()) {

                            timeTemp = events[i];

                            break;
                        }
                        else timeTemp = events[events.length - 1];
                    }
                    activitiesWeekState.push({
                        ...element,
                        timeDisplay: timeTemp
                    })

                    activitiesWeekState.sort((a, b) => {

                        if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                            return -1
                        if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                            return 1
                        return 0
                    })

                });
                return {
                    ...state,
                    isLoadingSearchActivity: false,
                    activitiesWeek: activitiesWeekState,

                }
            }
            else {
                let activitiesWeekState = []
                action.response.data.forEach(element => {
                    let timeTemp = ""

                    let events = getEventTime(element)

                    for (let i = 0; i < events.length; ++i) {

                        if (moment(events[i], "YYYY-MM-DD h:mm a").unix() > moment().unix()) {

                            timeTemp = events[i];

                            break;
                        }
                        else timeTemp = events[events.length - 1];
                    }
                    activitiesWeekState.push({
                        ...element,
                        timeDisplay: timeTemp
                    })

                    activitiesWeekState.sort((a, b) => {

                        if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                            return -1
                        if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                            return 1
                        return 0
                    })

                });
                return {
                    ...state,
                    isLoadingSearchActivity: false,
                    activities: state.activities.concat(activitiesWeekState),
                    currentPage: action.response.current_page,
                    lastPage: action.response.last_page,
                }
            }
        case types.SEARCH_ACTIVITY_ERROR:
            return {
                ...state,
                error: true,
                isLoadingSearchActivity: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        case types.REQUEST_GET_ACTIVITY_DETAIL:
            return {

                ...state,
                activity: null,
                error: false,
                isLoadingGetActivityDetail: action.isLoadingGetActivityDetail
            };

        case types.GET_ACTIVITY_DETAIL_SUCCESS:
            return {
                ...state,
                isLoadingGetActivityDetail: false,
                activity: action.response,
            }
        case types.GET_ACTIVITY_DETAIL_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetActivityDetail: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };
        case types.MOUNT_ACTIVITY:
            return {
                ...state,
                activities: [],
                activitiesWeek: [],
                currentPage: null,
                lastPage: null,
            }

        default:
            return state;
    }
};

export default activityReducer;
