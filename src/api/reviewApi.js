import React from 'react';
import {
    requestGetTruckReview, getTruckReviewError, getTruckReviewSuccess,
    requestPostReview, postReviewError, postReviewSuccess,
    requestGetUserReview, getUserReviewSuccess, getUserReviewError,
    requestMarkFavorite, markFavoriteError, markFavoriteSuccess,
    requestUnmarkFavorite, unmarkFavoriteError, unmarkFavoriteSuccess,
    requestGetUserFavorite, getUserFavoriteError, getUserFavoriteSuccess,
    requestEditReview, editReviewSuccess, editReviewError,

    requestGetBreweryReview, getBreweryReviewSuccess, getBreweryReviewError,
    requestPostBreweryReview, postBreweryReviewSuccess, postBreweryReviewError,
    requestEditBreweryReview, editBreweryReviewSuccess, editBreweryReviewError,
    requestGetUserBreweryReview, getUserBreweryReviewSuccess, getUserBreweryReviewError,

    requestGetUserFavoriteBrewery, getUserFavoriteBrewerySuccess, getUserFavoriteBreweryError,

    requestMarkFavoriteBrewery, markFavoriteBreweryError, markFavoriteBrewerySuccess,
    requestUnmarkFavoriteBrewery, unmarkFavoriteBreweryError, unmarkFavoriteBrewerySuccess
} from '../actions/reviewAction.js'

import { notification, Icon } from 'antd'
import { Cookies } from 'react-cookie'
import $ from 'jquery'
import { apiUrl } from "config"
const cookies = new Cookies()

export const getTruckReview = (truckId) => {
    return (dispatch) => {
        dispatch(requestGetTruckReview(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/foodtrucks/${truckId}/reviews`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getTruckReviewSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getTruckReviewError(error))
            }
        })
    }
}
export const editReview = (data) => {
    let payload = "rating=" + data.rating + "&comment=" + data.comment;
    return (dispatch) => {
        dispatch(requestEditReview(true))
        $.ajax({
            type: 'PUT',
            url: apiUrl + `api/foodtrucks/${data.truckId}/reviews`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: payload,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(editReviewSuccess(
                    response
                ));
                dispatch(getTruckReview(data.truckId))

                notification.open({
                    message: '',
                    description: "Successfully Edited",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(editReviewError(error))

                notification.open({
                    message: 'Opps!',
                    description: "Something went wrong! Please try again later",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            }
        })
    }
}
export const postReview = (data) => {
    let payload = "rating=" + data.rating + "&comment=" + data.comment;
    return (dispatch) => {
        dispatch(requestPostReview(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + `api/foodtrucks/${data.truckId}/reviews`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: payload,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(postReviewSuccess(
                    response
                ));
                dispatch(getTruckReview(data.truckId))
                notification.open({
                    message: 'Successfully',
                    description: "Thanks for your review",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(postReviewError(error))

                notification.open({
                    message: 'Opps!',
                    description: "Something went wrong! Please try again later",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            }
        })
    }
}

export const getUserReview = () => {
    return (dispatch) => {
        dispatch(requestGetUserReview(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/user/reviews',
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(getUserReviewSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getUserReviewError(error))
            }
        })
    }
}

export const markFavorite = (truckId) => {
    return (dispatch) => {
        dispatch(requestMarkFavorite(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + `api/foodtrucks/${truckId}/favourites`,
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(markFavoriteSuccess(
                    response
                ));

                notification.open({
                    message: 'Successfully',
                    description: "Added to your favorite list",
                    icon: <img width={46} style={{ paddingRight: "8px" }} height={25} src={"/static/images/logo.png"} alt="truck-logo" />
                });
            },
            error: function (error) {
                dispatch(markFavoriteError(error))
            }
        })
    }
}

export const unmarkFavorite = (truckId) => {
    return (dispatch) => {
        dispatch(requestUnmarkFavorite(true))
        $.ajax({
            type: 'DELETE',
            url: apiUrl + `api/foodtrucks/${truckId}/favourites`,
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(unmarkFavoriteSuccess(
                    response
                ));
                notification.open({
                    message: 'Successfully',
                    description: "Removed to your favorite list",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(unmarkFavoriteError(error))

            }
        })
    }
}

export const getUserFavorite = () => {
    return (dispatch) => {
        dispatch(requestGetUserFavorite(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/user/favourites',
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(getUserFavoriteSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getUserFavoriteError(error))

            }
        })
    }
}


// Brewery review 
export const getBreweryReview = (breweryId) => {
    return (dispatch) => {
        dispatch(requestGetBreweryReview(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/breweries/${breweryId}/reviews`,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(getBreweryReviewSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getBreweryReviewError(error))
            }
        })
    }
}

