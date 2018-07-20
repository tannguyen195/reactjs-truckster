import React, { Component } from 'react';
import { Card } from 'antd'
import TitleLink from '../titleLink'
import moment from 'moment'
import stylesheet from './_eventCard.less'

const eventIcon = ('/static/images/event-marker-icon.png')
class EventCard extends Component {
    render() {
        
        const { data, imageWidth, carousel, } = this.props

        return (
            <TitleLink url="/event/" title={data.name} id={data.id}>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Card style={{ margin: carousel && "8px" }} className="event-card-container" hoverable
                    cover={
                        <div className="event-image"
                            style={{
                                backgroundImage: `url(${data.pictures ?
                                    data.pictures[0].url : eventIcon})`,
                                backgroundSize: data.pictures ?
                                    "" : "50px",
                                height: imageWidth && imageWidth
                            }}
                        />}
                >
                    <div className="meta-header">


                    </div>
                    <div className="meta-body">
                        <div className="logo">
                            <div className="calendar">
                                <div className="month">
                                    {moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("MMM")}
                                </div>
                                <div className="date">
                                    {moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("DD")}
                                </div>
                                <div className="year">
                                    {moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("YYYY")}
                                </div>
                            </div>
                        </div>
                        <div className="bref ">
                            <div className="Body-1SemiBlackLeft event-name">{data.name}</div>
                            <div className="text ">
                                {moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")}
                            </div>
                            <div className="text">
                                {data.address}
                            </div>
                        </div>
                    </div>
                </Card>
            </TitleLink>
        )
    }
}

export default EventCard;
