import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link, Router } from 'routes'
import Section from '../common/section/Section'
import TruckCard from '../common/truckCard/TruckCard'
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
import ArticleCard from '../common/articleCard/ArticleCard'

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
const carnationfestivalCard = ("/static/images/carnationfestival-card.jpg")
const civicCard = ("/static/images/civic-card.jpg")
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
const articles = [
    {

        title: `Find the Best Taco Food 
        Trucks in Denver`,
        image: ('/static/images/card-tacos.png'),
        detail: `Taco trucks are what kicked off the food truck craze to begin with so it's only natural that there would be plenty to choose from.

        Food trucks tend to offer tacos in all kinds of interesting varieties. That’s not to say that there aren’t any traditional Mexican food trucks either. You can also find foods from other cultures like Venezuelan or Brazilian.
        
        They usually offer a variety of favorites like tacos, enchiladas, burritos and more. Vegetarian and vegan options tend to be available as well depending on the food truck.
        `
    },
    {

        title: `Experience Multi-Cuisine
         Food Trucks`,
        image: ('/static/images/home-image.jpg'),
        detail: `If you're looking for something with their own unique twist then you're in luck. The Denver area is home to many different food trucks that blend different types of cuisines or have their own creative spin on a certain type of dish.

        For example, instead of regular french fries you can try different fry dishes like classic poutine, Greek fries, chili fries, and even steak and cheese fries.
        
        On the healthier side you'll find some trucks that serve salad bowl dishes with gluten free and vegan options to choose from.
        `
    },
    {

        title: `Taste the Flavor of
        Denver BBQ`,
        image: ('/static/images/card-bbq.png'),
        detail: `In the mood for some mouth-watering BBQ? These and many other food trucks in the area have plenty of smoked meats to choose from.

        Bar-B-Que comes in a variety of types such as Texas style brisket, St. Louis style pork rib, pulled pork and more. Beef ribs are a popular choice as well. Plenty of trucks offer their own spin on BBQ chicken, beans and coleslaw.
        
        For something a little different than traditional BBQ, some food trucks offer a blend of Mexican and American. They create blends like BBQ nachos and BBQ mac n’ cheese.
        `
    },
    {

        title: 'I Am Searching For a Food Truck Near Me',
        image: ('/static/images/card-map.png'),
        detail: `Hungry and don’t know where to eat? In a new neighborhood and don’t know what’s nearby? No matter where you are in Denver, Truckster can find you a great food truck. Get something for any time of day or any meal, be it breakfast, lunch, dinner or even dessert. 
        Looking for somewhere to meet your friends? Food trucks create a fun atmosphere for you and your friends to eat and socialize, taking in the 300 days of sunshine that Denver offers. 
        `
    },
    {

        title: `I Want a Food Truck to 
        Cater my Party`,
        image: ('/static/images/card-cater.png'),
        detail: `Food truck catering is becoming more and more popular. The novelty of having a truck immediately makes your event unique and stand out. It also allows you to serve food wherever your event may be, rural in the mountains, or right at your own home. No on-site kitchen required. 
        Food truck catering is ideal for many different occasions, whether it be a corporate event, wedding, or party with family and friends. Find one you like on Truckster and submit your request through our easy to use form. This makes it effortless for both you and the trucks, allowing you to fully enjoy your event! 
        `
    },
    {

        title: 'Find Today’s Best Food Truck and Brewery Pairings',
        image: ('/static/images/card-alls.png'),
        detail: `We’re so lucky in Colorado to have the heart of the craft beer culture right in our backyard. It’s no secret that what makes a good brewery is the food truck parked outside, and what makes a good food truck is the beer that goes with it. 
        Choosing which brewery to visit today? Explore on Truckster all your favorite breweries and their upcoming food truck calendars. Easily plan your Saturday with your family or meeting friends at one of our many awesome micro-breweries in town. 
        `
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
    renderEventCard(events) {
        return events.map((item, index) => {

            return <Col key={index} sm={12} xs={24} md={6} lg={8}>
                <EventCard data={item} />
            </Col>

        })
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
            return <Link prefetch key={index} to={`/food-truck/co/denver/${item.name.toLowerCase()}`}>

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
    //render article
    renderArticleCard(articles) {
        return articles.map((item, index) => {
            return <a key={index}>
                <ArticleCard
                    data={item} />
            </a>

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
            <div className="home main-wrapper ">

                {/* main header  */}
                <div style={{ backgroundImage: `url(${homeImage})` }} className="home-main-header">
                    <div className="content-city">
                        <h1 className="title DisplayBlackCenter">Discover the Best Denver Food Trucks and Upcoming Events</h1>
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
                                <Link prefetch to="/search">
                                    <a>
                                        <Button disabled={searchValue.length < 1 ? true : false} className="search-btn SubheadingWhiteCenter" size="large" type="primary">
                                            Find trucks </Button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="cover">
                        <div className="cover-mask"></div>
                    </div>
                </div>

                {/* home body  */}
                <div style={{ paddingTop: 0 }} className="body-content media">
                    <Section url="/event/co/denver" seeall={true} title="What's Happening in Denver?" >
                        <RenderContainer message="Something went wrong, please try another time!"
                            error={errorActivity}  >
                            <div>
                                {
                                    activitiesWeek && activitiesWeek.length > 0 ?
                                        <Row gutter={16}>
                                            {this.renderEventCard(activitiesWeek)}
                                        </Row>

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
                    <Section url="/food-truck/co/denver/all" seeall={true} title="Featured Food Trucks in Denver, CO" >
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
                        <h4 className="Display-2BlackCenter ">Favorite Cuisine in Denver </h4>
                        <Row type="flex" justify="center" className="cuisine-list">
                            {
                                this.renderCuisine(cuisine)
                            }
                        </Row>
                    </section>

            
                        {/* article section */}
                        <div className="article-section media">
                            <div className="article-section-container">
                                <h2 className="Display-3WhiteCenter">Denver Food Truck Events & Festivals</h2>

                                <div className="article-description Body-2RegularWhiteLeft">
                                    {`  Truckster is your gateway into the food truck community and lets you know about the best local food truck festivals and events happening throughout Colorado. Whether you are looking for a family friendly event, a unique brewery event, or a music festival, we’ve got you covered. Here are a few of our favorite regularly occurring events to keep you happy all year long. Be sure to go to the `} <a onClick={() => {
                                        window.open("https://itunes.apple.com/us/app/truckster-denver-food-trucks/id1375284993?l=vi&ls=1&mt=8");
                                    }}>App Store</a> or <a onClick={() => {
                                        window.open("https://play.google.com/store/apps/details?id=com.truckster");
                                    }}>Google Play</a> to download Truckster and find all the food truck events happening near you.
                        </div>

                                <h3 className="article__title">Some of our Favorite Events:</h3>

                                <Row gutter={30} type="flex" justify="center" >
                                    <Col lg={6} md={6} sm={12} xs={12} className="event-card-small-container">
                                        <a href="https://colorado.ourcommunitynow.com/2018/05/14/dtc-eats-back-food-trucks/" target="_blank" className="event-card-small">
                                            <div>
                                                <img src={"https://www.thedenverear.com/wp-content/uploads/2015/07/11403320_832715533486476_306799773388049945_n.png"} alt="card" />
                                            </div>

                                            <div className="event-card-small-detail">
                                                <div className="Body-1RegularWhiteLeft">DTC Eats</div>
                                                <div className="Body-1RegularGrayLeft">This lunch takes place in the Denver Tech Center every other Monday from May through September. It features over 15 trucks with a wide range of cuisine types and is the perfect cure for your everyday lunch. Picnic tables are setup nearby to enjoy the Colorado outdoors on your lunchbreak.</div>
                                            </div>
                                        </a>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="event-card-small-container">
                                        <a href="http://www.ucdenver.edu/about/departments/FoodServices/Pages/Food-Truck-Wednesdays.aspx" target="_blank" className="event-card-small">
                                            <div>
                                                <img src={"https://pbs.twimg.com/media/C7ias3MUwAAC2cB.jpg"} alt="card" />
                                            </div>

                                            <div className="event-card-small-detail">
                                                <div className="Body-1RegularWhiteLeft">Food Truck Wednesdays at Anschutz Medical Campus</div>
                                                <div className="Body-1RegularGrayLeft">Food Truck Wednesdays serves the medical community and visitors to the Anschutz Medical Campus every week all summer long. A variety of 10 or more food trucks attend each Wednesday, and picnic tables are setup on the campus lawn for you to enjoy.</div>
                                            </div>
                                        </a>
                                    </Col>


                                    <Col lg={6} md={6} sm={12} xs={12} className="event-card-small-container">
                                        <a href="http://www.civiccenterconservancy.org/event-civic-center-eats-2018_88.html"
                                            target="_blank"
                                            className="event-card-small">
                                            <div> <img src={civicCard} alt="card" /></div>

                                            <div className="event-card-small-detail">
                                                <div className="Body-1RegularWhiteLeft">Civic Center Eats</div>
                                                <div className="Body-1RegularGrayLeft">The largest gathering of food trucks and gourmet foods in the entire Denver area. Enjoy live music and other activities along with over 80 varieties of food vendors.</div>
                                            </div>
                                        </a>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="event-card-small-container">
                                        <a href="https://denversartdistrict.org/first-friday/"
                                            target="_blank"
                                            className="event-card-small">
                                            <div> <img src={"https://static1.squarespace.com/static/598679b4cf81e0278eb708fb/t/59e67c0eb078699478c320a5/1533008031364/20637837_1613853705313913_3592591070002448170_n.jpg"} alt="card" /></div>

                                            <div className="event-card-small-detail">
                                                <div className="Body-1RegularWhiteLeft">First Friday Art Walk on Santa Fe</div>
                                                <div className="Body-1RegularGrayLeft">Attended by thousands year round, the art walk happens every first Friday of the month from 5:30pm-9:30pm. Santa Fe’s Art District spans from 13th to Alameda, with the majority of food trucks parked between 7th Street and 9th Street. Check out hundreds of artists in the galleries and studios that line streets while you take in some local bites from your favorite trucks.</div>
                                            </div>
                                        </a>
                                    </Col>
                                </Row>
                                <div className="article-card">
                                    {
                                        this.renderArticleCard(articles)
                                    }
                                </div>
                            </div>
                        </div>
              
                </div>
            </div>
        )
    }
}

export default CityDetail
