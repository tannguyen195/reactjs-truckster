import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './_aboutCatering.less'
import { Card, Row, Col, Button, Modal, Form, Progress } from 'antd';
import { categories } from '../data'
import { Link, Router } from 'routes'
import TruckCard from '../common/truckCard/TruckCard'

import Catering1 from '../catering/Catering1'
import Catering2 from '../catering/Catering2'
import Catering3 from '../catering/Catering3'
import Catering4 from '../catering/Catering4'
import Catering5 from '../catering/Catering5'
import Catering6 from '../catering/Catering6'
import Catering7 from '../catering/Catering7'
import Catering8 from '../catering/Catering8'
import Catering9 from '../catering/Catering9'
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
        desc: `Open Houses, Drop-off Lunches, Team Building, Networking Events, Office Buildings, Business Parks
        `,
        image: perfectImage1
    },
    {
        name: "Weddings",
        desc: `Engagement Parties, Bridal Showers, Bridal Luncheons, Rehearsal Dinners, Wedding Receptions, Farewell Brunch`,
        image: perfectImage2
    }, {
        name: "Private Parties",
        desc: `Graduations, Birthdays, Anniversaries, Sweet Sixteen, Bar-Mitzvahs, Baby Showers, Reunions, Holiday`,
        image: perfectImage3
    },
    {
        name: "Campus Catering",
        desc: `Teacher Appreciation, Sporting Events, Student Run Organizations, Campus Lunch, Recruitment Events, Alumni Events`,
        image: perfectImage4
    }, {
        name: `Large-Scale Events 
        and Festivals`,
        desc: `Music Festivals, Food Festivals, Races, Sporting Events, Cultural Events, Conventions, Expos, Conferences`,
        image: perfectImage5
    },
    {
        name: "Neighborhood Events",
        desc: `Block Parties, Farmers Markets, Recreation Leagues, Car Shows, Art Walks, Fundraisers, Community Events`,
        image: perfectImage6
    }
]
const stepCatering = ["What’s the Occasion? Tell us about it so we can cater specifically to you",
    "Choose from our list of food trucks or let us help you decide",
    "Fill out the quick and easy catering request form",
    "Let us handle the logistics. We’ll be in touch within 24 hours"]
export default class extends Component {
    handleScrollToElement() {
        window.scrollTo(0, this.myRef.current.offsetTop);
    }
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    renderCateringStep(step) {
        switch (step) {
            case 1: return <Catering1 {...this.props} />;
            case 2: return <Catering9 {...this.props} />;
            case 3: return <Catering2 {...this.props} />;
            case 4: return <Catering3 {...this.props} />;
            case 5: return <Catering4 {...this.props} />;
            case 6: return <Catering5 {...this.props} />;
            case 7: return <Catering6 {...this.props} />;
            case 8: return <Catering7 {...this.props} />;
            case 9: return <Catering8 {...this.props} />;

            default: return <Catering1 {...this.props} />;
        }
    }

