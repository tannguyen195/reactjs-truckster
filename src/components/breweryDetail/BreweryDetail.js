import React, { Component } from 'react';
import { Row, Col, Rate, Anchor, Spin, Card, Icon, Tooltip } from 'antd';
import { Link } from 'routes'
import Map from '../common/map/Map'
import ReviewModifyContainer from '../common/reviewModify/ReviewModifyContainer'
import ReviewSummary from '../common/reviewSummary/ReviewSummary'
import UserReview from '../common/userReview/UserReview'
import Calendar from '../common/calendar/Calendar'
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
import _ from "lodash";
import { getSchedule } from '../../../global'

const imageBreweryPlaceholder = ("/static/images/image_brewery_placeholder.png")
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
const breweryIcon = ('/static/images/brewery-marker-icon.png')

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
    renderSuggestBrewery(suggestBrewery) {
      
        return suggestBrewery.map((item, index) => {
            let coverURL = "", logoURL = ""
            if (typeof (item.cover_photo) !== 'string') {
                coverURL = item.cover_photo
                logoURL = item.logo
            }
            else {
                coverURL = JSON.parse(item.cover_photo)
                logoURL = JSON.parse(item.logo)
            }
            
            if (item && index < 3)
                return <Col key={index} style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <TruckNewCard data={
                        {
                            url: "/brewery/" + item.slug,
                            image: item.cover_photo ?
                                coverURL[0].url : breweryIcon,
                            logo: item.logo && item.logo !== "null" && logoURL[0].thumbnails ?
                                logoURL[0].thumbnails.large.url :
                                imageBreweryPlaceholder,
                            name: item.name,
                            cuisine: item.brewery_type && [{ name: item.brewery_type.name }],
                            rating: parseFloat((Math.round(item.rating * 2) / 2).toFixed(1), 10)
                        }
                    } />
                </Col>
        })
    }

    renderBreweryDetail(breweryDetail) {
        let rateNum = parseFloat((Math.round(breweryDetail.rating * 2) / 2).toFixed(1), 10)
        const { isPairing, toggleShareModal, suggestBrewery, isLoggedIn, onFavoriteChange, favorite } = this.props
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
                                <h1 className="DisplayWhiteLeft name ">  {breweryDetail.name}</h1>
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
                                        <Link prefetch to={`/brewery-type/${breweryDetail.breweries_type && breweryDetail.breweries_type.name}`}>
                                            <a className="tag-item Body-1MediumBlackCenter">
                                                {breweryDetail.breweries_type && breweryDetail.breweries_type.name} </a>
                                        </Link>
                                    </div>
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

                            <div id="reviews" className="review-brewery">
                                <ReviewSummary summary={breweryDetail.reviews_summary} />
                                <ReviewModifyContainer detail={breweryDetail} {...this.props} />
                                <UserReview reviews={breweryDetail.reviews_detail} />
                            </div>


                            {/* Suggest Section */}
                            {
                                suggestBrewery &&
                                <div>
                                    <div className="menu-title Display-2BlackLeft">You Might Also Like</div>

                                    <Row gutter={16} className="suggest-brewery">
                                        {this.renderSuggestBrewery(suggestBrewery)}
                                    </Row>
                                </div>
                            }

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
