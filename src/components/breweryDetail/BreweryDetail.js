import React, { Component } from 'react';
import { Row, Col, Rate, Anchor, Spin, Card, Icon } from 'antd';
import { Link } from 'routes'

import Map from '../common/map/Map'
import ReviewModifyContainer from '../common/reviewModify/ReviewModifyContainer'
import ReviewSummary from '../common/reviewSummary/ReviewSummary'
import UserReview from '../common/userReview/UserReview'
import Calendar from '../common/calendar/Calendar'

import stylesheet from './_breweryDetail.less'

import { getSchedule } from '../../../global'
const LinkAnchor = Anchor.Link;
const shareIcon = ('/static/images/share-icon.png')
const websiteIcon = ('/static/images/website-icon.svg')
const locationIcon = ('/static/images/location-icon.png')
const homeImage = ("/static/images/home-image.jpg")
const mailIcon = ('/static/images/mail-icon.png')
const phoneIcon = ('/static/images/phone-icon.png')
const facebookIconWhite = ('/static/images/facebook-icon-white.svg')
const instagramIconWhite = ('/static/images/instagram-icon-white.svg')
const twitterIconWhite = ('/static/images/twitter-icon-white.svg')

class BreweryDetail extends Component {

    renderInfo(breweryDetail) {
        const { isPairing, coordinate, latitude, longtitude } = this.props

        return <div >
            <Row gutter={30}>
                <Col lg={14} md={14}>
                    {
                        breweryDetail.location && <div className="detail-time">
                            <div className="time">
                                <img alt="back" src={locationIcon} />
                                <div>{breweryDetail.location}</div>
                            </div>

                        </div>
                    }
                    {
                        breweryDetail.phone && <div className="detail-time">
                            <div className="time">
                                <img alt="back" src={phoneIcon} />
                                <a className="Body-1RegularGrayLeft" href={`tel:${breweryDetail.phone}`}>{breweryDetail.phone}</a>
                            </div>

                        </div>
                    }
                    {
                        breweryDetail.email && <div className="detail-time">
                            <div className="time">
                                <img alt="back" src={mailIcon} />
                                <a className="Body-1RegularGrayLeft" href={`mailto:${breweryDetail.email}`}>{breweryDetail.email}</a>
                            </div>

                        </div>
                    }
                    {
                        breweryDetail.website_url && <div className="detail-time">
                            <div className="time">
                                <img alt="back" src={websiteIcon} />
                                <a onClick={() => {
                                    window.open(breweryDetail.website_url.includes("http") ?
                                        breweryDetail.website_url : "http://" + breweryDetail.website_url)
                                }}
                                    className="Body-1RegularGrayLeft" >{breweryDetail.website_url}</a>
                            </div>

                        </div>

                    }

                    <div className="contact">
                        <div className="social">
                            {
                                breweryDetail.facebook_url && <a target="_blank" href={breweryDetail.facebook_url}
                                    className='image-holder'>
                                    <img alt="facebook" src={facebookIconWhite} />
                                </a>
                            }
                            {
                                breweryDetail.instagram_url && <a target="_blank" href={breweryDetail.instagram_url}
                                    className='image-holder'>
                                    <img alt="instagram" src={instagramIconWhite} />
                                </a>
                            }
                            {
                                breweryDetail.twitter_url && <a target="_blank" href={breweryDetail.twitter_url} className='image-holder'>
                                    <img alt="twitter" src={twitterIconWhite} />
                                </a>
                            }

                        </div>

                    </div></Col>
                <Col lg={10} md={10}> <div className="map" >
                    <Map icon="brewery" location={isPairing ? [coordinate] : [{
                        latitude: latitude,
                        longtitude: longtitude,
                        address: breweryDetail.location
                    }]} />
                </div></Col>
            </Row>

            <div className="contact intro">
                <p className="ButtonGreyLeft">INTRODUCTION</p>
                <div className="Body-1RegularGrayLeft">{breweryDetail.company_description}</div>

            </div>

            <div className="contact intro">
                <p className="ButtonGreyLeft">SCHEDULE</p>
                {
                    breweryDetail.calendar && breweryDetail.calendar.length > 0 ?
                        <Calendar events={getSchedule(breweryDetail.calendar)} /> :
                        <div className="no-schedule">This brewery doesn’t have any food trucks scheduled this month </div>
                }

            </div>
        </div>
    }

