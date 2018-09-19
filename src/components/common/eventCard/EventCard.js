import React, { Component } from 'react';
import { Card } from 'antd'
import { Link } from 'routes'
import moment from 'moment'

const eventIcon = ('/static/images/event-marker-icon.png')
class EventCard extends Component {
    render() {

        const { data, imageWidth, carousel } = this.props
        return (
            <Link to={"/event/" + data.slug}>
                <a>
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
                                            {moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("MMM")}
                                        </div>
                                        <div className="date">
                                            {moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("DD")}
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
                                    {moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("dddd")} <span>&bull;</span> {data.address}
                                </div>
                                <div className="time-event">
                                    {moment(data.timeDisplay, "YYYY-MM-DD h:mm a").format("h:mm a")} - {moment(data.end_time, "YYYY-MM-DD h:mm a").format("h:mm a")}
                                </div>
                            </div>
                        </div>
                    </Card>
                </a>
            </Link>
        )
    }
}

export default EventCard;
