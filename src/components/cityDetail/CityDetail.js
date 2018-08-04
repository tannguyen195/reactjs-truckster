import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'routes'
import Section from '../common/section/Section'
import TruckCard from '../common/truckCard/TruckCard'
import BreweryCard from '../common/breweryCard/BreweryCard'
import PairingCard from '../common/pairingCard/PairingCard'
import EventCard from '../common/eventCard/EventCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import CustomCarousel from '../common/CustomCarousel/CustomCarousel'
import SearchBar from '../common/searchBar/SearchBar'
import MediaQuery from 'react-responsive';
import stylesheet from './_cityDetail.less'
import Placeholder from '../common/placeholder/Placeholder'
const homeImage = ("/static/images/denver-city.jpg")
const tags = [
    "American", "Mexican", "Thai", "Pizza", "Dessert", "Coffee"
]
const tags2 = [
    "American", "Mexican", "Thai",
]
const tags3 = [
    "Pizza", "Dessert", "Coffee"
]

const offers = [
    {
        offerName: "Refer your friends and earn credit to eat at your favorite food trucks!",
        image: "https://c.tadst.com/gfx/750w/eat-outside-day-fun.jpg"
    },
    {
        offerName: "Rate trucks and earn credit towards your next mobile order",
        image: require("/static/images/offer-image.jpg")
    }
]

class CityDetail extends Component {

    renderOffers(offers) {
        return offers.map((offer, index) => {
            return <div onClick={(e) => this.props.toggleAnnounceModal()} key={index} className="offer-card">
                <div style={{
                    backgroundImage: `url(${offer.image})`
                }} className="article overlay image ">
                    <div className="content">
                        <div className="offer-name">
                            {offer.offerName}
                        </div>
                        <div className=" offer-learn ">Learn More ></div>
                    </div>

                </div>
            </div>
        })
    }

