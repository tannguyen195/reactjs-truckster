import React, { Component } from 'react';
import { Row, Col, Popover } from 'antd';

import stylesheet from './_contact.less'
import GoogleMapReact from 'google-map-react';

const facebook = ("/static/images/facebook-icon.png")
const google = ("/static/images/google-icon.png")
const instagram = ("/static/images/instagram-icon.png")
const twitter = ("/static/images/twitter-icon.svg")
const mailIcon = ('/static/images/mail-icon.png')
const phoneIcon = ('/static/images/phone-icon.png')
const locationIcon = ('/static/images/location-icon.png')

// const minusIcon = require('/static/images/minus-icon.png')

const AnyReactComponent = ({ info, icon }) => (
    <Popover className="marker-container"
        content={"We are here!"}
        visible={true}>
        <div>

        </div>
    </Popover>
);
class Contact extends Component {


    render() {
        return (

            <div className="contact-container">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
                <div className="contact">
                    <Row gutter={110}>
                        <Col lg={12}>
                            <div className="DisplayBlackLeft">
                                Get in Touch
                            </div>
                            <div className="contact-bref Body-2GreyLeft">
                                We'd love to hear from you!
                            </div>
                            <div className="item-info">
                                <img alt="info" src={phoneIcon} />
                                <span className="Body-2GreyLeft"><a href="tel:720-626-4619">720-626-4619</a></span>
                            </div>
                            <div className="item-info">
                                <img alt="info" src={mailIcon} />
                                <span className="Body-2GreyLeft"><a href={`mailto:info@gotruckster.com`}>info@gotruckster.com</a></span>
                            </div>
                            <div className="item-info">
                                <img alt="info" src={locationIcon} />
                                <span className="Body-2GreyLeft">Denver, Colorado</span>
                            </div>
                            <div className="social-container">
                                <div className="title">SOCIAL MEDIA</div>
                                <div className="social-icon">



                                    <a onClick={() => {
                                        window.open("https://www.facebook.com/GoTruckster/");
                                    }} >  <img alt="Alternative text" src={facebook} />
                                    </a>
                                    {/* <img src={google} alt="icon" />
                                    <img src={twitter} alt="icon" /> */}
                                    <a onClick={() => {
                                        window.open("https://www.instagram.com/gotruckster/");
                                    }} >   <img alt="Alternative text" src={instagram} />
                                    </a>

                                </div>
                            </div>
                            {/* <Row gutter={10} className="form-contact">

                                <Col lg={12} md={12}>
                                    <div className="contact-item">

                                        <div className="item-title">
                                            FIRST NAME
                                        </div>

                                        <FormItem style={{ marginBottom: '24px' }}>
                                            {getFieldDecorator('firstName')(
                                                <Input placeholder="First Name" />
                                            )}
                                        </FormItem>
                                    </div>

                                </Col>
                                <Col lg={12} md={12}>
                                    <div className="contact-item">

                                        <div className="item-title">
                                            LAST NAME</div>

                                        <FormItem style={{ marginBottom: '24px' }}>
                                            {getFieldDecorator('lastName')(
                                                <Input placeholder="Last Name" />
                                            )}
                                        </FormItem>


                                    </div>

                                </Col>
                                <Col lg={24} md={24}>
                                    <div className="contact-item">

                                        <div className="item-title">
                                            YOUR CONTACT </div>

                                        <FormItem style={{ marginBottom: '24px' }}>
                                            {getFieldDecorator('lastName')(
                                                <Input placeholder="Your Email or Phone Number" />
                                            )}
                                        </FormItem>


                                    </div>
                                </Col>
                                <Col lg={24} md={24}>
                                    <div className="contact-item">

                                        <div className="item-title">
                                            SUBJECT </div>

                                        <FormItem style={{ marginBottom: '24px' }}>
                                            {getFieldDecorator('lastName')(
                                                <Input placeholder="Subject" />
                                            )}
                                        </FormItem>


                                    </div>
                                </Col>
                                <Col lg={24} md={24}>
                                    <div className="contact-item">

                                        <div className="item-title">
                                            MESAGE </div>

                                        <FormItem style={{ marginBottom: '24px' }}>
                                            {getFieldDecorator('lastName')(
                                                <TextArea placeholder="Message" />
                                            )}
                                        </FormItem>
                                    </div>
                                </Col>
                                <Col className="button-submit " lg={24} md={24}>
                                    <Button type="primary">
                                        <div className="ButtonWhiteCenter">
                                            SUBMIT
                                    </div></Button>
                                </Col>
                            </Row> */}

                        </Col>
                        <Col className="contact-right" lg={12}>


                            <div className="contact-map">
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyA38TbYpItOyBso3moz0u6yf-hv7VziVfs" }}
                                    defaultCenter={{ lat: 39.7384953, lng: -104.9964992 }}
                                    defaultZoom={10}
                                >
                                    <AnyReactComponent
                                        lat={39.7384953}
                                        lng={-104.9964992} />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        )


    }
}

export default Contact
