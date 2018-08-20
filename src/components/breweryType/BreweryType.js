import React, { Component } from 'react';
import { Row, Col } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import MediaQuery from 'react-responsive'
const imageBreweryPlaceholder = ("/static/images/image_brewery_placeholder.png")
const breweryIcon = ('/static/images/brewery-marker-icon.png')
class BreweryType extends Component {

    // render brewery card 
    renderBreweryCard(brewerySearch) {
        return brewerySearch.map((item, index) => {

            return <Col xs={24} sm={12} md={8} lg={8} style={{ marginBottom: "16px" }} key={index} >
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
        const { value, brewerySearch, loadMoreBrewery, hasMore, error } = this.props
        return (
            <div className="search-detail main-wrapper body-content">

                <div style={{ padding: "30px" }}
                    className="search-detail-container "   >
                    <div className="detail-header">
                        <h2 className="name DisplayBlackLeft">{value} </h2>
                    </div>

                    <hr />
                    <div className="detail-body">
                        <RenderContainer message="Something went wrong, please try another time!"
                            isLoading={brewerySearch ? false : true} error={error}  >
                            {
                                brewerySearch &&

                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={loadMoreBrewery}
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
                                    <Row gutter={16}>
                                        {this.renderBreweryCard(brewerySearch)}
                                    </Row>
                                </InfiniteScroll>
                            }
                        </RenderContainer>
                    </div>

                </div>
            </div>
        )


    }
}

export default BreweryType
