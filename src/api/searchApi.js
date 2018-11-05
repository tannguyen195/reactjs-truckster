import {
    requestSearch, searchError, searchSuccess,

} from '../actions/searchAction'


// import { notification, Icon } from 'antd'

import $ from 'jquery'
import { apiUrl } from "config"

// Get search api
export const search = (keyword) => {
    return (dispatch) => {
        dispatch(requestSearch(true))
        $.ajax({
            type: 'GET',
            url: apiUrl + `api/consumer/v1/search?keyword=` + keyword,
            headers: {
                "Accept": "application/json",
            },
            success: function (response, status, xhr) {
                dispatch(searchSuccess(
                    response
                ));
            },
            error: function (error) {
                dispatch(searchError(error))

            }
        })
    }
}