export const editBreweryReview = (data) => {
    let payload = "rating=" + data.rating + "&comment=" + data.comment;
    return (dispatch) => {
        dispatch(requestEditBreweryReview(true))
        $.ajax({
            type: 'PUT',
            url: apiUrl + `api/consumer/v1/breweries/${data.breweryId}/reviews`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: payload,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(editBreweryReviewSuccess(
                    response
                ));
                dispatch(getBreweryReview(data.breweryId))

                notification.open({
                    message: '',
                    description: "Successfully Edited",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(editBreweryReviewError(error))

                notification.open({
                    message: 'Opps!',
                    description: "Something went wrong! Please try again later",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            }
        })
    }
}
export const postBreweryReview = (data) => {
    let payload = "rating=" + data.rating + "&comment=" + data.comment;
    return (dispatch) => {
        dispatch(requestPostBreweryReview(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + `api/consumer/v1/breweries/${data.breweryId}/reviews `,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: payload,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(postBreweryReviewSuccess(
                    response
                ));
                dispatch(getBreweryReview(data.breweryId))
                notification.open({
                    message: 'Successfully',
                    description: "Thanks for your review",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(postBreweryReviewError(error))

                notification.open({
                    message: 'Opps!',
                    description: "Something went wrong! Please try again later",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            }
        })
    }
}

export const getUserBreweryReview = () => {
    return (dispatch) => {
        dispatch(requestGetUserBreweryReview(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/user/brewery-reviews',
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(getUserBreweryReviewSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getUserBreweryReviewError(error))
            }
        })
    }
}

// favorite brewery

export const markFavoriteBrewery = (breweryId) => {
    return (dispatch) => {
        dispatch(requestMarkFavoriteBrewery(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + `api/consumer/v1/breweries/${breweryId}/favourites`,
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(markFavoriteBrewerySuccess(
                    response
                ));

                notification.open({
                    message: 'Successfully',
                    description: "Added to your favorite list",
                    icon: <img width={46} style={{ paddingRight: "8px" }} height={25} src={"/static/images/logo.png"} alt="brewery-logo" />
                });
            },
            error: function (error) {
                dispatch(markFavoriteBreweryError(error))
            }
        })
    }
}

export const unmarkFavoriteBrewery = (breweryId) => {
    return (dispatch) => {
        dispatch(requestUnmarkFavoriteBrewery(true))
        $.ajax({
            type: 'DELETE',
            url: apiUrl + `api/consumer/v1//foodbrewerys/${breweryId}/favourites`,
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(unmarkFavoriteBrewerySuccess(
                    response
                ));
                notification.open({
                    message: 'Successfully',
                    description: "Removed to your favorite list",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(unmarkFavoriteBreweryError(error))

            }
        })
    }
}

export const getUserFavoriteBrewery = () => {
    return (dispatch) => {
        dispatch(requestGetUserFavoriteBrewery(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/user/brewery-favourites',
            headers: {
                "Accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            success: function (response, status, xhr) {
                dispatch(getUserFavoriteBrewerySuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(getUserFavoriteBreweryError(error))

            }
        })
    }
}
