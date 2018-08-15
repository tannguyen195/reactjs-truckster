import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'routes'
import Section from '../common/section/Section'
import TruckCard from '../common/truckCard/TruckCard'
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
// import BreweryCard from '../common/breweryCard/BreweryCard'

import PairingCard from '../common/pairingCard/PairingCard'
import EventCard from '../common/eventCard/EventCard'
import CustomCarousel from '../common/CustomCarousel/CustomCarousel'
import SearchBar from '../common/searchBar/SearchBar'
import RenderContainer from '../common/renderContainer/RenderContainer'
import MediaQuery from 'react-responsive';
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import Placeholder from '../common/placeholder/Placeholder'

const breweryIcon = ('/static/images/brewery-marker-icon.png')
const imageBreweryPlaceholder = ("/static/images/image_brewery_placeholder.png")

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
        image: ("/static/images/offer-image.jpg")
    }
]
const cuisine = [

    {
        name: 'Mexican',
        image: ('/static/images/cuisines/Mexican.jpg'),
        truckNum: 51
    },
    {
        name: 'BBQ',
        image: ('/static/images/cuisines/BBQ.jpg'),
        truckNum: 58
    },
    {
        name: 'American',
        image: ('/static/images/cuisines/American.jpg'),
        truckNum: 95
    },
    {
        name: 'Dessert',
        image: ('/static/images/cuisines/Dessert.jpg'),
        truckNum: 42
    },
    {
        name: 'Coffee',
        image: ('/static/images/cuisines/Coffee.jpg'),
        truckNum: 16
    },
    {
        name: 'Asian',
        image: ('/static/images/cuisines/Asian.jpg'),
        truckNum: 15
    },
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

            return <EventCard key={index} data={item} />

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
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={6}>
                <TruckCard data={item} />
            </Col>
        })
    }



    // render pairing card 
    renderPairingCard(pairings) {
        return pairings.map((item, index) => {
            if (index < 6)
                return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={24} lg={24}>
                    <PairingCard data={item} />
                </Col>
            else return null
        })
    }

    // render brewery card 
    renderBreweryCard(breweries) {
        return breweries.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={24} lg={24}>
                <TruckNewCard data={
                    {
                        url: "/brewery/" + item.slug,
                        image: item.cover_photo ?
                            item.cover_photo[0].url : breweryIcon,
                        logo: item.logo ?
                            item.logo[0].url :
                            imageBreweryPlaceholder,
                        name: item.name,
                        cuisine: item.breweries_type && [{ name: item.breweries_type.name }],
                        rating: parseFloat((Math.round(item.rating * 2) / 2).toFixed(1), 10)
                    }
                } />
            </Col>

        })
    }
    //render favorite cuisine
    renderCuisine(cuisine) {
        return cuisine.map((item, index) => {
            return <Link key={index} to={`/cuisine/${item.name}`}>

                <Col lg={4} md={4} sm={6} xs={6} className="cuisine-item">
                    <a>
                        <div className="cuisine-image">
                            <img src={item.image} alt="cuisine-image" />
                        </div>
                        <div className="Body-2CenterBlack">
                            {item.name}
                        </div>
                        <div className="CaptionGreyCenter">
                            {item.truckNum}  trucks     </div>
                    </a>
                </Col>

            </Link>
        })
    }
    render() {

        const {
            truckFeaturedCity,
            error,
            activitiesWeek,
            errorActivity,
            errorPairing,
            featuredPairings,
            history,
            featuredBreweries,
            errorBrewery,
            match,
            searchValue,
            onSearchValueChange,
            result
        } = this.props

        return (
            <div className="home main-wrapper">

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


                                        <MediaQuery maxWidth={767}>
                                            {

                                                (matches) => {
                                                    return <CustomCarousel slideToShow={matches ? 1 : 3}>
                                                        {this.renderEventCard(activitiesWeek)}
                                                    </CustomCarousel>

                                                }
                                            }
                                        </MediaQuery>

                                        : <MediaQuery key='loader' maxWidth={767}>
                                            {(matches) => {
                                                return <LoadingPlaceHolder itemNum={matches ? 1 : 3} key='loader' />
                                            }}
                                        </MediaQuery>
                                }

                            </div>
                        </RenderContainer>
                    </Section>
                    <hr />
                    <Section url="/food-truck/co/denver" seeall={true} title="Featured Denver Food Trucks" >
                        <RenderContainer message="Something went wrong, please try another time!"
                            error={error}  >
                            <div>
                                {
                                    truckFeaturedCity ?
                                        <Row gutter={16}>
                                            {this.renderTruckCard(truckFeaturedCity)}
                                        </Row> : <MediaQuery key='loader' maxWidth={768}>
                                            {(matches) => {
                                                return <LoadingPlaceHolder itemNum={matches ? 4 : 8} key='loader' />
                                            }}
                                        </MediaQuery>

                                }
                            </div>
                        </RenderContainer>

                    </Section>

                    <hr />


                    <Row gutter={30}>
                        <Col lg={12} md={12} sm={24} xs={24}>

                            <Section url="/brewery/co/denver" seeall={true} title="Featured Breweries" >
                                <RenderContainer message="Something went wrong, please try another time!"
                                    error={errorBrewery}  >

                                    <div>
                                        {
                                            featuredBreweries && featuredBreweries.length > 0 ?
                                                <Row gutter={16}>
                                                    {this.renderBreweryCard(featuredBreweries)}
                                                </Row> : <MediaQuery key='loader' maxWidth={768}>
                                                    {(matches) => {
                                                        return <LoadingPlaceHolder itemNum={matches ? 2 : 2} key='loader' />
                                                    }}
                                                </MediaQuery>
                                        }
                                    </div>

                                </RenderContainer>
                            </Section>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Section url="/pairing/co/denver" seeall={true} title="Truck and Brewery Pairings" >
                                <RenderContainer
                                    message="Something went wrong, please try another time!"
                                    error={errorPairing}  >
                                    {
                                        featuredPairings && featuredPairings.length > 0 ?

                                            <Row gutter={16}>
                                                {this.renderPairingCard(featuredPairings)}
                                            </Row>
                                            : <MediaQuery key='loader' maxWidth={768}>
                                                {(matches) => {
                                                    return <LoadingPlaceHolder itemNum={matches ? 2 : 2} key='loader' />
                                                }}
                                            </MediaQuery>
                                    }
                                </RenderContainer>

                            </Section>
                        </Col>
                    </Row>
                    <hr />

                    <section className="favorite-cuisine-container">
                        <div className="Display-2BlackCenter ">Favorite Cuisine in Denver </div>
                        <Row type="flex" justify="center" className="cuisine-list">
                            {
                                this.renderCuisine(cuisine)
                            }
                        </Row>
                    </section>
                    <Section seeall={false} title="Special Offers" >

                        <MediaQuery maxWidth={767}>
                            {

                                (matches) => {

                                    return <CustomCarousel slideToShow={matches ? 1 : 2}>
                                        {this.renderOffers(offers)}
                                    </CustomCarousel>

                                }
                            }
                        </MediaQuery>
                    </Section>
                </div>
            </div>
        )
    }
}

export default CityDetail
