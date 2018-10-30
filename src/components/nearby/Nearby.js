import React, { Component } from 'react';
import { Row, Col, Switch, Icon, Rate, Button } from 'antd';

import RenderContainer from '../common/renderContainer/RenderContainer'
import moment from 'moment'
import GoogleMapReact from 'google-map-react';
import { Link, Router } from 'routes'
import AnnounceNearbyModal from './AnnounceNearbyModal'
import TitleLink from '../common/titleLink'
import MediaQuery from 'react-responsive'
const homeImage = ("/static/images/home-image.jpg")
const mapMarker = ('/static/images/map-marker-icon.svg')
const truckGreyIcon = ('/static/images/truck-grey-icon.svg')
const websiteIcon = ('/static/images/website-icon.svg')
const backIcon = ("/static/images/back-icon.png")
const defaultImage = ("/static/images/default-image.png")
const eventMarkerIcon = ('/static/images/event-marker-icon.png')
const pairingMarkerIcon = ('/static/images/pairing-marker-icon.png')
const truckMarkerIcon = ('/static/images/truck-marker-icon.png')
const locationIcon = ('/static/images/location-icon.png')
const timeIcon = ('/static/images/time-icon.png')
const mailIcon = ('/static/images/mail-icon.png')
const phoneIcon = ('/static/images/phone-icon.png')
const facebookIconWhite = ('/static/images/facebook-icon-white.svg')
const instagramIconWhite = ('/static/images/instagram-icon-white.svg')
const twitterIconWhite = ('/static/images/twitter-icon-white.svg')


