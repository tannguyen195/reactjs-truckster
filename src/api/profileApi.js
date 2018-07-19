import React from 'react';
import {
    requestGetUser, getUserError, getUserSuccess,
    requestUpdateProfile, updateProfileError, updateProfileSuccess,
    requestChangePassword, changePasswordError, changePasswordSuccess
} from '../actions/profileAction.js'
import {
    toggleErrorModal
} from '../actions/toggleAction'
import axios from 'axios';
import { notification, Icon } from 'antd'
import { Cookies } from 'react-cookie'
import $ from 'jquery'
import { apiUrl } from "config"
const cookies = new Cookies()

// Get user information
export const getUser = () => {
    return (dispatch) => {
        dispatch(requestGetUser(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + 'api/user/show',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', "Bearer " + cookies.get('token', { doNotParse: true }));
            },
            headers: {
                "Accept": "application/json",

            },
            success: function (response, status, xhr) {

                dispatch(getUserSuccess(
                    response
                ));
            },
            error: function (error) {

                dispatch(getUserError(error))
                dispatch(toggleErrorModal(error))
            }
        })
    }
}

// Update user information
export const updateProfile = (data) => {
    return (dispatch) => {
        dispatch(requestUpdateProfile(true))

        var form = new FormData();
        form.append('name', data.name);
        form.append('phone', data.phone);
        form.append('gender', data.gender);
        form.append('birthday', data.birthday);
        form.append('_method', "PUT");
        if (data.avatar)
            form.append('avatar', data.avatar)
        axios({
            method: 'post',
            url: apiUrl + 'api/user',
            data: form,

            headers: {
                'Authorization': "Bearer " + cookies.get('token', { doNotParse: true }),
                'Content-Type': 'multipart/form-data',
                "Accept": "application/json",
            }

        })
            .then(function (response) {
                //handle success
                dispatch(updateProfileSuccess(
                    response.data
                ));

                notification.open({
                    message: 'Success',
                    description: "Successfully updated profile",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            })
            .catch(function (response) {
                dispatch(updateProfileError(response))
                notification.open({
                    message: 'Opps!',
                    description: "Can not update profile",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            });
    }
}

//Change user password 
export const changePassword = (data) => {
    return (dispatch) => {
        dispatch(requestChangePassword(true))
        $.ajax({
            type: 'PATCH',
            url: apiUrl + 'api/user',
            headers: {
                "Accept": "application/json",
            },
            data: data,
            success: function (response, status, xhr) {
                dispatch(changePasswordSuccess(
                    response
                ));
                notification.open({
                    message: 'Success',
                    description: "Successfully updated new password",
                    icon: <Icon type="check-circle-o" style={{ color: 'rgb(76, 218, 100)' }} />
                });
            },
            error: function (error) {
                dispatch(changePasswordError(error))
                notification.open({
                    message: 'Opps!',
                    description: "Can not update password",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            }
        })
    }
}