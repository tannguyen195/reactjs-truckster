import React, { Component } from 'react';
import { Button, Tabs, Row, Col } from 'antd'
import _truckOwner from './_truckOwner.less'
import Head from '../head'
import { Link } from 'routes'
const { TabPane } = Tabs;
const appStore = ("/static/images/app-store.png")
const appleIcon = '/static/images/icon-apple.svg'
const ownerImage1 = '/static/images/image-owner-1.png'
const ownerImage2 = '/static/images/image-owner-2.jpg'
const ownerImage3 = '/static/images/image-owner-3.png'
const ownerImage4 = '/static/images/image-owner-4.png'

const benefitImage1 = '/static/images/image-benefit-1.png'
const benefitImage2 = '/static/images/image-benefit-2.png'
const benefitImage3 = '/static/images/image-benefit-3.png'
const benefitImage4 = '/static/images/image-benefit-4.png'
const benefitImage5 = '/static/images/image-benefit-5.png'
const benefitImage6 = '/static/images/image-benefit-6.png'

const ownerIcon1 = '/static/images/icon-owner-1.svg'
const ownerIcon2 = '/static/images/icon-owner-2.svg'
const ownerIcon3 = '/static/images/icon-owner-3.svg'
const ownerIcon4 = '/static/images/icon-owner-4.svg'
const ownerIcon5 = '/static/images/icon-owner-5.svg'
const ownerIcon6 = '/static/images/icon-owner-6.svg'

const features = [
    {
        image: benefitImage1,
        name: "Accept mobile orders"
    },
    {
        image: benefitImage2,
        name: "Control your profile"
    },
    {
        image: benefitImage3,
        name: "Import calendar events"
    },
    {
        image: benefitImage4,
        name: "Edit your menu and add tags"
    },
    {
        image: benefitImage5,
        name: "Make menu items active or inactive"
    },
    {
        image: benefitImage6,
        name: "Track your dashboard analytics "
    }
]
const benefits = [
    {
        image: ownerIcon1,
        name: "Connect with consumers",
        desc: "Truckster is a platform for you to connect with consumers. Make sure they remember your truck and can find you again. Consumers can favorite trucks so they can track you at any time."
    },
    {
        image: ownerIcon2,
        name: "Show up on Truckster’s map",
        desc: "By syncing your calendar events, you will show up on Truckster’s interactive map, allowing consumers to see when you’re nearby and increasing your foot traffic."
    },
    {
        image: ownerIcon3,
        name: "Offer mobile ordering",
        desc: "Grow revenue through mobile ordering, to capture the consumer on the go. With Truckster Vendor, you are able to turn on and off this option, depending on your event that day."
    },
    {
        image: ownerIcon4,
        name: "Get more catering leads",
        desc: "Advertising for catering is expensive and difficult to do as a single truck. Truckster advertises for you and brings you qualified catering leads, with much of the upfront logistics already handled."
    },
    {
        image: ownerIcon5,
        name: "Outsourced marketing service",
        desc: "As a food truck owner, you hardly have time to answer emails, let alone market yourself. Truckster is your marketing platform that helps you reach your exact target market and only requires minutes each month to keep updated."
    },
    {
        image: ownerIcon6,
        name: "Promote food truck events",
        desc: "Fans are in search of upcoming activities and things to do. Help spread the word for your upcoming food truck events and festivals by adding them to Truckster and being a featured event on the app and website."
    }
]
export default class extends Component {

    handleClick = e => {
      
    };
    renderFeature(e) {
        return <div><img src={e.image} alt="feature" /></div>
    }
    render() {

        return (
            <div className="owner ">
                <style dangerouslySetInnerHTML={{ __html: _truckOwner }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/"
                    title="Truckster – I'm a Food Truck Owner"
                    description="Truckster is specifically built to benefit you as the food truck owner. With the easy to use app, you can reach thousands of fans and drive catering leads"
                />
                <div className="owner__header media">

                    <h1 className="DisplayBlackCenter">Truckster is Built for Food Trucks</h1>
                    <div className="LeadRegularBlackCenter paddingTop32 paddingBottom40">Truckster is a food truck network built with a consumer app, mobile and desktop website, and a vendor app. We understand how busy you are, so we’ve built a seamless, easy to use platform for you. With thousands of food truck fans already on board, Truckster gives you the ability to directly address your exact target market.</div>
                    <a href="https://apps.apple.com/us/app/truckster-vendor/id1375287755" target="_blank">


                        <Button className="ButtonWhiteCenter" type="primary"> <img src={appleIcon} alt="apple" /> Download on the App Store</Button>
                    </a>

                </div>
                <div className="owner__image"><img src={ownerImage1} alt="owner1" /></div>
                <div className="owner__tabs media">
                    <h2 className="title Display-2BlackLeft">With the Truckster Vendor app you can</h2>
                    <Tabs style={{ minHeight: '500px' }} defaultActiveKey="0" tabPosition={"left"} >
                        {
                            features.map((item, index) => {
                                return <TabPane tab={item.name} key={index}>
                                    {this.renderFeature({ ...item, index })}
                                </TabPane>
                            })
                        }
                    </Tabs>

                </div>

                <div className="owner__benefits media">
                    <h2 style={{ fontSize: "32px" }} className="title Display-2BlackCenter">How Truckster benefits you as a food truck owner</h2>
                    <div>

                        {
                            benefits.map((item, index) => {
                                return <div></div>
                            })
                        }
                    </div>
                    <Row gutter={60} type="flex" justify="center">
                        {
                            benefits.map((item, index) => {
                                return <Col key={index} className="benefit__item" xs={12} sm={12} md={8} lg={8}>
                                    <div className="benefit__image">
                                        <img alt="benefit" src={item.image} />
                                    </div>
                                    <div className="benefit__content">
                                        <div className="benefit__name Display-3BlackLeft">  {item.name}</div>
                                        <div className="benefit__desc">{item.desc}</div>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                </div>

                <div className="owner__control media">
                    <div className="control">
                        <div className="control__left">
                            <h2 className="Display-2BlackLeft paddingBottom40">
                                Take control of your food truck’s profile
                        </h2>

                            <div className="LeadRegularBlackLeft paddingBottom40">
                                Your truck may already have a profile built on Truckster. Our goal was to launch a consumer ready product, so we would be as useful as possible right from the start. If your profile is out there, we’ve already put you in front of thousands of consumers. Now, it’s time to get you more involved! Take control of your profile and link up your calendar so your events show up on the map. Don’t see your truck? Contact us or download Truckster Vendor to build your truck profile.
                        </div>

                            <Link prefetch to="/contact" >
                                <Button type="primary">
                                    <div className="ButtonWhiteCenter">
                                        CONTACT US
                                </div>
                                </Button>
                            </Link>
                        </div>
                        <div className="control__right">
                            <div>

                                <img src={ownerImage3} alt="control" />
                            </div></div>
                    </div>
                </div>
                <div className="owner__download">
                    <div className="download">
                        <div className="download__left">

                            <div className="DisplayWhiteLeft title paddingBottom40">Download Truckster Vendor
to get started</div>
                            <div>
                                <a onClick={() => {
                                    window.open("https://apps.apple.com/us/app/truckster-vendor/id1375287755");
                                }} className="image-container">
                                    <img alt="Alternative text" src={appStore} />
                                </a>
                            </div>
                        </div>
                        <div className="download__right">

                            <img alt="owner" src={ownerImage4} />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


