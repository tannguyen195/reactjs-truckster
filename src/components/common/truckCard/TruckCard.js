import React, { Component } from 'react';
import { Card, Rate } from 'antd'
import { Link } from 'routes'
import TitleLink from '../titleLink'
import stylesheet from './_truckCard.less'
import moment from 'moment'

const truckIcon = ('/static/images/truck-marker-icon.png')
class TruckCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const { data } = this.props
        return (
            <Link to={`/food-truck/${data.slug}`} >
                <a>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <Card className="truck-card-container" hoverable cover={
                        <div className="truck-image"
                            style={{
                                backgroundImage: `url(${data.cover_photo ?
                                    data.cover_photo[0].url : truckIcon})`,
                                backgroundSize: data.cover_photo ?
                                    "cover" : "50px"
                            }}
                        />}
                    >
                        <div className="meta-header">
                            <p className="Body-1SemiBlackLeft ">{data.name}</p>
                            <Rate disabled value={parseInt(data.avg_rating, 10)} />
                        </div>
                        <div className="meta-body">
                            {/* <div className="logo">
                            <img alt="logo" src={logo} />
                        </div> */}
                            <div className="bref">
                                {/* <div className="text CaptionGreyLeft  ">
                                Serving at {serve}
                            </div> */}
                                <div className="text CaptionGreyLeft">
                                    {
                                        data.start_time && data.end_time &&
                                        `Open ${moment(data.start_time).format("hh:mm a")} - ${moment(data.end_time).format("hh:mm a")}`
                                    }
                                </div>
                            </div>
                        </div>
                    </Card>
                </a>
            </Link>
        )
    }
}

export default TruckCard;
