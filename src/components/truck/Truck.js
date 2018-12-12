import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'

import CategoryCard from '../common/categoryCard/CategoryCard'
import TruckCard from '../common/truckCard/TruckCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import InfiniteScroll from 'react-infinite-scroller';
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'

import MediaQuery from 'react-responsive'

const categories =
    [
        {
            name: 'American',
            image: ('/static/images/cuisines/american.jpg')
        },
        {
            name: 'Asian',
            image: ('/static/images/cuisines/asian.jpg')
        },
        {
            name: 'BBQ',
            image: ('/static/images/cuisines/bbq.jpg')
        },
        {
            name: 'Burgers',
            image: ('/static/images/cuisines/burgers.jpg')
        },
        {
            name: 'Cajun Creole',
            image: ('/static/images/cuisines/cajun-creole.jpg')
        },
        {
            name: 'Coffee',
            image: ('/static/images/cuisines/coffee.jpg')
        },
        {
            name: 'Columbian',
            image: ('/static/images/cuisines/columbian.jpg')
        },

    ];


class Truck extends Component {

    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            return <Col key={index} style={{ marginBottom: "16px" }} lg={6} md={6} sm={12} xs={12}>
                <Link prefetch to={`/food-truck/co/denver/${item.name.toLowerCase()}`}>
                    <a>
                        <CategoryCard
                            image={item.image}
                            name={item.name}  >
                        </CategoryCard>
                    </a>
                </Link>
            </Col>
        })
    }
    // render truck card 
    renderTruckCard(trucks) {
        return trucks.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={6} lg={6}>
                <TruckCard data={item} />
            </Col>
        })
    }

    render() {
        const { trucks, error, loadMoreTruck, hasMore } = this.props
        return (
            <div className="truck main-wrapper body-content">

                <h1 className="body-title DisplayBlackLeft">
                    Search by Cuisine
                </h1>
                <div className="divider"> </div>
                <Row style={{ paddingTop: "30px" }} gutter={16}>
                    {this.renderCategoryCard(categories)}

                    <Col style={{ marginBottom: "16px" }} lg={6} md={6} sm={12} xs={12}>
                        <Link prefetch to={`/cuisine`}>
                            <a>

                                <CategoryCard
                                    image={('/static/images/cuisines/Farm_Fresh.jpg')}
                                    name={"SEE ALL"}  >
                                </CategoryCard>
                            </a>
                        </Link>
                    </Col>
                </Row>

                <h1 className="body-title DisplayBlackLeft">
                    View All Denver Food Trucks 
                </h1>
                <div className="divider"> </div>

                <RenderContainer message="Something went wrong, please try another time!"
                    isLoading={trucks ? false : true} error={error}  >
                    {
                        trucks &&

                        <InfiniteScroll
                            pageStart={0}
                            loadMore={loadMoreTruck}
                            hasMore={hasMore}
                            loader={<MediaQuery key='loader' maxWidth={768}>
                                {(matches) => {

                                    if (matches) {
                                        return <LoadingPlaceHolder itemNum={1} key='loader' />
                                    }
                                    else return <LoadingPlaceHolder key='loader' />
                                }}
                            </MediaQuery>}
                        >
                            <Row style={{ paddingTop: "30px" }} gutter={16}>

                                {this.renderTruckCard(trucks)}

                            </Row>
                        </InfiniteScroll>

                    }
                </RenderContainer>


            </div>
        )


    }
}

export default Truck
