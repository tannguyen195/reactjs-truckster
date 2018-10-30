import React, { Component } from 'react';
import { Card, Rate } from 'antd'
import { Link } from 'routes'

const truckIcon = ('/static/images/truck-marker-icon.png')
class TruckCard extends Component {

    render() {
        const { data } = this.props
        return (
            <Link prefetch to={`/food-truck/${data.slug}`} >
                <a>
    
                    <Card bordered={false} className="truck-card-container" cover={
                        <div className="truck-cover">
                            <div className="truck-image"
                                style={{
                                    backgroundImage: `url(${data.cover_photo ?
                                        data.cover_photo[0].url : truckIcon})`,
                                    backgroundSize: data.cover_photo ?
                                        "cover" : "50px"
                                }}
                            />

                            <div className="overlay-logo">
                                <img alt="logo" src={data.logo ? data.logo[0].url : truckIcon} />
                            </div>
                        </div>

                    }
                    >
                        <div className="meta-header">
                            <div className="meta-header-title  Body-2SemiBlackLeft ">{data.name}</div>
                            <div className="cuisine-tag">
                                {
                                    data.cuisine.map((item, index) => {
                                        if (index === 0)
                                            return <div key={index} className="cuisine-tag-item CaptionGreyLeft">
                                                {item.name} </div>
                                        else return <div key={index} className="cuisine-tag-item CaptionGreyLeft">
                                            <span>&bull;</span>   {item.name} </div>
                                    })
                                }
                            </div>
                            <Rate disabled value={parseInt(data.avg_rating, 10)} />

                        </div>

                    </Card>
                </a>
            </Link>
        )
    }
}

export default TruckCard;
