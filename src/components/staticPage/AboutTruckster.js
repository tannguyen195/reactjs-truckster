import React, { Component } from 'react';
import { Button, Col, Row } from 'antd'
import Slider from "react-slick";

import Head from '../head'
import { Link } from 'routes'
const aboutTrucksterImage = ("/static/images/truckster-image-about.jpg")
const landingImage1 = ("/static/images/video-1.png")
const landingImage2 = ("/static/images/video-2.png")
const landingImage3 = ("/static/images/video-3.png")
const landingImage4 = ("/static/images/video-4.png")
const pairingIcon = ("/static/images/pairing-icon.svg")
const starIcon = ("/static/images/star-icon.svg")
const placeIcon = ("/static/images/place-icon.svg")
const googlePlay = ("/static/images/google-play.png")
const appStore = ("/static/images/app-store.png")

const data = [{
    image: landingImage1,
    icon: placeIcon,
    iconColor: "#743ad4",
    title: `Tracking more live locations than anyone else.`,
    description: `Truckster’s database of almost 400 food trucks in Colorado makes it the most comprehensive resource out there,
    Serving Colorado today, and adding more cities soon!`
}, {
    image: landingImage2,
    icon: pairingIcon,
    iconColor: "#fa8939",
    title: `Featuring food trucks paired up with your favorite local breweries.`,
    description: `Search over 200 breweries in Colorado, explore their menus, ratings, and upcoming food truck calendars.`
}, {
    image: landingImage3,
    icon: placeIcon,
    iconColor: "#fa393d",
    title: `Skip lines with mobile ordering.`,
    description: `Salvage your lunch hour by ordering ahead of time and picking up from the truck.`
}, {
    image: landingImage4,
    icon: starIcon,
    iconColor: "#5289ff",
    title: `Get social!
    Share favorites and upcoming events with friends.`,
    description: `Stay connected with beer culture and the foodie community. Truckster keeps you updated with the latest events and newest releases. Follow your favorites and share with friends.`
}]

const Page = (({ item, key }) => {
    return <div className="carousel-item" key={key}>
        <Row type="flex" justify="center">
            <Col className="carousel-image">
                <img src={item.image} alt="truckster" />
            </Col>
            <Col className="carousel-info">
                <div className="carousel-bref">
                    <div className="carousel-icon">
                        <img className="carousel-icon" style={{ background: item.iconColor }} src={item.icon} alt="truckster-icon" />
                    </div>
                    <div className="title Display-2BlackLeft">{item.title}</div>
                    <div className="Body-2LeftGrey">{item.description}</div>
                </div>
            </Col>
        </Row>
    </div>
})


const Carousel = (({ self }) => {

    var settings = {
        afterChange: i => {
            self.setState({
                currentSelect: i
            })
        },
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        // nextArrow: <NextArrow />,
        appendDots: (dots) => {
            return (
                <div className="append-dots" >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            )
        },
        customPaging: (i) => {
            return (
                <div id={i}>
                    {
                        self.state.currentSelect === i ? <div className="selected-circle"></div> : <span>&bull;</span>
                    }

                </div>
            )
        }
    };
    return <Slider {...settings}>
        {
            data.map((item, index) => {
                return <Page item={item} key={index} ></Page>
            })
        }

    </Slider>
})

class AboutTruckster extends Component {


    constructor(props) {
        super(props)
        this.state = {
            currentSelect: 0
        }
    }
    render() {
        return (
            <div>
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/"
                    title="Truckster – Find Food Trucks Near You"
                    description="When hunger strikes, rely on Truckster to help find food trucks & breweries near you. View schedules, pairings and events in your area. Download our App today!s"
                />

                <div className="about-truckster-container  main-wrapper">
                    <div className="home-main-header" style={{ backgroundImage: `url(${aboutTrucksterImage})` }} >
                        <div className="content-city">
                            <div className="title DisplayWhiteCenter">
                                {` Your Source for
Everything Food Trucks`}
                            </div>
                            <div className="explore-breweries">Explore breweries, upcoming events, menus, and your favorite brewery & food truck pairings</div>
                            <div className="button-explore">

                                <Button type="primary">
                                    <Link to="/co/denver">
                                        <a className="ButtonWhiteCenter">
                                            GO EXPLORE
                                </a>
                                    </Link>
                                </Button>

                            </div>
                        </div>

                        <div className="cover">
                            <div className="cover-mask"></div>
                        </div>
                    </div>

                    <div className="about-body">
                        <Carousel self={this} />

                        <div className="get-the-app">
                            <div className="DisplayBlackCenter">
                                Get the app today!
                        </div>
                            <div className=" get-the-app-bref">
                                {` Follow your Favorite Food Trucks and Breweries 
    all on one Platform.`}</div>
                            <div className=" get-the-app-store">
                                <Row>

                                    <Col lg={12} md={12} sm={24} xs={24}>
                                        <a onClick={() => {
                                            window.open("https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?l=vi&ls=1&mt=8");
                                        }} >
                                            <div className="store-container" >
                                                <img src={appStore} alt="appple" />
                                            </div>

                                        </a></Col>
                                    <Col lg={12} md={12} sm={24} xs={24}>
                                        <a onClick={() => {
                                            window.open("https://play.google.com/store/apps/details?id=com.truckster");
                                        }} >
                                            <div className="store-container" >
                                                <img className="store-container" src={googlePlay} alt="google" />
                                            </div>

                                        </a>
                                    </Col>



                                </Row>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutTruckster;
