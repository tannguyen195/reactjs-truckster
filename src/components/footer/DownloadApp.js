import React, { Component } from 'react';
import { Button } from 'antd'

const logo = ("/static/images/logo-app.png")
const closeIcon = ("/static/images/close-icon.svg")

class DownloadApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const { isAndroid, isIOS, paramsDeepLink, toggleDeepLink } = this.props
        let url = "gotrucksterconsumer://app"
        if (isAndroid)
            url = "https://play.google.com/store/apps/details?id=com.truckster"
        else if (isIOS)
            url = "https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?l=vi&ls=1&mt=8"
        return (
            <div className="download-app">
                <div className="download-left">
                    <div onClick={toggleDeepLink} className="close-icon">
                        <img src={closeIcon} alt="close" />
                    </div>

                    <div className="discover-app">
                        <div className="logo-container">
                            <img src={logo} alt="truck" />
                        </div>
                        <div className="download-content">
                            <div className="ButtonWhiteCenter">
                                Use the Truckster App </div>
                            <div className="CaptionGreyCenter">
                                Discover food trucks easier</div>
                        </div>
                    </div>
                </div>
                <div className="get-app-button">
                    <Button type="primary">
                        <a href={url}>
                            GET APP
                        </a></Button>
                </div>

            </div>
        )
    }
}

export default DownloadApp;
