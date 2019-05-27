import {
    requestSearchTruck, searchTruckError, searchTruckSuccess,
    requestGetTruckDetail, getTruckDetailError, getTruckDetailSuccess,
    requestGetTruckMenu, getTruckMenuError, getTruckMenuSuccess,
    requestGetSuggestTruck, getSuggestTruckError, getSuggestTruckSuccess,
    requestGetRecommendTruck, getRecommendTruckError, getRecommendTruckSuccess,
    requestGetCuisineList, getCuisineListSuccess, getCuisineListError,
    requestGetAlbumDetail, getAlbumDetailError, getAlbumDetailSuccess
} from '../actions/truckAction.js'
import axios from 'axios'
var https = require("https");
// import { notification, Icon } from 'antd'

import $ from 'jquery'
import { apiUrl } from "config"
import { Cookies } from 'react-cookie'
const cookies = new Cookies()

// Search truck api
export const searchTruck = (params, value, page, ) => {

    return async (dispatch) => {
        dispatch(requestSearchTruck(true))
        await axios({
            method: 'GET',
            url: apiUrl + `api/consumer/v1/foodtrucks?${params}=${value}&page=${page}`,
            headers: {
                "Accept": "application/json",
            }
        }).then(function (response) {

            return dispatch(searchTruckSuccess(
                { ...response.data, params: params }
            ));
        })
            .catch(function (error) {
                return dispatch(searchTruckError(error))
            });
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
            url: apiUrl + `api/consumer/v1/foodtrucks/${params}/suggests`,
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


// get caltering recommended truck api
export const getRecommenedTruck = () => {

    return (dispatch) => {
        dispatch(requestGetRecommendTruck(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/foodtrucks/recommendation-catering`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getRecommendTruckSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getRecommendTruckError(error))
            }
        })
    }
}

export const getCuisineList = (page) => {
    return (dispatch) => {
        dispatch(requestGetCuisineList(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/cuisine`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getCuisineListSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getCuisineListError(error))
            }
        })
    }
}

export const getAlbumDetail = (data) => {
    return (dispatch) => {
        dispatch(requestGetAlbumDetail(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/foodtrucks/${data.truckID}/album/${data.albumID}`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getAlbumDetailSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getAlbumDetailError(error))
            }
        })
    }
}