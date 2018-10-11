import {

    requestCatering, cateringError, cateringSuccess
} from '../actions/cateringAction'

import React from 'react';
import { notification } from 'antd'
import $ from 'jquery'
import { apiUrl } from "config"
import { toggleCateringModal } from '../actions/toggleAction'
// catering
export const catering = (data) => {
    return (dispatch) => {
        dispatch(requestCatering(true))
        $.ajax({
            type: 'POST',
            url: apiUrl + `api/consumer/v1/catering`,
            data: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(cateringSuccess(
                    response
                ));
                notification.open({
                    message: 'Your request has been submitted.',
                    description: "Expect to hear back from us within 24 hours.",
                    icon: <img width={46} style={{ paddingRight: "8px" }} height={25} src={"/static/images/logo.png"} alt="truck-logo" />
                });
                dispatch(toggleCateringModal())
            },
            error: function (error) {
                dispatch(cateringError(error))
                notification.open({
                    message: 'Opps!',
                    description: "Send catering request fail!",
                    icon: <Icon type="close-circle" style={{ color: '#f32126' }} />
                });
            }
        })
    }
}