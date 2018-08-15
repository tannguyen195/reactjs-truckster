import React, { Component } from 'react';
import { Row, Col, Spin, Icon } from 'antd';
import Map from '../common/map/Map'
import CustomCarousel from '../common/CustomCarousel/CustomCarousel'
import moment from 'moment'
import { getEventTime } from '../../../global'
import RenderContainer from '../common/renderContainer/RenderContainer'
import MediaQuery from 'react-responsive';
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import TruckCard from '../common/truckCard/TruckCard'
const defaultImage = ("/static/images/default-image.png")
const shareIcon = ('/static/images/share-icon.png')
const timeIcon = ('/static/images/time-icon.png')
const locationIcon = ('/static/images/location-icon.png')

class EventDetail extends Component {

    // render truck card 
    renderTruckCard(trucks) {
        return trucks.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={6}>
                <TruckCard data={item.food_truck} />
            </Col>
        })
    }

    renderEventDetail(event) {
        const { toggleShareModal, trucks } = this.props
        let time = ""

        let events = getEventTime(event)

        for (var i = 0; i < events.length; ++i) {
            if (moment(events[i], "YYYY-MM-DD hh:mm a") > moment()) {
                time = events[i];
                break;
            }
        }

        return (
            <div>
                <div className="detail-header">
                    <div className="name DisplayBlackLeft ">  {event.name}</div>

                    <img onClick={(e) => toggleShareModal()} alt="back" src={shareIcon} />

                </div>

                <div className="detail-body">
                    <div className="carousel">
                        <CustomCarousel>
                            {
                                event.pictures ? event.pictures.map((item, index) => {
                                    return <div key={index} className="event-image">
                                        <img alt="event" src={item.url} />
                                    </div>
                                }) : <div className="event-image">
                                        <img alt="event" src={defaultImage} />
                                    </div>
                            }
                        </CustomCarousel>
                    </div>
                    <div className="event-info">
                        <img alt="location" src={locationIcon} />
                        <div className="Body-2GreyLeft">
                            {event.address}
                        </div>
                    </div>
                    <div className="event-info">
                        <img alt="location" src={timeIcon} />
                        <div className="Body-2GreyLeft">
                            {moment(time, "YYYY-MM-DD hh:mm a").format("ddd, MMMM DD hh:mm:a")} - {moment(event.end_time).format(" hh:mm:a")}
                        </div>
                    </div>
                    <div className="event-intro">
                        <div className="SubheadingBlackLeft">
                            Introduction
                        </div>
                        <div className="Body-1RegularGrayLeft information">
                            {event.information}
                        </div>
                    </div>

                    <div className="event-intro">
                        {
                            trucks && trucks.length > 0 && <RenderContainer message="Something went wrong, please try another time!" >
                                <div className="SubheadingBlackLeft">
                                    Food trucks serving at this event </div>
                                <div>
                                    {
                                        trucks ?


                                            <Row gutter={16}>
                                                {this.renderTruckCard(trucks)}
                                            </Row>

                                            : <MediaQuery key='loader' maxWidth={768}>
                                                {(matches) => {
                                                    return <LoadingPlaceHolder itemNum={matches ? 4 : 8} key='loader' />
                                                }}
                                            </MediaQuery>

                                    }
                                </div>
                            </RenderContainer>
                        }


                    </div>
                </div>

            </div >
        )
    }

    render() {
        const { activity } = this.props
        let time = ""

        let events = getEventTime(activity)

        for (var i = 0; i < events.length; ++i) {
            if (moment(events[i], "YYYY-MM-DD hh:mm a") > moment()) {
                time = events[i];
                break;
            }
        }
        return (
            <div className="event-detail">

                {
                    activity
                        ?
                        <Row >
                            <Col id="introduction" className="detail-container" sm={24} xs={24} lg={13} md={13}>
                                {
                                    this.renderEventDetail(activity)
                                }
                            </Col>
                            <Col className="map" sm={24} xs={24} lg={11} md={11}>
                                <Map icon="event" location={[{ ...activity, timeDisplay: time }]} />
                            </Col>
                        </Row>
                        :
                        <div className="loading-container">
                            <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
                        </div>
                }

            </div>
        )


    }
}

export default EventDetail
