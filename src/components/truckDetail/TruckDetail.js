import React, { Component } from 'react';
import { Row, Col, Rate, Anchor, Spin, Button, Tooltip, Icon, Card, Menu, Radio, Affix } from 'antd';
import { Link } from 'routes'
import Map from '../common/map/Map'
import ReviewModifyContainer from '../common/reviewModify/ReviewModifyContainer'
import ReviewSummary from '../common/reviewSummary/ReviewSummary'
import UserReview from '../common/userReview/UserReview'
import moment from 'moment'
import Calendar from '../common/calendar/Calendar'
import TruckCard from '../common/truckCard/TruckCard'
import _ from "lodash";
import { isMobile } from 'react-device-detect';
const cateringIcon = '/static/images/catering-icon.svg'
const LinkAnchor = Anchor.Link;

const closeIcon = ("/static/images/close-icon.svg")
const homeImage = ("/static/images/home-image.jpg")
const shareIcon = ('/static/images/share-icon.png')
const timeIcon = ('/static/images/time-icon.png')
const mailIcon = ('/static/images/mail-icon.png')
const phoneIcon = ('/static/images/phone-icon.png')
const facebookIconWhite = ('/static/images/facebook-icon-white.svg')
const instagramIconWhite = ('/static/images/instagram-icon-white.svg')
const twitterIconWhite = ('/static/images/twitter-icon-white.svg')
const websiteIcon = ('/static/images/website-icon.svg')

import CateringContainer from '../catering/CateringContainer'

class TruckDetail extends Component {

