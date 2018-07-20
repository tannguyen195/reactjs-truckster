import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'

import CategoryCard from '../common/categoryCard/CategoryCard'
import TruckCard from '../common/truckCard/TruckCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import InfiniteScroll from 'react-infinite-scroller';
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import stylesheet from './_truck.less'


const categories =
    [
        {
            name: 'American',
            image: require('/static/images/cuisines/American.jpg')
        },
        {
            name: 'Asian',
            image: require('/static/images/cuisines/Asian.jpg')
        },
        {
            name: 'BBQ',
            image: require('/static/images/cuisines/BBQ.jpg')
        },
        {
            name: 'Burgers',
            image: require('/static/images/cuisines/Burgers.jpg')
        },
        {
            name: 'Cajun Creole',
            image: require('/static/images/cuisines/Cajun_Creole.jpg')
        },
        {
            name: 'Coffee',
            image: require('/static/images/cuisines/Coffee.jpg')
        },
        {
            name: 'Columbian',
            image: require('/static/images/cuisines/Columbian.jpg')
        },

    ];


class Truck extends Component {

    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            return <Col key={index} style={{ marginBottom: "16px" }} span={6}>
                <Link to={`/truck/cuisine/${item.name}`}>

                    <CategoryCard
                        image={item.image}
                        name={item.name}  >
                    </CategoryCard>

                </Link>
            </Col>
        })
    }
    // render truck card 
    renderTruckCard(trucks) {
        return trucks.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={8}>
                <TruckCard data={item} />
            </Col>
        })
    }

    render() {
        const { trucks, error, loadMoreTruck, hasMore } = this.props
        return (
            <div className="truck main-wrapper body-content">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="body-title DisplayBlackLeft">
                    Cuisine
                </div>
                <div className="divider"> </div>
                <Row style={{ paddingTop: "30px" }} gutter={16}>
                    {this.renderCategoryCard(categories)}

                    <Col style={{ marginBottom: "16px" }} span={6}>
                        <Link to={`/truck/cuisine`}>
                            <CategoryCard
                                image={require('/static/images/cuisines/Farm_Fresh.jpg')}
                                name={"SEE ALL"}  >
                            </CategoryCard>
                        </Link>
                    </Col>
                </Row>

                <div className="body-title DisplayBlackLeft">
                    Food trucks
                </div>
                <div className="divider"> </div>

                <RenderContainer message="Something went wrong, please try another time!"
                    isLoading={trucks ? false : true} error={error}  >
                    {
                        trucks &&

                        <InfiniteScroll
                            pageStart={0}
                            loadMore={loadMoreTruck}
                            hasMore={hasMore}
                            loader={<LoadingPlaceHolder key='loader' />}
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
