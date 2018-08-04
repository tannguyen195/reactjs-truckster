import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes.js'
import stylesheet from './_footer.less'
const cover = ("/static/images/footer-cover.png")
const googlePlay = ("/static/images/google-play.png")
const appStore = ("/static/images/app-store.png")
const truck = ("/static/images/footer-truck.png")

const facebook = ("/static/images/facebook-icon.png")
const google = ("/static/images/google-icon.png")
const instagram = ("/static/images/instagram-icon.png")
const youtube = ("/static/images/youtube-icon.png")
const logoApp = ("/static/images/logo-app.png")
const logo = ("/static/images/logo-vertical.png")
class Footer extends Component {
    render() {
        const { toggleAnnounceModal, router } = this.props
        return (

            <footer className="footer-container" >
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                {
                    <Row className="download" style={{ backgroundImage: `url(${cover})` }}>
                        <Col lg={12} md={12} className="store">
                            <div className="logo">
                                <img alt="logo" src={logoApp} /></div>
                            <h1 className="Display-2BlackCenter">Download the app</h1>
                            <Row gutter={16} className="store-container">
                                <a onClick={() => {
                                    window.open("https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?l=vi&ls=1&mt=8");
                                }} className="image-container">
                                    <img alt="Alternative text" src={appStore} />
                                </a>
                                <a onClick={() => {
                                    window.open("https://play.google.com/store/apps/details?id=com.truckster");
                                }} className="image-container">
                                    <img alt="Alternative text" src={googlePlay} />
                                </a>
                            </Row>
                        </Col>
                        <Col lg={12} md={12}
                            className="truck-container">
                            <img alt="Alternative text" src={truck} />
                        </Col>
                    </Row>
                }

                <Row type="flex" justify="space-between" className="info">
                    <Col md={4} className="column">
                        <h3 className="SubheadingBlackLeft">About</h3>
                        <Link to='/about'><a>About us</a></Link>
                        <Link to='/privacy'><a>Privacy & Terms</a></Link>
                        <Link to='/help'><a>Help</a></Link>
                        <a>Press</a>
                    </Col>
                    <Col md={4} className="column">
                        <h3 className="SubheadingBlackLeft">Food trucks</h3>
                        <Link to='/food-truck'><a>Find trucks</a></Link>
                        <Link to='/cuisine'><a>Cuisine</a></Link>
                        <Link to='/event'><a>Events</a></Link>

                    </Col>
                    <Col md={4} className="column">
                        <h3 className="SubheadingBlackLeft">Vendor</h3>
                        <a onClick={toggleAnnounceModal}>Vendor login</a>
                        <a onClick={toggleAnnounceModal}>Add my truck</a>
                    </Col>
                    <Col xs={24} sm={24} md={5} className="social">
                        <div className="logo">
                            <img alt="Logo app" src={logo} />
                        </div>
                        <div className="icon-container">
                            <a onClick={() => {
                                window.open("https://www.facebook.com/GoTruckster/");
                            }} >  <img alt="Alternative text" src={facebook} />
                            </a>

                            <a onClick={() => {
                                window.open("https://www.instagram.com/gotruckster/");
                            }} >   <img alt="Alternative text" src={instagram} />
                            </a>
                            {/* <img alt="Alternative text" src={google} />

                            <img alt="Alternative text" src={youtube} /> */}
                        </div>

                    </Col>
                </Row>
                <div className="bref CaptionGreyCenter">
                    2018 © Truckster Inc. All Rights Reserved.</div>
            </footer >

        )
    }
}

export default Footer;