    renderSchedule() {
        const { handleClickSchedule, iconMarker, locationArr, locations, handleModeChange, mode, events, handleClickEvent, selectedKey } = this.props

        return <div>
            <div className="detail-time">
                <div className="detail-time-left">
                    <div className="time">
                        <img alt="back" src={timeIcon} />
                    </div>
                    <div className="Body-1MediumBlackLeft">
                        Open time  </div>

                </div>
                <div className="detail-time-right">
                    <Radio.Group onChange={handleModeChange} value={mode}>
                        <Radio.Button className="Body-1MediumBlackLeft radio-button" value="upcoming">UPCOMING</Radio.Button>
                        <Radio.Button className="Body-1MediumBlackLeft radio-button" value="month">MONTH</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            {
                mode === "upcoming" ? <div>
                    {
                        locations.length > 0 ? <Row className="detail-schedule">
                            <Col className="schedule" xs={24} sm={24} lg={6} md={6}>
                                <Menu
                                    selectedKeys={[selectedKey]}
                                    defaultSelectedKeys={[locations[0].index]}
                                    onClick={(e) => handleClickSchedule(e)}
                                >
                                    {
                                        locations.map((item, index) => {
                                            return <Menu.Item key={item.index}>
                                                <div className='schedule-item'>
                                                    <div className="weekday CaptionGreyLeft">
                                                        {moment(item.timeDisplay, "YYYY-MM-DD h:mm a").format("dddd, MMM DD, YYYY")}
                                                    </div>
                                                    <div className="time CaptionBlackLeft">
                                                        {moment(item.start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} -
                                             {moment(item.end_time).format("h:mm a")}</div>
                                                </div>
                                            </Menu.Item>
                                        })
                                    }

                                </Menu>
                            </Col>
                            <Col className="schedule" xs={24} sm={24} lg={18} md={18}>
                                <div className="map" >
                                    <Map icon={iconMarker} location={locationArr} />
                                </div>
                            </Col>
                        </Row> : <div className="no-schedule">There are no upcoming schedules for this truck </div>
                    }
                </div> : <div className="detail-schedule">
                        <Calendar handleClickEvent={handleClickEvent} events={events} />
                    </div>
            }


        </div>
    }
    renderInfo(truckDetail) {
        return <div >

            <div className="contact highlight">
                <p className="ButtonGreyLeft">CONTACTS</p>
                {
                    truckDetail.contact_email && <div className="location">
                        <img alt="mail" src={mailIcon} />
                        <a href={`mailto:${truckDetail.contact_email}`} className="Body-2GreyLeft">{truckDetail.contact_email}</a>
                    </div>
                }

                {
                    truckDetail.phone && <div className="location">
                        <img alt="phone" src={phoneIcon} />
                        <a href={`tel:${truckDetail.phone}`} className="Body-2GreyLeft">{truckDetail.phone}</a>
                    </div>
                }
                {
                    truckDetail.website_url && <div className="location">

                        <img alt="back" src={websiteIcon} />
                        <a onClick={() => {
                            window.open(truckDetail.website_url.includes("http") ?
                                truckDetail.website_url : "http://" + truckDetail.website_url)
                        }}
                            className="Body-1RegularGrayLeft" >{truckDetail.website_url}</a>


                    </div>

                }
                <div className="social">
                    {
                        truckDetail.facebook_url && <a target="_blank" href={truckDetail.facebook_url} className='image-holder'>
                            <img alt="facebook" src={facebookIconWhite} />
                        </a>
                    }
                    {
                        truckDetail.instagram_url && <a target="_blank" href={truckDetail.instagram_url} className='image-holder'>
                            <img alt="instagram" src={instagramIconWhite} />
                        </a>
                    }
                    {
                        truckDetail.twitter_url && <a target="_blank" href={truckDetail.twitter_url} className='image-holder'>
                            <img alt="twitter" src={twitterIconWhite} />
                        </a>
                    }

                </div>
            </div>
            <div className="contact highlight">
                <p className="ButtonGreyLeft">INTRODUCTION</p>
                <div className="Body-1RegularGrayLeft intro">{truckDetail.company_description}</div>

            </div>
        </div>
    }
    renderOrderDetail() {
        const { order, handleRemoveMenuItem, handleRemoveOne, handleAddOne } = this.props
        return order.map((item, index) => {
            return <div key={item.id} className="order-item-container">

                <div className="order-item-header">
                    <div className="Body-1RegularGrayLeft">
                        {item.name}
                    </div>
                    <img onClick={() => handleRemoveMenuItem(item)} alt="close" src={closeIcon} />
                </div>

                <div className="order-item-header">
                    <Button.Group className="order-item-count" size="small">
                        <Button disabled={item.count === 1} onClick={() => handleRemoveOne(item)} >
                            <Icon type="minus" />    </Button>
                        <Button >
                            {item.count}</Button>
                        <Button onClick={() => handleAddOne(item)}>
                            <Icon type="plus" />
                        </Button>
                    </Button.Group>
                    <div className="Body-1RegularBlackLeft">
                        ${item.price}
                    </div>
                </div>
                <hr />
            </div>

        })
    }
    renderMenu(truckMenu) {
        const { handleClickMenuItem } = this.props
        if (truckMenu.category)
            return Object.entries(truckMenu.category).map((category, categoryidx) =>
                <div key={categoryidx} className="menu-container">
                    <div className="category-menu ">{category[0]}</div>
                    {
                        category[1].map((item, index) => {
                            return <div key={index} className="food" >
                                <div>
                                    <div className="name ">{item.name}</div>
                                    <div className="bref CaptionGreyLeft">{item.description}</div>
                                </div>
                                <div className="price Body-1MediumBlackLeft">
                                    {
                                        item.price && `$${item.price}`
                                    }
                                </div>

                            </div>
                        }
                        )
                    }

                </div>)
    }

    renderSuggestTruck(suggestTruck) {
        const { truckDetail } = this.props

        let tempArr = []
        suggestTruck.forEach(item => {
            if (item.id !== truckDetail.id)
                tempArr.push(item)
        })


        return tempArr.map((item, index) => {
            if (item && index < 3)
                return <Col key={index} style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <TruckCard data={item} />
                </Col>
        })

    }
    renderTruckDetail(truckDetail) {
        let rateNum = parseFloat((Math.round(truckDetail.avg_rating * 2) / 2).toFixed(1), 10)
        const {
            isLoggedIn,
            onFavoriteChange,
            isPairing,
            toggleShareModal,
            favorite,
            suggestTruck
        } = this.props

        return (

            <div>
                <div className="detail-main-header" style={{ backgroundImage: `url(${truckDetail.cover_photo ? truckDetail.cover_photo[0].url : homeImage})` }} >
                    <div className="content-detail">
                        <div className="detail-wrapper">
                            <h1 className="DisplayWhiteLeft name">  {truckDetail.name}</h1>
                            <div className="detail-rate">
                                <div className="rate-number Body-1SemiBlackCenter">
                                    {isNaN(rateNum) ? 0 : rateNum}
                                </div>

                                <div className="rate-star">
                                    <Rate disabled value={isNaN(rateNum) ? 0 : rateNum} />
                                </div>
                                {/* <div className=" ButtonWhiteCenter">
                                        {truckDetail.reviews_summary.total_reviews} reviews  </div> */}


                            </div>
                            <div className="flex-row">
                                <div className="tag">
                                    {
                                        truckDetail.cuisine.map((item, index) => {
                                            return <Link prefetch key={index} to={`/cuisine/${item.name.toLowerCase()}`}>
                                                <a className="tag-item Body-1MediumBlackCenter">
                                                    {item.name} </a>
                                            </Link>
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="cover">
                        <div className="cover-mask"></div>
                    </div>
                </div>
                <div className="body-wrapper">
                    <div className="detail-body">
                        <div className="menu-anchor">
                            <Anchor offsetTop={isPairing ? 0 : 68}>
                                <LinkAnchor href="#info" title="Info" />
                                <LinkAnchor href="#menu" title="Menu" />
                                <LinkAnchor href="#reviews" title="Reviews" />
                                <span className="left-row">
                                    {
                                        !isLoggedIn ?
                                            <Tooltip title="Login required">
                                                <span>
                                                    <Rate disabled count={1} character={<Icon type="heart" />} />
                                                </span>
                                            </Tooltip>
                                            :
                                            <Rate value={favorite ? 1 : 0} onChange={onFavoriteChange}
                                                count={1}
                                                character={<Icon style={{
                                                    color: favorite ? '#f32126' : "#dadada"
                                                }} type="heart" />} />
                                    }
                                    <img onClick={(e) => toggleShareModal(window.location.href)} alt="back" src={shareIcon} />

                                </span>
                            </Anchor>

                        </div>

                        <div className="menu-content">
                            {
                                this.renderSchedule(truckDetail.calendar_detail)
                            }
                            {
                                this.renderInfo(truckDetail)
                            }

                            <hr />
                            {/* Menu Section */}
                            <div style={{ paddingBottom: 0 }} id="menu" className="menu-title Display-2BlackLeft">Menu</div>
                            <div className="menu-truck">
                                {truckDetail.menus[0] &&
                                    this.renderMenu(truckDetail.menus[0])
                                }
                            </div>

                            <hr />
                            {/* Review Section */}
                            <div className="menu-title Display-2BlackLeft">Reviews </div>

                            <div id="reviews" className="review-truck">
                                <ReviewSummary summary={truckDetail.reviews_summary} />
                                <ReviewModifyContainer detail={truckDetail} {...this.props} />
                                <UserReview reviews={truckDetail.reviews_detail} />
                            </div>

                            <hr />

                            {/* Suggest Section */}
                            {
                                suggestTruck &&
                                suggestTruck.length > 0 &&
                                <div>
                                    <div className="menu-title Display-2BlackLeft">You Might Also Like</div>
                                    <Row gutter={16} className="suggest-truck">
                                        {
                                            this.renderSuggestTruck(suggestTruck)
                                        }
                                    </Row>
                                </div>
                            }
                        </div>
                    </div>
                    <Affix style={{ position: 'relative', flex: 1 }} offsetTop={130}>
                        <div className='catering-section'>
                            <CateringContainer food_truck_id={truckDetail.id} toggleShareModal={toggleShareModal} />
                        </div>
                    </Affix>
                </div>
            </div>

        )
    }

    render() {
        const { truckDetail, isPairing, toggleCateringModal, visibleDeepLink } = this.props

        return (
            <div style={{ padding: isPairing && 0 }} className="truck-detail">

                {
                    truckDetail
                        ?

                        <div id="info" className="detail-container" >
                            {
                                this.renderTruckDetail(truckDetail)
                            }
                            <div onClick={toggleCateringModal} style={{ bottom: isMobile && visibleDeepLink ? 64 : 0 }} className="catering-responsive">
                                <div className="catering-inner ">

                                    <div className="ButtonWhiteRight">BOOK THIS TRUCK</div>
                                </div>
                            </div>
                        </div>

                        :
                        <div className="loading-container">
                            <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
                        </div>
                }

            </div>
        )


    }
}

export default TruckDetail
