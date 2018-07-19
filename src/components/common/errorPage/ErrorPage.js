import React, { Component } from 'react'
import { Link, } from 'react-router-dom'
import { Button } from 'antd'
import './_errorPage.less'
const error404 = require('/static/images/error-404.svg')
const error403 = require('/static/images/error-403.svg')
const error500 = require('/static/images/error-500.svg')
const errorNoResult = require('/static/images/error-no-result.svg')
class ErrorPage extends Component {

    render() {
        const { status } = this.props
        let message = "",
            image = null
        switch (status) {
            case 500: {
                message = "Sorry, the server has gone wrong";
                image = error500
                break;
            }
            case 404: {
                message = "Sorry, the page you visited does not exist";
                image = error404
                break;
            }
            case 403: {
                message = "Sorry, you do not have permission to access this page";
                image = error403
                break;
            }
            default: {
                image = errorNoResult
                message = "Something went wrong!"
            }
        }
        return (
            <div className="error-container">
                <div className="error-image">
                    <img alt="error" src={image} />
                </div>
                <div className="error-detail">
                    <div className="error-status">{status}</div>
                    <div className="error-message">{message}</div>
                    <div className="return-button">
                        <div to="/">
                            <Button type="primary ButtonWhiteCenter">Return Home </Button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default ErrorPage;
