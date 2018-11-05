import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './_aboutCatering.less'
import { Card, Row, Col, Button } from 'antd';
import { categories } from '../data'
import { Link, Router } from 'routes'
import TruckCard from '../common/truckCard/TruckCard'
const cateringImage1 = '/static/images/catering-1.jpg'
const cateringImage2 = '/static/images/catering-2.jpg'
const cateringImage3 = '/static/images/catering-3.jpg'
const cateringImage4 = '/static/images/catering-4.jpg'
const cateringImage5 = '/static/images/catering-5.jpg'
const cateringContact = '/static/images/catering-contact.jpg'

const perfectImage1 = '/static/images/perfect-1.png'
const perfectImage2 = '/static/images/perfect-2.png'
const perfectImage3 = '/static/images/perfect-3.png'
const perfectImage4 = '/static/images/perfect-4.png'
const perfectImage5 = '/static/images/perfect-5.png'
const perfectImage6 = '/static/images/perfect-6.png'
const perfects = [
    {
        name: `Corporate Events 
        and Lunches`,
        image: perfectImage1
    },
    {
        name: "Weddings",
        image: perfectImage2
    }, {
        name: "Private Parties",
        image: perfectImage3
    },
    {
        name: "Campus Catering",
        image: perfectImage4
    }, {
        name: `Large-Scale Events 
        and Festivals`,
        image: perfectImage5
    },
    {
        name: "Neighborhood Events",
        image: perfectImage6
    }
]
const stepCatering = ["Decide your cuisine type",
    "Choose from our list of food trucks",
    "Select “Book this Truck” and fill out the quick and easy form",
    "Once submitted, Truckster will get back to you within 24 hours"]
