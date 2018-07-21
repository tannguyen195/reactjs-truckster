import React, { Component } from 'react';
import { Row, Col, Switch, Icon, Rate } from 'antd';
import stylesheet from './_nearby.less'
import RenderContainer from '../common/renderContainer/RenderContainer'
import moment from 'moment'
import GoogleMapReact from 'google-map-react';
import { Link } from 'routes'
import AnnounceNearbyModal from './AnnounceNearbyModal'
import TitleLink from '../common/titleLink'
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


const MarkerCustom = ({ info, icon, visible, onVisibleChange }) => {

    return <div className="marker-container">
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
            <div className=" SubheadingBlackLeft">{info.nameDisplay}</div>
            <div className="popover-info">
                <img src={info.image} alt="popover-icon" />
                <div className="popover-text">
                    <div className="address Body-1RegularBlackLeft">
                        {info.addressDisplay}
                    </div>
                    <div className="time CaptionGreyLeft">
                        {moment(info.timeDisplay, "YYYY-MM-DD hh:mm a").format("ddd, MMMM DD hh:mm:a")} - {moment(info.end_time).format("hh:mm:a")}
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
        const { currentHoverItem, onVisibleChange } = this.props
        return data.map((event, idx) => {
            if (event) {
                return event.map((item, index) => {
                    return <MarkerCustom
                        onVisibleChange={() => onVisibleChange(item.id.toString())}
                        visible={item.id.toString() === currentHoverItem ? true : false}
                        info={item}
                        key={index}
                        icon={item.marker}
                        lat={parseFloat(item.latitude)}
                        lng={parseFloat(item.longtitude)} />
                })
            }
            else return null
        })
    }

    renderEventCard(events) {

        const { onEventEnter, onEventLeave, handleClickNearbyEvent } = this.props
        return events.map((event, index) => {

            if (event)
                return event.map((item, idx) => {
                    return <div onClick={(e) => handleClickNearbyEvent(item)} className="nearby-events" onMouseLeave={onEventLeave} onMouseEnter={onEventEnter}
                        style={{ marginBottom: "16px" }}
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
                                        ` ${moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(item.end_time).format("hh:mm a")}`
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
        return <TitleLink url="/food-truck/" title={data.name} key={data.key} id={data.id}>
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
        </TitleLink>
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
                        <TitleLink id={data.food_truck.id} url="food-truck/" title={data.nameDisplay}>
                            <div className="Display-2WhiteLeft">{data.nameDisplay}</div>
                        </TitleLink>
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
                                    return <Link key={index} to={`/cuisine/${item.name}`}> <div className="tag-item Body-1MediumBlackCenter">
                                        {item.name} </div>
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
                                ` ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(data.end_time).format("hh:mm a")}`
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
                        <TitleLink id={data.brewery.id} url="/brewery/" title={data.nameDisplay}>
                            <div className="Display-2WhiteLeft">{data.nameDisplay}</div>
                        </TitleLink>
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

                            <Link to={`/brewery/type/${data.brewery.breweries_type && data.brewery.breweries_type.name}`}>
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
                                ` ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(data.end_time).format("hh:mm a")}`
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
                        <TitleLink id={data.brewery.id} url="/brewery/" title={data.nameDisplay}>
                            <div className="Display-2WhiteLeft">{data.nameDisplay}</div>
                        </TitleLink>
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

                            <Link to={`/brewery/type/${data.brewery.breweries_type && data.brewery.breweries_type.name}`}>
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
                                ` ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(data.end_time).format("hh:mm a")}`
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
                                {`${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM DD")}, ${moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} - ${moment(data.end_time).format("hh:mm a")}`}
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
                        <p className="ButtonGreyLeft">FOODTRUCKS IN EVENT</p>
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
    renderNearbyEventList() {
        const { error,
            onChangeFilterItem,
            tempNearbyState, isLoadingGetNearby, nearbyList } = this.props

        return <div className="nearby-event-list-detail">
            <div className="name DisplayBlackLeft">  Discover in <a>Denver</a> </div>
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

            {/* {
                isLoadingGetNearby &&
                <div className="spin-overlay">
                    <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
                </div>
            } */}

            <div className="event-section">

                <RenderContainer
                    message="Something went wrong, please try another time!"
                    error={error}>
                    <div style={{ paddingTop: "30px" }} >
                        {
                            nearbyList && nearbyList.length === 0 ?
                                <div className="Body-1SemiBlackLeft">No truck, pairing or event in the next 24 hours was found near your chosen location</div>
                                :


                                this.renderEventCard(tempNearbyState)
                        }
                    </div>

                    {/* {
                        currentPage < lastPage &&
                        <div className="nearby-loadmore">
                            <a onClick={loadMoreNearby} className="ButtonGreyLeft"> LOAD MORE</a>

                        </div>
                    } */}


                </RenderContainer>


            </div>



        </div>
    }
    render() {

        const { center, onChangeMapPosition,
            zoom, handleGoogleMapApi,
            tempNearbyState,
            visibleNearbyEventDetail,
            isLoadingGetNearby,
            isInRightPosition,
            handleCloseModal,
            handleExploreInRightPosition
        } = this.props

        return (
            <div className="nearby-container">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <AnnounceNearbyModal handleExploreInRightPosition={handleExploreInRightPosition} handleCancel={handleCloseModal} visible={!isInRightPosition} />
                <Row >
                    <Col id="content" style={{ overflow: isLoadingGetNearby && "hidden" }} className="nearby-event-list-container" lg={8} md={8}>
                        {
                            visibleNearbyEventDetail ?
                               this.renderNearbyEventDetail() : this.renderNearbyEventList()

                        }

                    </Col>

                    <Col className="map" lg={16} md={16}>
                        <div className="lottie-container">
                            {/* <Lottie options={{
                                loop: true,
                                autoplay: true,
                                animationData: animationData,
                            }}
                                style={{ zIndex: '9' }}
                                height={50}
                                width={50}
                            /> */}
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
