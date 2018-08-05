import React, { Component } from 'react';
import { Row, Col } from 'antd';
import stylesheet from './_pairing.less'
import PairingCard from '../common/pairingCard/PairingCard'
import InfiniteScroll from 'react-infinite-scroller';
import RenderContainer from '../common/renderContainer/RenderContainer'
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'
import MediaQuery from 'react-responsive'
class Pairing extends Component {
    // render pairing card 
    renderPairingCard(pairings) {

        return pairings.map((item, index) => {
            return <Col key={index} xs={24} sm={12} md={8} lg={8} style={{ marginBottom: "16px" }} >
                <PairingCard data={item} />
            </Col>
        })
    }
    render() {

        const { pairings, errorPairing, hasMore, loadMorePairing } = this.props

        return (

            <div className="search-detail main-wrapper body-content">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div style={{ padding: "30px" }}
                    className="search-detail-container "   >
                    <div className="detail-header">
                        <div className="name DisplayBlackLeft">Pairings of the Week </div>
                    </div>

                    <hr />

                    <RenderContainer message="Something went wrong, please try another time!"
                        isLoading={pairings ? false : true} error={errorPairing}  >
                        {
                            pairings &&
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={loadMorePairing}
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

                                    {this.renderPairingCard(pairings)}

                                </Row>
                            </InfiniteScroll>

                        }
                    </RenderContainer>


                </div>
            </div>
        )


    }
}

export default Pairing
