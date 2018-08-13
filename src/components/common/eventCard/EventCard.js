import React, { Component } from 'react';
import { Card } from 'antd'
import TitleLink from '../titleLink'
import moment from 'moment'
import stylesheet from './_eventCard.less'
import Item from '../../../../node_modules/antd/lib/list/Item';

const eventIcon = ('/static/images/event-marker-icon.png')
class EventCard extends Component {
    render() {

        const { data, imageWidth, carousel } = this.props

        return (
            <TitleLink url="/event/" title={data.name} id={data.id}>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Card bordered={false} style={{ margin: carousel && "8px" }} className="event-card-container"
                    cover={
                        <div className="event-image"
                            style={{
                                backgroundImage: `url(${data.pictures ?
                                    data.pictures[0].url : eventIcon})`,
                                backgroundSize: data.pictures ?
                                    "" : "50px",
                                height: imageWidth && imageWidth
                            }}
                        >
                            <div className="overlay-time">
                                <div className="calendar">
                                    <div className="month">
                                        {moment(data.timeDisplay).format("MMM")}
                                    </div>
                                    <div className="date">
                                        {moment(data.timeDisplay).format("DD")}
                                    </div>

                                </div>

                            </div>
                        </div>
                    }
                >

                    <div className="meta-body">

                        <div className="bref ">
                            <div className="Body-2SemiBlackLeft event-name">{data.name}</div>
                            <div className="text CaptionGreyLeft">
                                {moment(data.timeDisplay).format("dddd")} <span>&bull;</span> {data.address}
                            </div>
                            <div className="time-event">
                                {moment(data.timeDisplay, "YYYY-MM-DD hh:mm a").format(" hh:mm:a")} - {moment(data.end_time).format(" hh:mm:a")}
                            </div>
                        </div>
                    </div>
                </Card>
            </TitleLink>
        )
    }
}

export default EventCard;
