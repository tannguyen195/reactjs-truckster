
import { Row, Col } from 'antd';
import { Link } from 'routes'
import React, { Component } from 'react'
import CategoryCard from '../common/categoryCard/CategoryCard'
import BreweryCard from '../common/breweryCard/BreweryCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import InfiniteScroll from 'react-infinite-scroller';
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import stylesheet from './_brewery.less'


const categories =
    [
        {
            name: 'Large',
            image: ('/static/images/breweryTypes/Large.jpg')
        },
        {
            name: 'Micro',
            image: ('/static/images/breweryTypes/Micro.jpg')
        },
        {
            name: 'Contract',
            image: ('/static/images/breweryTypes/Contract.jpg')
        },
        {
            name: 'Regional',
            image: ('/static/images/breweryTypes/Regional.jpg')
        },

    ];


class Brewery extends Component {

    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            return <Col lg={6} md={6} sm={12} xs={24} key={index} style={{ marginBottom: "16px" }} >
                <Link to={`/brewery-type/${item.name}`}>
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
                <BreweryCard data={item} />
            </Col>
        })
    }

    render() {
        const { breweries, error, loadMoreBrewery, hasMore } = this.props
        return (
            <div className="brewery">


                <div className="brewery main-wrapper body-content">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <div className="body-title DisplayBlackLeft">
                        Brewery types
                </div>
                    <div className="divider"> </div>
                    <Row style={{ paddingTop: "30px" }} gutter={16}>
                        {this.renderCategoryCard(categories)}

                    </Row>

                    <div className="body-title DisplayBlackLeft">
                        Breweries
                </div>
                    <div className="divider"> </div>

                    <RenderContainer message="Something went wrong, please try another time!"
                        isLoading={breweries ? false : true} error={error}  >
                        {
                            breweries &&

                            <InfiniteScroll
                                pageStart={0}
                                loadMore={loadMoreBrewery}
                                hasMore={hasMore}
                                loader={<LoadingPlaceHolder key='loader' />}
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