    // render truck card 
    renderEventCard(events) {
        return events.map((item, index) => {
            if (index < 6)
                return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={8}>
                    <EventCard data={item} />
                </Col>
            else return null
        })
    }
    renderPlaceHolder() {
        return <Row gutter={16}>
            <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                <Placeholder />
            </Col>
            <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                <Placeholder />
            </Col>
            <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                <Placeholder />
            </Col>
            <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                <Placeholder />
            </Col>
            <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                <Placeholder />
            </Col>
            <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                <Placeholder />
            </Col>
        </Row>
    }
    // render truck card 
    renderTruckCard(trucks) {
        return trucks.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={8}>
                <TruckCard data={item} />
            </Col>
        })

    }



    // render pairing card 
    renderPairingCard(pairings) {
        return pairings.map((item, index) => {
            if (index < 6)
                return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={8}>
                    <PairingCard data={item} />
                </Col>
            else return null
        })
    }

    // render brewery card 
    renderBreweryCard(breweries) {
        return breweries.map((item, index) => {
            if (index < 6)
                return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={8}>
                    <BreweryCard data={item} />
                </Col>
            else return null
        })
    }

    render() {

        const {
            truckFeaturedCity,
            error,
            activitiesWeek,
            errorActivity,
            errorPairing,
            pairings,
            history,
            breweries,
            errorBrewery,
            match,
            searchValue,
            onSearchValueChange,
            result
        } = this.props

        return (
            <div className="home main-wrapper">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                {/* main header  */}
                <div style={{ backgroundImage: `url(${homeImage})` }} className="home-main-header">
                    <div className="content-city">
                        <div className="title DisplayBlackCenter">Discover the lastest events and best food trucks in Denver</div>
                        <div className="search">
                            <SearchBar
                                searchValue={searchValue}
                                onSearchValueChange={onSearchValueChange}
                                result={result}
                                match={match}
                                isHeader={false}
                                history={history}

                            />
                            <div className="button-find">
                                <Button disabled={searchValue.length < 1 ? true : false} onClick={() => history.push("/search/")} className="search-btn SubheadingWhiteCenter" size="large" type="primary">
                                    Find trucks
                            </Button>
                            </div>
                        </div>


                        <MediaQuery maxWidth={460}>
                            {(matches) => {
                                if (matches) {
                                    return <div className="tag-container">
                                        <div className="tag">
                                            {
                                                tags2.map((item, index) => {
                                                    return <Link key={index} params={{ value: item }} to={`/cuisine/${item}`}>
                                                        <div className="tag-item Body-1MediumBlackCenter">
                                                            {item}
                                                        </div>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                        <div className="tag">
                                            {
                                                tags3.map((item, index) => {
                                                    return <Link key={index} to={`/cuisine/${item}`}>
                                                        <div className="tag-item Body-1MediumBlackCenter">
                                                            {item}
                                                        </div>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                    </div>
                                } else {
                                    return <div className="tag-container">
                                        <div className="tag">
                                            {
                                                tags.map((item, index) => {
                                                    return <Link key={index} to={`/cuisine/${item}`}>
                                                        <div className="tag-item Body-1MediumBlackCenter">
                                                            {item}
                                                        </div>
                                                    </Link>
                                                })
                                            }

                                        </div>

                                    </div>
                                }
                            }}
                        </MediaQuery>

                    </div>

                    <div className="cover">
                        <div className="cover-mask"></div>
                    </div>

                </div>

                {/* home body  */}
                <div className="body-content">
                    <Section url="/event/co/denver" seeall={true} title="What's happening in Denver?" >
                        <RenderContainer message="Something went wrong, please try another time!"
                            error={errorActivity}  >
                            <div>
                                {
                                    activitiesWeek && activitiesWeek.length > 0 ?
                                        <Row gutter={16}>
                                            {this.renderEventCard(activitiesWeek)}
                                        </Row> : this.renderPlaceHolder()
                                }

                            </div>
                        </RenderContainer>
                    </Section>

                    <Section url="/food-truck/co/denver" seeall={true} title="Featured Trucks" >
                        <RenderContainer message="Something went wrong, please try another time!"
                            error={error}  >
                            <div>
                                {
                                    truckFeaturedCity ?
                                        <Row gutter={16}>
                                            {this.renderTruckCard(truckFeaturedCity)}
                                        </Row> : this.renderPlaceHolder()
                                }
                            </div>
                        </RenderContainer>

                    </Section>

                    <Section url="/brewery/co/denver" seeall={true} title="Featured Breweries" >
                        <RenderContainer message="Something went wrong, please try another time!"
                            error={errorBrewery}  >


                            <div>
                                {
                                    breweries && breweries.length > 0 ?
                                        <Row gutter={16}>
                                            {this.renderBreweryCard(breweries)}
                                        </Row> : this.renderPlaceHolder()
                                }
                            </div>

                        </RenderContainer>
                    </Section>

                    <Section url="/pairing/co/denver" seeall={true} title="Truck and Brewery Pairings of the Week" >
                        <RenderContainer
                            message="Something went wrong, please try another time!"
                            error={errorPairing}  >
                            {
                                pairings && pairings.length > 0 ?
                                  
                                        <Row gutter={16}>
                                            {this.renderPairingCard(pairings)}
                                        </Row>
                                : this.renderPlaceHolder()
                            }
                        </RenderContainer>

                    </Section>

                    <Section seeall={false} title="Special Offers" >

                        <MediaQuery maxWidth={767}>
                            {(matches) => {
                                if (matches) {
                                    return <CustomCarousel slideToShow={1}>
                                        {this.renderOffers(offers)}
                                    </CustomCarousel>
                                } else {
                                    return <CustomCarousel slideToShow={2}>
                                        {this.renderOffers(offers)}
                                    </CustomCarousel>
                                }
                            }}
                        </MediaQuery>
                    </Section>
                </div>
            </div>
        )
    }
}

export default CityDetail