export default class extends Component {
    handleScrollToElement() {
        window.scrollTo(0, this.myRef.current.offsetTop);
    }
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        const { recommendTruck } = this.props
        return (
            <div className="catering__container">
                <div className="catering__header">

                    <div className="catering__background"
                        style={{
                            backgroundImage: `url(${cateringImage1})`
                        }}>
                        {/* <div className="catering__mask"></div> */}
                        <div className="header__content">
                            <div className="DisplayWhiteCenter header__text">
                                Food Truck Catering  </div>

                            <div className="LeadRegularWhiteCenter header__desc">
                                {`There are so many different kinds of food trucks out there,
                               how to begin? Truckster makes it easy.`}
                            </div>
                            <div className="book-button">
                                <Button type="primary" onClick={() => this.handleScrollToElement()}>
                                    BOOK A TRUCK</Button>
                            </div>
                        </div>
                        <div className="catering__step">
                            <Card bordered={false} className="step__container" >
                                <Row>
                                    {
                                        stepCatering.map((item, index) => {
                                            return <Col key={index} xs={12} sm={12} md={12} lg={6}>
                                                <Card.Grid key={index}
                                                    style={{
                                                        width: '100%',
                                                        textAlign: 'center',
                                                        border: 0,
                                                        padding: 0,
                                                        height: '280px'
                                                    }}>
                                                    <div className="step-item">
                                                        <div className="step__num">

                                                            <div className="num__circle">
                                                                {index + 1}
                                                            </div>
                                                        </div>
                                                        <div className="item__desc">
                                                            {item}
                                                        </div>
                                                    </div>
                                                </Card.Grid>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Card>
                        </div>
                    </div>


                </div>
                <div className="catering__body">

                    <div className="catering__body-section">
                        <Row className="catering__section">
                            <Col md={12} lg={12}>
                                <img src={cateringImage3} alt="catering" />
                            </Col>
                            <Col md={12} lg={12}>
                                <div className="section__container">
                                    <div className="section__title">Make your Event
                            Unique</div>

                                    <div className="section__content">Break off from old school catering and try on something fun. Choose from over 50 different cuisine types to make all your guests happy, including BBQ, Cajun, Mexican, Vegan, and
many more.</div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="catering__section" >
                            <Col md={12} lg={12}>
                                <div className="section__container auto">
                                    <div className="section__title">Choose a Style that Best Fits your Event</div>

                                    <div className="section__content">Food trucks offer several different service styles, such as ordering right from the truck, drop-off catering, buffet, family style or plated dinners</div>
                                </div>
                            </Col>
                            <Col md={12} lg={12}>
                                <img src={cateringImage5} alt="catering" />
                            </Col>
                        </Row>

                        <Row className="catering__section">
                            <Col md={12} lg={12}>
                                <img src={cateringImage2} alt="catering" />
                            </Col>
                            <Col md={12} lg={12}>
                                <div className="section__container">
                                    <div className="section__title">Set your Budget</div>

                                    <div className="section__content">Food trucks frequently require a minimum for a catered event. Pricing can vary, but is usually based on the number of people attending and menu selection. </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="catering__section" style={{ justifyContent: 'flex-end' }}>
                            <Col md={12} lg={12}>
                                <div className="section__container auto">
                                    <div className="section__title">Plan Ahead</div>

                                    <div className="section__content">Food trucks book up fast, especially in the summer and on weekends. Start planning a few months ahead to make sure your favorite trucks are available.</div>
                                </div>
                            </Col>

                            <Col md={12} lg={12}>
                                <img src={cateringImage4} alt="catering" />
                            </Col>
                        </Row>
                    </div>
                    <div className="catering__body-cuisine">
                        <div className="Display-2BlackCenter">More than 50 different cuisines</div>
                        <div className="favorite-cuisine-container">
                            <Row type="flex" justify="center" className="cuisine-list">
                                {
                                    categories.map((item, index) => {
                                        if (index < 12)
                                            return <Link prefetch key={index} to={`/cuisine/${item.link}`}>

                                                <Col lg={4} md={4} sm={6} xs={6} className="cuisine-item">
                                                    <a>
                                                        <div className="cuisine-image">
                                                            <img src={item.image} alt="cuisine-image" />
                                                        </div>
                                                        <div className="Body-2CenterBlack paddingBottom40">
                                                            {item.name}
                                                        </div>

                                                    </a>
                                                </Col>

                                            </Link>
                                        else return <div key={index} />
                                    })
                                }
                            </Row>
                        </div>
                        <div className="explore-button">
                            <Link to="/cuisine">
                                <a>
                                    <Button >
                                        Explore All Cuisines
                                </Button>
                                </a>

                            </Link>
                        </div>
                    </div>

                    <div className="catering__body-perfect">
                        <div className="Display-2BlackCenter perfect__title">{`Food Truck Catering is 
                        Perfect for`}</div>
                        <div className="perfect__width">
                            <Row type="flex" justify="center">
                                {
                                    perfects.map((item, index) => {
                                        return <Col key={index} className="perfect__item" xs={12} sm={12} md={8} lg={8}>
                                            <img alt="perfect" src={item.image} />
                                            <div className="perfect__name">{item.name}</div>
                                        </Col>
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                    {
                        recommendTruck && <div
                            className="catering__body-recommend"
                            ref={this.myRef}>
                            <div className="Display-2BlackCenter perfect__title">{`Food Truck Recommendations
for your Upcoming Event `}</div>
                            <div className="perfect__width">
                                <Row gutter={30} type="flex" justify="center">
                                    {
                                        recommendTruck.map((item, index) => {
                                            return <Col key={index} className="perfect__item" xs={24} sm={12} md={8} lg={8}>
                                                <TruckCard data={item} />
                                            </Col>
                                        })
                                    }
                                </Row>

                                <div className="explore-button">
                                    <Link to="/food-truck/co/denver/all">
                                        <a>
                                            <Button >
                                                Explore All Trucks  </Button>
                                        </a>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="catering__body-contact">
                        <div className="catering__perfect-image" style={{
                            backgroundImage: `url(${cateringContact})`
                        }}>

                            <div className="DisplayWhiteCenter perfect__title">Not sure how to get started?</div>
                            <div className="LeadRegularWhiteCenter perfect__desc">Reach out to Truckster’s experts to discuss your specific event and
let us help you make it easy.</div>
                            <div className="contact-button">
                                <Link to="/contact">
                                    <a>
                                        <Button type="primary" className="ButtonNormalPrimary">CONTACT US</Button>
                                    </a>

                                </Link>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}