const MarkerCustom = ({ info, icon, visible, handleClickMarker }) => {
 
    let url = ""
    switch (info.type) {
        case "brewery":
            url = "/brewery/" + info.brewery.slug
            break;
        case "activity":
            url = "/event/" + info.activity.name + "--" + info.activity.id
            break;
        case "food_truck":
            url = "/food-truck/" + info.food_truck.slug
            break;
        case "pairing-brewery":
            url = "/brewery/" + info.brewery.slug
            break;
        case "pairing-activity":
            url = "/event/" + info.activity.name + "--" + info.activity.id
            break;
        default: break;
    }
    return <div onClick={() => handleClickMarker(info)} className="marker-container">
        <div>
            <img width={36} alt="marker" src={icon} />
        </div>
        <div style={{
            opacity: visible ? 1 : 0,
            visibility: visible ? "visible" : "hidden",
            zIndex: visible && 10,
            transform: visible && 'translate(0, -20px)',
            transition: visible && " all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)"
        }} className="push popover__content">

            <a className=" SubheadingBlackLeft">{info.nameDisplay}</a>

            <div className="popover-info">
                <img src={info.image} alt="popover-icon" />
                <div className="popover-text">
                    <div className="address Body-1RegularBlackLeft">
                        {info.addressDisplay}
                    </div>
                    <div className="time CaptionGreyLeft">
                        {moment(info.timeDisplay, "YYYY-MM-DD h:mm a").format("ddd, MMMM DD")}   {moment(info.start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} - {moment(info.end_time).format("h:mm a")}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const listFilterItem = ["Food truck", "Event", "Pairing"]

const filterItem = (title, key, onChange, isLoadingGetNearby) => {
    return <div key={key} className="filter-item">
        <div className="Body-1SemiBlackLeft"> <img alt="marker"
            src={key === 0 ?
                truckMarkerIcon : key === 1 ?
                    eventMarkerIcon : pairingMarkerIcon} />{title}</div>
        <Switch
            loading={isLoadingGetNearby}
            onChange={(e) => onChange(e, key)}
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="cross" />}
            defaultChecked />
    </div>
}

class Nearby extends Component {

    renderMarker(data) {
        const { currentHoverItem, onVisibleChange, handleClickMarker } = this.props

        return data.map((event, idx) => {
            if (event) {
                return event.map((item, index) => {
                    return <MarkerCustom
                        key={index}

                        onVisibleChange={() => onVisibleChange(item.id.toString())}
                        visible={item.id.toString() === currentHoverItem ? true : false}
                        info={item}
                        handleClickMarker={handleClickMarker}
                        icon={item.marker}
                        lat={parseFloat(item.latitude)}
                        lng={parseFloat(item.longtitude)} />

                })
            }
            else return null
        })
    }
    renderEventResponsiveCard(events) {

        const {  handleClickNearbyEventResponsive } = this.props
        return events.map((event, index) => {

            if (event)
                return event.map((item, idx) => {
                    return <div
                        onClick={(e) => handleClickNearbyEventResponsive(item)}
                        className="nearby-events"


                        id={item.id} key={idx} >
                        <div id={item.id} className="pairing-item-container">
                            <div id={item.id} className="pairing-image">
                                <img id={item.id} alt="pairing-icon" src={item.image ? item.image : defaultImage} />
                            </div>
                            <div id={item.id} className="pairing-info">
                                <div id={item.id} className=" Body-1SemiBlackLeft pairing-icon">
                                    <img id={item.id} src={item.marker} alt="pairing-icon" />
                                    {item.nameDisplay}
                                </div>

                                <div id={item.id} className="pairing-item-bref CaptionGreyLeft">
                                    <img id={item.id} src={item.type === "pairing-brewery" ? truckGreyIcon : locationIcon} alt="icon" />
                                    {item.type === "pairing-brewery" ? item.food_truck.name : item.addressDisplay}
                                </div>
                                <div id={item.id} className="pairing-item-bref CaptionGreyLeft">
                                    <img src={timeIcon} alt="icon" />
                                    {
                                        item.timeDisplay && item.end_time &&
                                        ` ${moment(item.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD")}, ${moment(item.start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} - ${moment(item.end_time).format("h:mm a")}`
                                    }
                                </div>

                            </div>
                        </div>

                    </div>
                })
            else return null
        })
    }
    renderEventCard(events) {

        const { onEventEnter, onEventLeave, handleClickNearbyEvent } = this.props
        return events.map((event, index) => {

            if (event)
                return event.map((item, idx) => {
                    return <div onClick={(e) => handleClickNearbyEvent(item)} className="nearby-events"
                        onMouseLeave={onEventLeave}
                        onMouseEnter={onEventEnter}

                        id={item.id} key={idx} >
                        <div id={item.id} className="pairing-item-container">
                            <div id={item.id} className="pairing-image">
                                <img id={item.id} alt="pairing-icon" src={item.image ? item.image : defaultImage} />
                            </div>
                            <div id={item.id} className="pairing-info">
                                <div id={item.id} className=" Body-1SemiBlackLeft pairing-icon">
                                    <img id={item.id} src={item.marker} alt="pairing-icon" />
                                    {item.nameDisplay}
                                </div>

                                <div id={item.id} className="pairing-item-bref CaptionGreyLeft">
                                    <img id={item.id} src={item.type === "pairing-brewery" ? truckGreyIcon : locationIcon} alt="icon" />
                                    {item.type === "pairing-brewery" ? item.food_truck.name : item.addressDisplay}
                                </div>
                                <div id={item.id} className="pairing-item-bref CaptionGreyLeft">
                                    <img src={timeIcon} alt="icon" />
                                    {
                                        item.timeDisplay && item.end_time &&
                                        ` ${moment(item.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD")}, ${moment(item.start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} - ${moment(item.end_time).format("h:mm a")}`
                                    }
                                </div>

                            </div>
                        </div>

                    </div>
                })
            else return null
        })
    }
    renderTruckCard(data) {
        return <Link prefetch to={"/food-truck/" + data.slug} key={data.key}>
            <div className="truck-event-card-container" >
                <div className="truck-image-container">
                    <img src={data.image} alt="truck" />
                </div>
                <div className="truck-info-container">
                    <img className="truck-logo" src={data.logo} alt="logo-truck" />
                    <div className=" Body-1SemiBlackLeft">{data.name}</div>
                    <div className="cuisine-tag">
                        {
                            data.cuisine.map((item, index) => {
                                if (index === 0)
                                    return <div key={index} className="cuisine-tag-item CaptionGreyLeft">
                                        {item.name} </div>
                                else return <div key={index} className="cuisine-tag-item CaptionGreyLeft">
                                    <span>&bull;</span>   {item.name} </div>
                            })
                        }
                    </div>
                    <Rate disabled value={parseInt(data.rating, 10)} />
                </div>
            </div>
        </Link>
    }
    renderFoodTruck(data) {
        const { handleClickBack } = this.props
        let rateNum = parseFloat((Math.round(parseFloat(data.food_truck.avg_rating) * 2) / 2).toFixed(1), 10)
        return <div className="nearby-event-detail-container">
            <div className="nearby-event-detail-food-truck">
                <div className="image-container">
                    <img src={data.image} alt="event" />
                </div>
                <div className="mask-container">
                    <img onClick={() => handleClickBack()} src={backIcon} alt="back" />

                    <div className="nearby-bref">
                        <Link prefetch to={"/food-truck/" + data.food_truck.slug} >
                            <a className="Display-2WhiteLeft">{data.nameDisplay}</a>
                        </Link>
                        {
                            rateNum && <div className="detail-rate">
                                <div className="rate-number Body-1SemiBlackCenter">
                                    {isNaN(rateNum) ? 0 : rateNum}
                                </div>

                                <div className="rate-star">
                                    <Rate disabled value={isNaN(rateNum) ? 0 : rateNum} />
                                </div>

                            </div>
                        }

                        <div className="tag">
                            {
                                data.food_truck.cuisine.map((item, index) => {
                                    return <Link prefetch key={index} to={`/cuisine/${item.name.toLowerCase()}`}>
                                        <a className="tag-item Body-1MediumBlackCenter">
                                            {item.name} </a>
                                    </Link>
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="nearby-event-body">
                    <div className="contact ">
                        <p className="ButtonGreyLeft">OPEN TIME</p>
                        <div className="location">
                            <img alt="mail" src={timeIcon} />
                            {
                                data.timeDisplay && data.end_time &&
                                ` ${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a")} - ${moment(data.end_time).format("h:mm a")}`
                            }
                        </div>
                        <div className="location">
                            <img alt="mail" src={locationIcon} />
                            {data.addressDisplay}
                        </div>


                    </div>
                    <div className="contact ">
                        <p className="ButtonGreyLeft">CONTACTS</p>
                        {
                            data.food_truck.contact_email && <div className="location">
                                <img alt="mail" src={mailIcon} />
                                <a href={`mailto:${data.food_truck.contact_email}`} className="Body-2GreyLeft">{data.food_truck.contact_email}</a>
                            </div>
                        }

                        {
                            data.food_truck.phone && <div className="location">
                                <img alt="phone" src={phoneIcon} />
                                <a href={`tel:${data.food_truck.phone}`} className="Body-2GreyLeft">{data.food_truck.phone}</a>
                            </div>
                        }

                        <div className="social">
                            {
                                data.food_truck.facebook_url && <a target="_blank" href={data.food_truck.facebook_url} className='image-holder'>
                                    <img alt="facebook" src={facebookIconWhite} />
                                </a>
                            }
                            {
                                data.food_truck.instagram_url && <a target="_blank" href={data.food_truck.instagram_url} className='image-holder'>
                                    <img alt="instagram" src={instagramIconWhite} />
                                </a>
                            }
                            {
                                data.food_truck.twitter_url && <a target="_blank" href={data.food_truck.twitter_url} className='image-holder'>
                                    <img alt="twitter" src={twitterIconWhite} />
                                </a>
                            }

                        </div>
                    </div>
                    <div className="contact ">
                        <p className="ButtonGreyLeft">INTRODUCTION</p>
                        <div className="Body-1RegularGrayLeft intro">{data.food_truck.company_description}</div>

                    </div>
                </div>
            </div>
        </div>
    }
    renderBrewery(data) {
        const { handleClickBack } = this.props
        let rateNum = parseFloat((Math.round(parseFloat(data.brewery.rating) * 2) / 2).toFixed(1), 10)
        return <div className="nearby-event-detail-container">
            <div className="nearby-event-detail-food-truck">
                <div className="image-container">
                    <img src={data.image} alt="event" />
                </div>
                <div className="mask-container">
                    <img onClick={() => handleClickBack()} src={backIcon} alt="back" />

                    <div className="nearby-bref">
                        <Link prefetch to={"/brewery/" + data.brewery.slug} >
                            <a className="Display-2WhiteLeft">{data.nameDisplay}</a>
                        </Link>
                        {
                            rateNum && <div className="detail-rate">
                                <div className="rate-number Body-1SemiBlackCenter">
                                    {isNaN(rateNum) ? 0 : rateNum}
                                </div>

                                <div className="rate-star">
                                    <Rate disabled value={isNaN(rateNum) ? 0 : rateNum} />
                                </div>

                            </div>
                        }

                        <div className="tag">

                            <Link prefetch to={`/brewery-type/${data.brewery.breweries_type && data.brewery.breweries_type.name}`}>
                                <a className="tag-item Body-1MediumBlackCenter">
                                    {data.brewery.breweries_type && data.brewery.breweries_type.name} </a>

                            </Link>

                        </div>

                    </div>
                </div>
                <div className="nearby-event-body">
                    <div className="contact ">
                        <p className="ButtonGreyLeft">OPEN TIME</p>
                        <div className="location">
                            <img alt="mail" src={timeIcon} />
                            {
                                data.timeDisplay && data.end_time &&
                                ` ${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a")} - ${moment(data.end_time).format("h:mm a")}`
                            }
                        </div>
                        <div className="location">
                            <img alt="mail" src={locationIcon} />
                            {data.addressDisplay}
                        </div>


                    </div>
                    <div className="contact ">
                        <p className="ButtonGreyLeft">CONTACTS</p>
                        {
                            data.brewery.contact_email && <div className="location">
                                <img alt="mail" src={mailIcon} />
                                <a href={`mailto:${data.brewery.contact_email}`} className="Body-2GreyLeft">{data.brewery.contact_email}</a>
                            </div>
                        }

                        {
                            data.brewery.phone && <div className="location">
                                <img alt="phone" src={phoneIcon} />
                                <a href={`tel:${data.brewery.phone}`} className="Body-2GreyLeft">{data.brewery.phone}</a>
                            </div>
                        }
                        {
                            data.brewery.website_url && <div className="location">
                                <img alt="website" src={websiteIcon} />
                                <a onClick={() => {
                                    window.open(data.brewery.website_url.includes("http") ?
                                        data.brewery.website_url : "http://" + data.brewery.website_url)
                                }}
                                    className="Body-1RegularGrayLeft" >{data.brewery.website_url}</a>
                            </div>
                        }
                        <div className="social">
                            {
                                data.brewery.facebook_url && <a target="_blank" href={data.brewery.facebook_url} className='image-holder'>
                                    <img alt="facebook" src={facebookIconWhite} />
                                </a>
                            }
                            {
                                data.brewery.instagram_url && <a target="_blank" href={data.brewery.instagram_url} className='image-holder'>
                                    <img alt="instagram" src={instagramIconWhite} />
                                </a>
                            }
                            {
                                data.brewery.twitter_url && <a target="_blank" href={data.brewery.twitter_url} className='image-holder'>
                                    <img alt="twitter" src={twitterIconWhite} />
                                </a>
                            }

                        </div>
                    </div>
                    <div className="contact ">
                        <p className="ButtonGreyLeft">INTRODUCTION</p>
                        <div className="Body-1RegularGrayLeft intro">{data.brewery.company_description}</div>

                    </div>
                </div>
            </div>
        </div>
    }
    renderPairingBrewery(data, trucks) {
        const { handleClickBack } = this.props
        let rateNum = parseFloat((Math.round(parseFloat(data.brewery.rating) * 2) / 2).toFixed(1), 10)
        return <div className="nearby-event-detail-container">
            <div className="nearby-event-detail-food-truck">
                <div className="image-container">
                    <img src={data.image} alt="event" />
                </div>
                <div className="mask-container">
                    <img onClick={() => handleClickBack()} src={backIcon} alt="back" />

                    <div className="nearby-bref">
                        <Link prefetch to={"/brewery/" + data.brewery.slug} >
                            <a className="Display-2WhiteLeft">{data.nameDisplay}</a>
                        </Link>
                        {
                            rateNum && <div className="detail-rate">
                                <div className="rate-number Body-1SemiBlackCenter">
                                    {isNaN(rateNum) ? 0 : rateNum}
                                </div>

                                <div className="rate-star">
                                    <Rate disabled value={isNaN(rateNum) ? 0 : rateNum} />
                                </div>

                            </div>
                        }

                        <div className="tag">

                            <Link prefetch to={`/brewery/type/${data.brewery.breweries_type && data.brewery.breweries_type.name}`}>
                                <div className="tag-item Body-1MediumBlackCenter">
                                    {data.brewery.breweries_type && data.brewery.breweries_type.name} </div>

                            </Link>

                        </div>

                    </div>
                </div>
                <div className="nearby-event-body">
                    <div className="contact ">
                        <p className="ButtonGreyLeft">OPEN TIME</p>
                        <div className="location">
                            <img alt="mail" src={timeIcon} />
                            {
                                data.timeDisplay && data.end_time &&
                                ` ${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a")} - ${moment(data.end_time).format("h:mm a")}`
                            }
                        </div>
                        <div className="location">
                            <img alt="mail" src={locationIcon} />
                            {data.addressDisplay}
                        </div>


                    </div>
                    <div className="contact ">
                        <p className="ButtonGreyLeft">CONTACTS</p>
                        {
                            data.brewery.contact_email && <div className="location">
                                <img alt="mail" src={mailIcon} />
                                <a href={`mailto:${data.brewery.contact_email}`} className="Body-2GreyLeft">{data.brewery.contact_email}</a>
                            </div>
                        }

                        {
                            data.brewery.phone && <div className="location">
                                <img alt="phone" src={phoneIcon} />
                                <a href={`tel:${data.brewery.phone}`} className="Body-2GreyLeft">{data.brewery.phone}</a>
                            </div>
                        }
                        {
                            data.brewery.website_url && <div className="location">
                                <img alt="website" src={websiteIcon} />
                                <a onClick={() => {
                                    window.open(data.brewery.website_url.includes("http") ?
                                        data.brewery.website_url : "http://" + data.brewery.website_url)
                                }}
                                    className="Body-1RegularGrayLeft" >{data.brewery.website_url}</a>
                            </div>
                        }
                        <div className="social">
                            {
                                data.brewery.facebook_url && <a target="_blank" href={data.brewery.facebook_url} className='image-holder'>
                                    <img alt="facebook" src={facebookIconWhite} />
                                </a>
                            }
                            {
                                data.brewery.instagram_url && <a target="_blank" href={data.brewery.instagram_url} className='image-holder'>
                                    <img alt="instagram" src={instagramIconWhite} />
                                </a>
                            }
                            {
                                data.brewery.twitter_url && <a target="_blank" href={data.brewery.twitter_url} className='image-holder'>
                                    <img alt="twitter" src={twitterIconWhite} />
                                </a>
                            }

                        </div>
                    </div>
                    <div className="contact ">
                        <p className="ButtonGreyLeft">INTRODUCTION</p>
                        <div className="Body-1RegularGrayLeft intro">{data.brewery.company_description}</div>

                    </div>
                    <div>
                        <p className="ButtonGreyLeft">FOODTRUCK</p>
                        {
                            trucks.map((item, index) => {
                                return this.renderTruckCard({
                                    key: index,
                                    id: item.food_truck.id,
                                    image: item.food_truck.cover_photo ? item.food_truck.cover_photo[0].url : defaultImage,
                                    logo: item.food_truck.logo ? item.food_truck.logo[0].url : truckMarkerIcon,
                                    name: item.food_truck.name,
                                    rating: item.food_truck.avg_rating,
                                    cuisine: item.food_truck.cuisine,
                                    slug: item.food_truck.slug
                                })
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    }
    renderPairingActivity(data, trucks) {
        const { handleClickBack } = this.props
        return <div className="nearby-event-detail-container">
            <div className="nearby-event-detail-activity">
                <div className="image-activity-container">
                    <img src={data.image} alt="event" />
                </div>
                <div className="mask-activity-container">

                    <div className="activity-info-container">
                        <img className="back-button" onClick={() => handleClickBack()} src={backIcon} alt="back" />
                        <div className="activity-info">
                            <div className="info-item Body-1RegularWhiteLeft">
                                <img src={timeIcon} alt="icon" />
                                {`${moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM DD")}, ${moment(data.start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} - ${moment(data.end_time).format("h:mm a")}`}
                            </div>

                            <div className="info-item Body-1RegularWhiteLeft">
                                <img src={locationIcon} alt="icon" />
                                {data.addressDisplay}
                            </div>
                        </div>
                    </div>

                    <div className="nearby-bref">
                        <TitleLink id={data.activity.id} url="/event/" title={data.nameDisplay}>
                            <div className="Display-2WhiteLeft">
                                {data.nameDisplay}

                            </div>
                        </TitleLink>

                    </div>

                </div>


                <div className="nearby-event-body">
                    <div className="contact ">

                        <div className="Body-1RegularGrayLeft intro">{data.activity.information}</div>

                    </div>

                    <div>
                        <p className="ButtonGreyLeft">FOOD TRUCKS AT THIS EVENT</p>
                        {
                            trucks.map((item, index) => {
                                return this.renderTruckCard({
                                    key: index,
                                    id: item.food_truck.id,
                                    image: item.food_truck.cover_photo ? item.food_truck.cover_photo[0].url : defaultImage,
                                    logo: item.food_truck.logo ? item.food_truck.logo[0].url : truckMarkerIcon,
                                    name: item.food_truck.name,
                                    rating: item.food_truck.avg_rating,
                                    cuisine: item.food_truck.cuisine,
                                    slug: item.food_truck.slug
                                })
                            })
                        }

                    </div>
                </div>


            </div>
        </div>
    }
    renderNearbyEventDetail() {
        const { nearbyEventDetail } = this.props

        if (nearbyEventDetail && nearbyEventDetail[0])
            switch (nearbyEventDetail[0].type) {
                case "food_truck":
                    return this.renderFoodTruck(nearbyEventDetail[0])

                case "pairing-brewery":
                    return this.renderPairingBrewery(nearbyEventDetail[0], nearbyEventDetail)

                case "pairing-activity":
                    return this.renderPairingActivity(nearbyEventDetail[0], nearbyEventDetail)
                case "brewery":
                    return this.renderBrewery(nearbyEventDetail[0])
                default: break;
            }
    }
    renderNearbyEventListMobile() {
        const { error,
            tempNearbyState, nearbyList } = this.props

        return <div className="nearby-event-list-container-mobile">
            <div className="event-section">

                <RenderContainer
                    message="Something went wrong, please try another time!"
                    error={error}>
                    <div className="nearby-events-list-mobile" >
                        {
                            nearbyList && nearbyList.length === 0 ?
                                <div className="Body-1SemiBlackLeft">No truck, pairing or event in the next 15 hours was found near your chosen location</div>
                                :
                                this.renderEventResponsiveCard(tempNearbyState)
                        }
                    </div>

                </RenderContainer>


            </div>



        </div>
    }
    renderNearbyEventList() {
        const { error,
            onChangeFilterItem,
            tempNearbyState, isLoadingGetNearby, nearbyList } = this.props

        return <div className="nearby-event-list-detail">
            <h1 className="name DisplayBlackLeft">  Discover in <a>Denver</a> </h1>
            <hr />
            <div className="nearby-filter">
                <div className="filter-content">
                    {
                        listFilterItem.map((item, index) => {
                            return filterItem(item, index, onChangeFilterItem, isLoadingGetNearby)
                        })
                    }

                </div>
                <hr />
            </div>


            <div className="event-section">

                <RenderContainer
                    message="Something went wrong, please try another time!"
                    error={error}>
                    <div style={{ paddingTop: "30px" }} >
                        {
                            nearbyList && nearbyList.length === 0 ?
                                <div className="Body-1SemiBlackLeft">No truck, pairing or event in the next 15 hours was found near your chosen location</div>
                                :


                                this.renderEventCard(tempNearbyState)
                        }
                    </div>

                </RenderContainer>


            </div>



        </div>
    }
    render() {

        const {
            center,
            onChangeMapPosition,
            zoom, handleGoogleMapApi,
            tempNearbyState,
            visibleNearbyEventDetail,
            isLoadingGetNearby,
            isInRightPosition,
            handleCloseModal,
            handleExploreInRightPosition,

            toggleListResponsive,
            visibleListResponsive,

            nearbyEventDetail
        } = this.props

        return (
            <div className="nearby-container">

                <AnnounceNearbyModal
                    handleExploreInRightPosition={handleExploreInRightPosition}
                    handleCancel={handleCloseModal}
                    visible={!isInRightPosition} />
                <Row >

                    <MediaQuery maxWidth={768}>
                        {(matches) => {

                            if (matches) {
                                return <div id="content">
                                    <div className="responsive-list-button">
                                        <Button
                                            onClick={toggleListResponsive}>
                                            {!visibleListResponsive ? "LIST" : "MAP"}</Button>
                                    </div>
                                    {visibleListResponsive &&
                                        this.renderNearbyEventListMobile()
                                    }
                                    {
                                        nearbyEventDetail && <div style={{ display: visibleListResponsive ? "none" : "" }} className="detail-responsive">
                                            <div
                                                className="cover-photo"
                                                style={{
                                                    backgroundImage: `url(${nearbyEventDetail[0].image ?
                                                        nearbyEventDetail[0].image : homeImage})`
                                                }}>
                                            </div>
                                            <div className="detail-body-responsive">
                                                <div className="Body-1SemiBlackLeft">{nearbyEventDetail[0].nameDisplay}</div>
                                                <div className="popover-info">
                                                    <img src={nearbyEventDetail[0].image} alt="popover-icon" />
                                                    <div className="popover-text">
                                                        <div className="address Body-1RegularBlackLeft">
                                                            {nearbyEventDetail[0].addressDisplay}
                                                        </div>
                                                        <div className="time CaptionGreyLeft">
                                                            {moment(nearbyEventDetail[0].timeDisplay, "YYYY-MM-DD h:mm a").format("dddd, MMMM DD")}   {moment(nearbyEventDetail[0].start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} - {moment(nearbyEventDetail[0].end_time).format("h:mm a")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            }
                            else return <Col id="content" style={{ overflow: isLoadingGetNearby && "hidden" }} className="nearby-event-list-container" lg={8} md={8}>
                                {
                                    visibleNearbyEventDetail ?
                                        this.renderNearbyEventDetail() : this.renderNearbyEventList()
                                }
                            </Col>
                        }}
                    </MediaQuery>
                    <Col className="map" style={{ display: visibleListResponsive ? "none" : "" }} lg={16} md={16}>
                        <div className="lottie-container">
                            <img src={mapMarker} alt="marker" />
                        </div>

                        <GoogleMapReact
                            onChange={onChangeMapPosition}
                            bootstrapURLKeys={{ key: "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A" }}
                            center={center}

                            defaultZoom={14}
                            zoom={zoom}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={handleGoogleMapApi}
                        >
                            {
                                tempNearbyState.length > 0 && tempNearbyState[0] &&
                                this.renderMarker(tempNearbyState)
                            }
                        </GoogleMapReact>




                    </Col>
                </Row>
            </div>
        )


    }
}

export default Nearby
