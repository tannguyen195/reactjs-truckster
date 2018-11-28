import {
    requestSearchBrewery, searchBreweryError, searchBrewerySuccess,
    requestGetBreweryDetail, getBreweryDetailError, getBreweryDetailSuccess,
    requestGetSuggestBrewery, getSuggestBreweryError, getSuggestBrewerySuccess
} from '../actions/breweryAction.js'


// import { notification, Icon } from 'antd'

import $ from 'jquery'
import { apiUrl } from "config"
import { Cookies } from 'react-cookie'
const cookies = new Cookies()


export const searchBrewery = (params, value, page) => {
    return (dispatch) => {
        dispatch(requestSearchBrewery(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/breweries?${params}=${value}&per_page=12&page=${page}`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(searchBrewerySuccess(
                    { ...response, params: params }
                ));
            },
            error: function (error) {
                dispatch(searchBreweryError(error))
            }
        })
    }
}


// Get brewery detail api
export const getBreweryDetail = (breweryId) => {
    return (dispatch) => {
        dispatch(requestGetBreweryDetail(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/breweries/` + breweryId,
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(getBreweryDetailSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getBreweryDetailError(error))
            }
        })
    }
}


// get suggest truck api
export const getSuggestBrewery = (type) => {
    return (dispatch) => {
        dispatch(requestGetSuggestBrewery(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/breweries/${type}/suggests`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getSuggestBrewerySuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getSuggestBreweryError(error))
            }
        })
    }
}