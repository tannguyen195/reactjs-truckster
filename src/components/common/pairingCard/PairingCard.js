import React, { Component } from 'react';
import { Card, Rate, Modal, Col, Row } from 'antd'

import TitleLink from '../titleLink'
import stylesheet from './_pairingCard.less'
import moment from 'moment'
import { getSchedule } from '../../../../global'
const homeImage = require("/static/images/home-image.jpg")
const pairingMarkerIcon = require('/static/images/pairing-marker-icon.png')
const defaultImage = require("/static/images/default-image.png")
const eventMarkerIcon = require('/static/images/event-marker-icon.png')
const breweryMarkerIcon = require('/static/images/brewery-marker-icon.png')
const locationIcon = require('/static/images/location-icon.png')
const timeIcon = require('/static/images/time-icon.png')
const logo = require("/static/images/logo-vertical.png")
class PairingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pairingsWeek: [],
            visiblePairing: false
        };

    }

    // Visible pairing
    togglePairing() {
        this.setState({
            visiblePairing: !this.state.visiblePairing
        })
    }


    // check pairing in this week
    isThisWeek(data) {
        let schedules = []
        getSchedule(data).forEach(item => {
            if (moment(item.timeDisplay,"YYYY-MM-DD hh:mm a").isSame(new Date(), "week"))
                schedules.push(item)
        })

        this.setState({
            pairingsWeek: schedules
        })

    }
    renderPairingWeek(pairingsWeek) {
        pairingsWeek.sort((a, b) => {
            if (moment(a.timeDisplay, "YYYY-MM-DD hh:mm a").unix() < moment(b.timeDisplay, "YYYY-MM-DD hh:mm a").unix())
                return -1
            if (moment(a.timeDisplay, "YYYY-MM-DD hh:mm a").unix() > moment(b.timeDisplay, "YYYY-MM-DD hh:mm a").unix())
                return 1
            return 0
        })

        return pairingsWeek.map((item, index) => {
            if (item.activity && item.brewery === null) {
                return <Col key={index} md={12} lg={12}>
                    <TitleLink url="/event/" title={item.activity.name} id={item.activity.id}>
                        <div className="pairing-item-container">
                            <div className="pairing-image">
                                <img alt="pairing-icon" src={item.activity.pictures ? item.activity.pictures[0].url : defaultImage} />
                            </div>
                            <div className="pairing-info">
                                <div className=" Body-1SemiBlackLeft pairing-icon">
                                    <img src={eventMarkerIcon} alt="pairing-icon" />
                                    {item.activity.name}
                                </div>

                                <div className="CaptionGreyLeft">
                                    <img src={locationIcon} alt="icon" />
                                    {item.address}
                                </div>
                                <div className="CaptionGreyLeft">
                                    <img src={timeIcon} alt="icon" />
                                    {
                                        item.timeDisplay && item.end_time &&
                                        ` ${moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(item.end_time).format("hh:mm a")}`
                                    }
                                </div>

                            </div>
                        </div>
                    </TitleLink>
                </Col>
            }
            else {
                return <Col key={index} md={12} lg={12}>
                    <TitleLink url="/brewery/" title={item.brewery.name} id={item.brewery.id}>
                        <div className="pairing-item-container">
                            <div className="pairing-image">
                                <img alt="pairing-icon" src={item.brewery.cover_photo ? item.brewery.cover_photo[0].url : defaultImage} />
                            </div>
                            <div className="pairing-info">
                                <div className=" Body-1SemiBlackLeft pairing-icon">
                                    <img src={breweryMarkerIcon} alt="brewert-icon" />
                                    {item.brewery.name}
                                </div>

                                <div className="CaptionGreyLeft">
                                    <img src={locationIcon} alt="icon" />
                                    {item.brewery.location}
                                </div>
                                <div className="CaptionGreyLeft">
                                    <img src={timeIcon} alt="icon" />
                                    {
                                        item.timeDisplay && item.end_time &&
                                        ` ${moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(item.end_time).format("hh:mm a")}`
                                    }
                                </div>

                            </div>
                        </div>
                    </TitleLink>
                </Col>
            }

        })
    }
    componentDidMount() {
        this.isThisWeek(this.props.data.calendar)
    }

    render() {

        const { data } = this.props
        const { pairingsWeek, visiblePairing } = this.state

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Card onClick={() => this.togglePairing()} className="pairing-card-container" hoverable cover={
                    <div className="pairing-image"
                        style={{
                            backgroundImage: `url(${data.cover_photo ?
                                data.cover_photo[0].url :
                                homeImage})`
                        }}
                    />}
                >
                    <div className="meta-header">
                        <p className="Body-1SemiBlackLeft ">{data.name}</p>
                        <Rate disabled value={parseInt(data.avg_rating, 10)} />
                    </div>
                    <div className="meta-body">
                        <div className="logo">
                            <img alt="logo" src={data.logo ? data.logo[0].url : pairingMarkerIcon} />
                        </div>
                        <div className="bref">
                            <div className="text CaptionGreyLeft">
                                Serving at {pairingsWeek.length} locations
                        </div>
                            <div className="text CaptionGreyLeft">
                                {
                                    data.start_time && data.end_time &&
                                    ` ${moment(data.start_time).format("MMM DD")}, ${moment(data.start_time).format("hh:mm a")} - ${moment(data.end_time).format("hh:mm a")}`
                                }
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Modal pairing list */}
                {
                    pairingsWeek && pairingsWeek.length > 0 ?
                        <Modal
                            style={{ top: 20 }}
                            width={800}
                            closable={false}
                            visible={visiblePairing}
                            title='' footer={null}
                            onCancel={() => this.togglePairing()}
                            className="pairing-modal"
                        >
                            <div className="title-pairing Display-2BlackLeft">
                                <span> Pairing list of   </span>
                                <span> <TitleLink
                                    url="/food-truck/"
                                    title={data.name} id={data.id}>{data.name}
                                </TitleLink></span>
                                <span> in this week
                            </span>
                            </div>
                            <Row gutter={16}>
                                {
                                    this.renderPairingWeek(pairingsWeek)
                                }
                            </Row>
                        </Modal > :
                        <Modal

                            closable={false}
                            visible={visiblePairing}
                            title='' footer={null}
                            onCancel={() => this.togglePairing()}
                            className="pairing-modal"
                        >
                            <div className="announce-modal-container">
                                <div className='logo-container'><img alt='logo' src={logo} /></div>
                                <div className='Regular-24px-Style message'>
                                    <span> <TitleLink
                                        url="/food-truck/"
                                        title={data.name} id={data.id}>{data.name}
                                    </TitleLink> has no pairings in this week</span>
                                </div>
                            </div>
                        </Modal >
                }

            </div>


        )
    }
}

export default PairingCard;
