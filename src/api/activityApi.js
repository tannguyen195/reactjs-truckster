
import {
    requestSearchActivity, searchActivityError, searchActivitySuccess,
    requestGetActivityDetail, getActivityDetailError, getActivityDetailSuccess
} from '../actions/activityAction.js'

import $ from 'jquery'
import { apiUrl } from "config"


export const searchActivity = (isFeature, page) => {
    let url = ""
    if (isFeature) {
        url = "?is_featured=true&"
    } else
        url = "?this_week=true&"
    return (dispatch) => {
        dispatch(requestSearchActivity(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/consumer/v1/activities' + url + `page=${page}`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(searchActivitySuccess(
                    { ...response, isFeature: isFeature }
                ));
            },
            error: function (error) {
                dispatch(searchActivityError(error))
            }
        })
    }
}

export const getActivityDetail = (acticityId) => {
    return (dispatch) => {
        dispatch(requestGetActivityDetail(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/consumer/v1/activities/' + acticityId,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getActivityDetailSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getActivityDetailError(error))

            }
        })
    }
}