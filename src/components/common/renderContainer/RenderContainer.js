import React, { Component } from 'react'
const errorNoResult = ('/static/images/error-no-result.svg')

class RenderContainer extends Component {

    render() {
        const { error, children, message, isEmpty } = this.props

        return (
            <div className="render-container">

                {
                    error ?
                        <div className="error-holder">
                            <img src={errorNoResult} alt="error" />
                            <div className="opps DisplayBlackCenter">
                                Oops!
                            </div>
                            <div className="Body-2GreyCenter">{message}</div>
                        </div>
                        :
                        isEmpty ?
                            <div className='message'>{message}</div>
                            :
                            children
                }
            </div>

        )
    }
}

export default RenderContainer