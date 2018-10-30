import React, { Component } from 'react'
import { Link } from 'routes'
import { Button } from 'antd'
import _errorPage from './_errorPage.less'
const error404 = ('/static/images/error-404.svg')
const error403 = ('/static/images/error-403.svg')
const error500 = ('/static/images/error-500.svg')
const errorNoResult = ('/static/images/error-no-result.svg')
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
                <style dangerouslySetInnerHTML={{ __html: _errorPage }} />
                <div className="error-image">
                    <img alt="error" src={image} />
                </div>
                <div className="error-detail">
                    <div className="error-status">{status}</div>
                    <div className="error-message">{message}</div>
                    <div className="return-button">
                        <Link prefetch to="/">
                            <a> <Button type="primary ButtonWhiteCenter">Return Home </Button></a>
                        </Link>
                    </div>
                </div>

            </div>

        )
    }
}

export default ErrorPage;