    renderMenu(breweryMenu) {
        return breweryMenu.map((item, index) => {
            return <Col key={index} className="food" sm={24} md={24} lg={24}>
                <Card hoverable>
                    <div className="name Body-1MediumBlackLeft">{item.name}</div>
                    <div className="bref CaptionGreyLeft">{item.description}</div>
                    <div className="price Body-1MediumBlackLeft">
                        {
                            item.abv && `${item.abv}%`
                        }
                    </div>
                </Card>
            </Col>
        }
        )
    }

    renderBreweryDetail(breweryDetail) {
        let rateNum = parseFloat((Math.round(breweryDetail.rating * 2) / 2).toFixed(1), 10)
        const { isPairing, toggleShareModal, reviews } = this.props
        return (
            <div>
                <div>
                    <div className="detail-main-header"
                        style={{
                            backgroundImage: `url(${breweryDetail.cover_photo ?
                                breweryDetail.cover_photo[0].url : homeImage})`
                        }} >
                        <div className="content-detail">
                            <div className="detail-wrapper">
                                <div className="DisplayWhiteLeft name ">  {breweryDetail.name}</div>
                                <div className="detail-rate">
                                    <div className="rate-number Body-1SemiBlackCenter">
                                        {breweryDetail.rating}
                                    </div>

                                    <div className="rate-star">
                                        <Rate disabled value={isNaN(rateNum) ? 0 : rateNum} />
                                    </div>

                                </div>
                                <div className="flex-row">
                                    <div className="tag">

                                        <Link to={`/brewery/type/${breweryDetail.breweries_type && breweryDetail.breweries_type.name}`}>
                                            <a className="tag-item Body-1MediumBlackCenter">
                                                {breweryDetail.breweries_type && breweryDetail.breweries_type.name} </a>

                                        </Link>

                                    </div>
                                    <span className="left-row">

                                        <img onClick={(e) => toggleShareModal(window.location.href)} alt="back" src={shareIcon} />

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="cover-mask"></div>
                        </div>
                    </div>
                    <div className="body-wrapper">

                        <div className="menu-anchor">
                            <Anchor offsetTop={isPairing ? 0 : 68}>
                                <LinkAnchor href="#info" title="Info" />
                                <LinkAnchor href="#menu" title="Menu" />
                                <LinkAnchor href="#reviews" title="Review" />
                            </Anchor>
                        </div>

                        <div className="menu-content">

                            {
                                this.renderInfo(breweryDetail)
                            }
                            <div id="menu" className="menu-title Display-2BlackLeft">Menu</div>
                            <div className="menu-brewery">
                                <Row className="menu-container" gutter={25}>
                                    {breweryDetail.menus[0] &&
                                        this.renderMenu(breweryDetail.menus[0].brewery_items)
                                    }
                                </Row>
                            </div>

                            <div className="menu-title Display-2BlackLeft">Reviews </div>

                            <div id="reviews" className="review-truck">
                                <ReviewSummary summary={breweryDetail.reviews_summary} />
                                <ReviewModifyContainer detail={breweryDetail} {...this.props} />
                                <UserReview reviews={reviews} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { breweryDetail, isPairing } = this.props
        return (
            <div style={{ padding: isPairing && 0 }} className="brewery-detail">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="info" className="detail-container" >
                    {
                        this.renderBreweryDetail(breweryDetail)
                    }
                </div>



            </div>
        )


    }
}

export default BreweryDetail
