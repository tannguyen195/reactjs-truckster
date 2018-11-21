import React, { Component } from 'react';
import { Row, Col, Button, Tabs, Rate } from 'antd';
import { Link } from 'routes'
import moment from 'moment'
const homeImage = ('/static/images/home-image.jpg')
const unknownUserIcon = ('/static/images/unknown-user-icon.png')
const TabPane = Tabs.TabPane;
const locationIcon = ('/static/images/location-icon.png')

class UserProfile extends Component {

    renderReviewBrewery(userReview) {
        return userReview.map((item, index) => {
            return <Col key={index} md={8} lg={8} sm={12} xs={24} >
                <Link prefetch to={"/brewery/" + item.brewery.slug} >
                    <div className="review-card">
                        <div className="card-header">
                            <Rate disabled value={item.rating} />
                            <div className="CaptionGreyRight">{item.created_at}</div>
                        </div>
                        <div className="card-body">
                            <div className="truck-image">
                                <img alt="truck" src={item.brewery.cover_photo ? item.brewery.cover_photo[0].url : homeImage} />
                            </div>

                            <div className="review-info ">
                                <div style={{ paddingBottom: '4px' }} className="Body-1MediumBlackLeft review-title">{item.brewery.name}</div>
                                <div className="CaptionGreyLeft"><img alt="locaion" src={locationIcon} />{item.brewery.location}</div>
                            </div>
                        </div>

                    </div>
                </Link>
            </Col>

        })
    }
    renderReview(userReview) {

        return userReview.map((item, index) => {
            return <Col key={index} md={8} lg={8} sm={12} xs={24} >
                <Link prefetch to={"/food-truck/" + item.food_trucks.slug}>
                    <div className="review-card">
                        <div className="card-header">
                            <Rate disabled value={item.rating ||
                                parseFloat((Math.round(item.food_trucks.avg_rating * 2) / 2).toFixed(1), 10)} />
                            <div className="CaptionGreyRight">{item.created_at}</div>
                        </div>
                        <div className="card-body">
                            <div className="truck-image">
                                <img alt="truck" src={item.food_trucks.cover_photo ? item.food_trucks.cover_photo[0].url : homeImage} />
                            </div>

                            <div className="review-info">
                                <div style={{ paddingBottom: '4px' }} className="Body-1MediumBlackLeft review-title">{item.food_trucks.name}</div>
                                <div className="CaptionGreyLeft"><img alt="locaion" src={locationIcon} />{item.food_trucks.state}, {item.food_trucks.city} </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </Col>

        })
    }

    renderFavoriteBrewery(data) {
        return data.map((item, index) => {
            return <Col key={index} md={8} lg={8} sm={12} xs={24} >
                <Link prefetch to={"/brewery/" + item.brewery.slug}>
                    <div className="review-card">
                        <div className="card-header">
                            <Rate disabled value={item.brewery.rating ||
                                parseFloat((Math.round(item.brewery.rating * 2) / 2).toFixed(1), 10)} />
                            <div className="CaptionGreyRight">{item.created_at}</div>
                        </div>
                        <div className="card-body">
                            <div className="truck-image">
                                <img alt="truck" src={item.brewery.cover_photo ? item.brewery.cover_photo[0].url : homeImage} />
                            </div>

                            <div className="review-info">
                                <div style={{ paddingBottom: '4px' }} className="Body-1MediumBlackLeft review-title">{item.brewery.name}</div>
                                <div className="CaptionGreyLeft"><img alt="locaion" src={locationIcon} />{item.brewery.state}, {item.brewery.city} </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </Col>

        })
    }
    render() {
        const { userData, userReview, userFavorite, userBreweryReview, userFavoriteBrewery } = this.props

        return (

            <div className="profile-container">

                {
                    userData && <div className="profile-header">
                        <div className="profile-picture">
                            <img alt="avater" src={userData.avatar ? userData.avatar : unknownUserIcon} />
                        </div>
                        <div className="info">
                            <div className="user-name DisplayBlackLeft">
                                {userData.name}
                            </div>
                            <div className="create-at Body-2GreyLeft">
                                Member Since: {moment(userData.created_at).format("MMMM DD, YYYY")}
                            </div>
                            <Link prefetch to="/edit">
                                <a className="edit-button">
                                    <Button type="danger">
                                        EDIT PROFILE</Button>
                                </a>

                            </Link>
                        </div>
                    </div>
                }
                <div className="profile-body">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Truck Reviews" key="1">

                            <div className="user-review">
                                {
                                    userReview && <Row type="flex" justify="space-between" className="max-width" gutter={30}>
                                        {this.renderReview(userReview)}
                                    </Row>
                                }

                            </div>
                        </TabPane>
                        <TabPane tab="Brewery Reviews" key="2">
                            <div className="user-review">
                                {
                                    userBreweryReview && <Row type="flex" className="max-width" gutter={30}>
                                        {this.renderReviewBrewery(userBreweryReview)}
                                    </Row>
                                }
                            </div>
                        </TabPane>
                        <TabPane tab="My Favorites" key="3">
                            <div className="user-review">
                                {
                                    userFavorite &&
                                    <div>
                                        <div className="favorite-title">Food trucks</div>
                                        <Row type="flex" className="max-width" gutter={30}>
                                            {this.renderReview(userFavorite)}
                                        </Row>
                                    </div>
                                }


                            </div>
                            <div className="user-review">

                                {
                                    userFavoriteBrewery &&
                                    <div>
                                        <div className="favorite-title">Brewery</div>
                                        <Row type="flex" className="max-width" gutter={30}>
                                            {this.renderFavoriteBrewery(userFavoriteBrewery)}
                                        </Row>
                                    </div>
                                }
                            </div>
                        </TabPane>

                    </Tabs>
                </div>
            </div>

        )


    }
}

export default UserProfile
