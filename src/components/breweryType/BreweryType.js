import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './_breweryType.less'
import InfiniteScroll from 'react-infinite-scroller';
import BreweryCard from '../common/breweryCard/BreweryCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
class BreweryType extends Component {

    // render brewery card 
    renderBreweryCard(brewerySearch) {
        return brewerySearch.map((item, index) => {

            return <Col xs={24} sm={12} md={8} lg={8} style={{ marginBottom: "16px" }} key={index} >
                <BreweryCard
                    data={item}>
                </BreweryCard>

            </Col>

        })
    }
    render() {
        const { match, brewerySearch, loadMoreBrewery, hasMore, error } = this.props
        return (
            <div className="search-detail main-wrapper body-content">
                <div style={{ padding: "30px" }}
                    className="search-detail-container "   >
                    <div className="detail-header">
                        <div className="name DisplayBlackLeft">{match.params.value} </div>
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
                                    loader={<LoadingPlaceHolder key='loader' />}
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