    render() {
        const { recommendTruck, step, visibleCatering, toggleCateringModal, previousStep, handleSubmit,

            handleSubmitForm } = this.props
        return (
            <div className="catering__container">
                <div className="catering__header">

                    <div className="catering__background"
                        style={{
                            backgroundImage: `url(${cateringImage1})`
                        }}>
                        {/* <div className="catering__mask"></div> */}
                        <div className="header__content">
                            <h1 className="DisplayWhiteCenter header__text">
                                Food Truck Catering  </h1>

                            <h2 className="LeadRegularWhiteCenter header__desc">
                                {`Make your event memorable, whether it’s a wedding, business lunch, or graduation party. There are so many different kinds of food trucks out there, 
                                how to begin? Truckster makes it easy.”`}
                            </h2>
                            <div className="book-button">
                                <Button type="primary" onClick={() => this.handleScrollToElement()}>
                                    BOOK A TRUCK</Button>
                                <Button onClick={toggleCateringModal}>
                                    HELP ME CHOOSE A TRUCK</Button>
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
                                    <h3 className="section__title">Make your Event
                            Unique</h3>

                                    <div className="section__content">{`Break off from old school catering and try on something fun. No two events should be the same. With over 500 food trucks in Truckster’s network and adding your own personal style, they won’t be. Choose from over 50 different cuisine types to make all your guests happy, including BBQ, Cajun, Mexican, Vegan, and many more. 

Booking a truck allows you to serve food wherever your event may be, rural in the mountains, or right at your own home. No on-site kitchen required. Do what you want, where you want. Aren’t food trucks more fun?
`}</div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="catering__section" >
                            <Col md={12} lg={12}>
                                <div className="section__container auto">
                                    <h3 className="section__title">Choose a Style that Best Fits your Event</h3>

                                    <div className="section__content">{`Choosing a service style helps set the tone for your event, and food trucks offer the flexibility for whatever you envision. A variety of different service styles are possible, such as ordering right from the truck, drop-off catering, buffet, family style or plated dinners.

If you are looking to host a more formal event, plated dinners will help add to the ambience. For an event that encourages socializing, passed appetizers and food stations work well. Family style can create a community feel. While ordering directly from the truck allows people to eat whenever they’re ready and interaction with the food truck staff can be fun. What do you have in mind?
`}</div>
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
                                    <h3 className="section__title">Set your Budget</h3>

                                    <div className="section__content">{`Pricing can vary, but is usually based on the number of people attending, your menu selection, the style of service, and the hours of service. For events where the host is paying, it is typical for a food truck to build their proposal on a cost per person basis. 

Will you pay for the food or will the attendees? Keep in mind that food trucks frequently require a minimum for a catered event. Even if your attendees pay, it’s possible that you may be responsible to cover the minimum.
`}</div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="catering__section" style={{ justifyContent: 'flex-end' }}>
                            <Col md={12} lg={12}>
                                <div className="section__container auto">
                                    <h3 className="section__title">Plan Ahead</h3>

                                    <div className="section__content">{`Food trucks book up fast, especially in the summer and on weekends. Start planning a few months ahead to make sure your favorite trucks are available. 

When you submit a catering request through Truckster, we reach out to the food trucks for you. Not sure which questions to ask? We’ll help guide you through it. If your first choice wasn’t available, we will recommend other similar trucks that you would love. Let us handle the hassle of the logistics. Planning an event is enough work, we’ve got the food covered! 
`}</div>
                                </div>
                            </Col>

                            <Col md={12} lg={12}>
                                <img src={cateringImage4} alt="catering" />
                            </Col>
                        </Row>
                    </div>
                    <div className="catering__body-cuisine">
                        <h3 className="Display-3BlackCenter">More than 50 different cuisines</h3>
                        <div className="perfect__sub-header">{`Have something specific in mind? From Vegan to Venezuelan, we’ve got it. 
                        Take your pick from Truckster’s network of more than 500 food trucks in Colorado. 
`}</div>
                        <div className="favorite-cuisine-container">
                            <Row type="flex" justify="center" className="cuisine-list">
                                {
                                    categories.map((item, index) => {
                                        if (index < 12)
                                            return <Link prefetch key={index} to={`/food-truck/co/denver/${item.link}`}>

                                                <Col lg={4} md={4} sm={6} xs={6} className="cuisine-item">
                                                    <a rel="nofollow">
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
                            <Link to="/food-truck/co/denver/cuisines">
                                <a>
                                    <Button >
                                        Explore All Cuisines
                                </Button>
                                </a>

                            </Link>
                        </div>
                    </div>

                    <div className="catering__body-perfect">
                        <h3 className="Display-3BlackCenter perfect__title">{`Food Truck Catering is Perfect for`}</h3>

                        <div className="perfect__width">
                            <Row gutter={30} type="flex" justify="center">
                                {
                                    perfects.map((item, index) => {
                                        return <Col key={index} className="perfect__item" xs={12} sm={12} md={8} lg={8}>
                                            <div className="perfect__image">
                                                <img alt="perfect" src={item.image} />
                                            </div>
                                            <div className="perfect__content">
                                                <div className="perfect__name">  {item.name}</div>
                                                <div className="perfect__desc">{item.desc}</div>
                                            </div>
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
                            <h3 className="Display-3BlackCenter perfect__title">{`Food Truck Recommendations
for your Upcoming Event `}</h3>
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
                <Modal
                    wrapClassName="catering-modal-container"
                    width={480}
                    onCancel={toggleCateringModal}
                    footer={null}
                    visible={visibleCatering}>

                    <Form onSubmit={handleSubmit} className="catering-modal">
                        <div className="progress-container">

                            <Progress strokeColor="#fa393d" percent={step / 9 * 100} showInfo={false} />
                        </div>
                        <div className="catering-header">
                            <div style={{ paddingLeft: (step * 44.4).toString() + "px" }}
                                className="LabelBlackCenter step-stage">{step}/9</div>
                        </div>

                        <div className="catering-body">

                            {
                                this.renderCateringStep(step)
                            }

                        </div>
                        <div style={{ justifyContent: step === 1 && "flex-end" }} className="catering-footer">
                            {
                                step !== 1 && <Button onClick={previousStep} >BACK</Button>
                            }

                            {
                                step < 9 ? <Button htmlType="submit" type="primary">NEXT</Button>
                                    : <Button onClick={handleSubmitForm} style={{ width: 200 }} type="primary">SUBMIT</Button>
                            }

                        </div>
                    </Form>
                </Modal>
            </div>
        )
    }
}


