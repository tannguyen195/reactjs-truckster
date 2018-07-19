import {

    requestGetNearby, getNearbyError, getNearbySuccess
} from '../actions/nearbyAction.js'

// import { notification, Icon } from 'antd'

import $ from 'jquery'
import { apiUrl } from "config"

// Get nearby truck
export const getNearby = (data, page) => {
    return (dispatch) => {
        dispatch(requestGetNearby(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/nearme?latitude=${data.lat}&longtitude=${data.lng}&radius=8046.72&page=${page}&show_all=true`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getNearbySuccess(
                    response
                ));
                if (response.current_page < response.last_page) {
                   
                    dispatch(getNearby(data, response.current_page + 1))
                }
          
            },
            error: function (error) {
                dispatch(getNearbyError(error))

            }
        })
    }
}