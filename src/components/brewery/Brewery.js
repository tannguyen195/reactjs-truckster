
import { Row, Col } from 'antd';
import { Link } from 'routes'
import React, { Component } from 'react'
import CategoryCard from '../common/categoryCard/CategoryCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import InfiniteScroll from 'react-infinite-scroller';
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'

import MediaQuery from 'react-responsive'
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
const imageBreweryPlaceholder = ("/static/images/image_brewery_placeholder.png")
const breweryIcon = ('/static/images/brewery-marker-icon.png')
const categories =
    [
        {
            name: 'Large',
            image: ('/static/images/breweryTypes/large.jpg')
        },
        {
            name: 'Micro',
            image: ('/static/images/breweryTypes/micro.jpg')
        },
        {
            name: 'Contract',
            image: ('/static/images/breweryTypes/contract.jpg')
        },
        {
            name: 'Regional',
            image: ('/static/images/breweryTypes/regional.jpg')
        },

    ];


class Brewery extends Component {

    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            return <Col lg={6} md={6} sm={12} xs={24} key={index} style={{ marginBottom: "16px" }} >
                <Link prefetch to={`/brewery-type/${item.name.toLowerCase()}`}>
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
    // render brewery card 
    renderBreweryCard(breweries) {
        return breweries.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} sm={12} xs={24} md={8} lg={8}>
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

    render() {
        const { breweries, error, loadMoreBrewery, hasMore } = this.props
        return (
            <div className="brewery">
                <div className="brewery main-wrapper body-content">
                    <h1 className="body-title DisplayBlackLeft">
                        Brewery types
                </h1>
                    <div className="divider"> </div>
                    <Row style={{ paddingTop: "30px" }} gutter={16}>
                        {this.renderCategoryCard(categories)}

                    </Row>

                    <h1 className="body-title DisplayBlackLeft">
                        Breweries
                </h1>
                    <div className="divider"> </div>

                    <RenderContainer message="Something went wrong, please try another time!"
                        isLoading={breweries ? false : true} error={error}  >
                        {
                            breweries &&

                            <InfiniteScroll
                                pageStart={0}
                                loadMore={loadMoreBrewery}
                                hasMore={hasMore}
                                loader={
                                    <MediaQuery key='loader' maxWidth={768}>
                                        {(matches) => {

                                            if (matches) {
                                                return <LoadingPlaceHolder itemNum={1} key='loader' />
                                            }
                                            else return <LoadingPlaceHolder itemNum={6} key='loader' />
                                        }}
                                    </MediaQuery>
                                }
                            >
                                <Row style={{ paddingTop: "30px" }} gutter={16}>

                                    {this.renderBreweryCard(breweries)}

                                </Row>
                            </InfiniteScroll>

                        }
                    </RenderContainer>
                </div>
            </div>
        )


    }
}

export default Brewery
