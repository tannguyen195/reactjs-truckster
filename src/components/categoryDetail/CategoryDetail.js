import React, { Component } from 'react';
import { Row, Col, Spin, Icon } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import TruckCard from '../common/truckCard/TruckCard'
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import MediaQuery from 'react-responsive'
class CategoryDetail extends Component {

    // render truck card 
    renderTruckCard(truckSearch) {
        return truckSearch.map((item, index) => {
            return <Col xs={24} sm={12} md={8} lg={8} style={{ marginBottom: "16px" }} key={index} >
                <TruckCard
                    data={item}>
                </TruckCard>
            </Col>

        })
    }
    render() {
        const { value, truckSearch, loadMoreTruck, hasMore } = this.props

        return (
            <div className="search-detail main-wrapper body-content">

                {
                    truckSearch ?
                        <div style={{ padding: "30px" }}
                            className="search-detail-container "   >
                            <div className="detail-header">
                                <h2 className="name DisplayBlackLeft">{value && value.toUpperCase()} </h2>
                            </div>

                            <hr />
                            <div className="detail-body">

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
                                    <Row gutter={16}>
                                        {this.renderTruckCard(truckSearch)}
                                    </Row>
                                </InfiniteScroll>
                            </div>
                        </div>
                        :
                        <div className="loading-container">
                            <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
                        </div>
                }

            </div>
        )


    }
}

export default CategoryDetail
