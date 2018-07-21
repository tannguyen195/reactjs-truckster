import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Map from '../common/map/Map'
import stylesheet from './_event.less'
import InfiniteScroll from 'react-infinite-scroller';
import Section from '../common/section/Section'
import EventCard from '../common/eventCard/EventCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import CustomCarousel from '../common/CustomCarousel/CustomCarousel'
import LoadingPlaceHolder from '../common/placeholder/LoadingPlaceHolder'

class Event extends Component {

    renderEventCarousel(events, imageWidth) {
        return events.map((item, index) => {

            return <div className="carousel-item" key={index} >
                <EventCard
                    data={item}
                    carousel={true}
                    imageWidth={imageWidth}

                >
                </EventCard>
            </div>
        })
    }
    renderEventCard(events, imageWidth) {
        return events.map((item, index) => {
            return <Col style={{ marginBottom: "16px" }} key={index} xs={24} sm={12} lg={12} md={12}>
                <EventCard
                    data={item}
                    carousel={true}
                    imageWidth={imageWidth}
                >
                </EventCard>

            </Col>
        })
    }
    render() {

        const { activitiesWeek, error, activities, loadMore, hasMore } = this.props
        return (
            <div className="event-container">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Row >
                    <Col style={{ padding: "30px" }}
                        className="event-detail"
                        lg={13} md={13}>

                        <div className="name DisplayBlackLeft">  Events in Denver </div>
                        <hr />
                        <div className="event-section">
                            <Section seeall={true} title="Upcoming" >
                                <RenderContainer message="Something went wrong, please try another time!"
                                    isLoading={activitiesWeek ? false : true} error={error}  >
                                    {
                                        activitiesWeek &&                                
                                            <CustomCarousel slideToShow={2}>
                                                {this.renderEventCarousel(activitiesWeek)}
                                            </CustomCarousel>
                                    }
                                </RenderContainer>
                            </Section>

                            <Section seeall={true} title="Other events" >
                                <RenderContainer message="Something went wrong, please try another time!"
                                    isLoading={activities ? false : true} error={error}  >
                                    {
                                        activities &&
                                        <InfiniteScroll
                                            pageStart={0}
                                            loadMore={loadMore}
                                            hasMore={hasMore}
                                            loader={<LoadingPlaceHolder key='loader' />}
                                        >
                                            <Row style={{ paddingTop: "30px" }} gutter={16}>

                                                {this.renderEventCard(activities, 140)}

                                            </Row>
                                        </InfiniteScroll>

                                    }
                                </RenderContainer>


                            </Section>
                        </div>

                    </Col>
                    <Col className="map" lg={11} md={11}>
                        {
                            activitiesWeek &&

                            <Map zoom={11} icon="event" location={activitiesWeek} />


                        }

                    </Col>
                </Row>
            </div>
        )


    }
}

export default Event
