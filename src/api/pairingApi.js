import {
    requestGetPairing, getPairingError, getPairingSuccess,
    requestGetPairingDetail, getPairingDetailError, getPairingDetailSuccess
} from '../actions/pairingAction'


// import { notification, Icon } from 'antd'

import $ from 'jquery'
import { apiUrl } from "config"

// Get pairing api
export const getPairing = (params, value, page) => {
    return (dispatch) => {
        dispatch(requestGetPairing(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/pairings?${params}=${value}&sort_by=avg_rating&page=${page}&per_page=12`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getPairingSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getPairingError(error))

            }
        })
    }
}

// Get pairing detail api
export const getPairingDetail = (pairingId) => {
    return (dispatch) => {
        dispatch(requestGetPairingDetail(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/pairings/` + pairingId,
            headers: {
                "Accept": "application/json",
            },

            success: function (response, status, xhr) {
                dispatch(getPairingDetailSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getPairingDetailError(error))
            }
        })
    }
}