import React, { Component } from 'react';
import { Rate, Modal, Col, Row } from 'antd'
import { Link } from 'routes'
import TitleLink from '../titleLink'

import moment from 'moment'
import { getSchedule } from '../../../../global'
const homeImage = ("/static/images/home-image.jpg")
const pairingMarkerIcon = ('/static/images/pairing-marker-icon.png')
const defaultImage = ("/static/images/default-image.png")
const eventMarkerIcon = ('/static/images/event-marker-icon.png')
const breweryMarkerIcon = ('/static/images/brewery-marker-icon.png')
const locationIcon = ('/static/images/location-icon.png')
const timeIcon = ('/static/images/time-icon.png')
const logo = ("/static/images/logo-vertical.png")
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
            if (moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").isSame(new Date(), "week"))
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
                    <Link to={"/brewery/" + item.brewery.slug} >
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
                    </Link>
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

                <a onClick={() => this.togglePairing()}>
    
                    <div className="pairing-new-card-container" >
                        <div className="pairing-image-container">
                            <img src={data.cover_photo ?
                                data.cover_photo[0].url :
                                homeImage} alt="truck" />
                        </div>
                        <div className="pairing-info-container">
                            <img className="pairing-logo" src={data.logo ? data.logo[0].url : pairingMarkerIcon} alt="logo-pairing" />
                            <div className=" Body-1SemiBlackLeft">{data.name}</div>
                            <div className="cuisine-tag">
                                <div  className="cuisine-tag-item CaptionGreyLeft">
                                    Serving at {pairingsWeek.length} locations</div>
                                
                            </div>
                            <Rate disabled value={parseInt(data.avg_rating, 10)} />
                        </div>
                    </div>
                </a>

           
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
                                <span> <Link
                                    to={"/food-truck/" + data.slug}
                                ><a>{data.name}</a>
                                </Link></span>
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
                                    <span> <Link
                                        to={"/food-truck/" + data.slug}
                                    ><a>{data.name}</a>
                                    </Link> has no pairings in this week</span>
                                </div>
                            </div>
                        </Modal >
                }

            </div>


        )
    }
}

export default PairingCard;
