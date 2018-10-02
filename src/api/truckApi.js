import {
    requestSearchTruck, searchTruckError, searchTruckSuccess,
    requestGetTruckDetail, getTruckDetailError, getTruckDetailSuccess,
    requestGetTruckMenu, getTruckMenuError, getTruckMenuSuccess,
    requestGetSuggestTruck, getSuggestTruckError, getSuggestTruckSuccess
} from '../actions/truckAction.js'
import axios from 'axios'
var https = require("https");
// import { notification, Icon } from 'antd'

import $ from 'jquery'
import { apiUrl } from "config"
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

// Search truck api
export const searchTruck = (params, value, page) => {

    return (dispatch) => {
        dispatch(requestSearchTruck(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/foodtrucks?${params}=${value}&sort_by=avg_rating&sort_type=desc&per_page=12&page=${page}`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(searchTruckSuccess(
                    { ...response, params: params }
                ));
            },
            error: function (error) {
                dispatch(searchTruckError(error))
            }
        })
    }
}

// Get truck detail api
export const getTruckDetail = (truckId) => {
    return (dispatch) => {
        dispatch(requestGetTruckDetail(true))

        axios({
            method: 'get',
            url: apiUrl + `api/consumer/v1/foodtrucks/` + truckId,
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            headers: {
                "Accept": "application/json",
            }

        })
            .then(function (response) {

                dispatch(getTruckDetailSuccess(
                    response.data
                ));
            })
            .catch(function (error) {
                dispatch(getTruckDetailError(error))

            });
    }
}



// Get truck menu api 
export const getTruckMenu = (truckId) => {
    return (dispatch) => {
        dispatch(requestGetTruckMenu(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/foodtrucks/${truckId}/menus`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getTruckMenuSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getTruckMenuError(error))

            }
        })
    }
}

// get suggest truck api
export const getSuggestTruck = (params) => {

    return (dispatch) => {
        dispatch(requestGetSuggestTruck(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/foodtrucks?city=denver&cuisine=${params}&sort_by=avg_rating&sort_type=desc`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getSuggestTruckSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getSuggestTruckError(error))
            }
        })
    }
}
