import React, { Component } from 'react';
import { Card, Rate } from 'antd'
import { Link } from 'routes'
const homeImage = ("/static/images/home-image.jpg")
const truckIcon = ('/static/images/truck-marker-icon.png')
class TruckCard extends Component {
    renderCoverPhoto(truckDetail) {
       
        if (truckDetail.cover_photos && truckDetail.cover_photos.length > 0)
            return truckDetail.cover_photos[truckDetail.cover_photos.length - 1].path
        else if (truckDetail.cover_photo)
            return truckDetail.cover_photo[0].url || truckDetail.cover_photo
        else return homeImage
    }
    renderLogo(truckDetail) {

        if (truckDetail.self_logo)
            return truckDetail.self_logo
        else if (truckDetail.logo)
            return truckDetail.logo[0].url || truckDetail.logo
        else return truckIcon

        
    }
    render() {
        const { data } = this.props

        return (
            <Link prefetch to={`/food-truck/${data.slug}`} >
                <a>

                    <Card bordered={false} className="truck-card-container" cover={
                        <div className="truck-cover">
                            <div className="truck-image"
                                style={{
                                    backgroundImage: `url(${this.renderCoverPhoto(data)})`,
                                    backgroundSize: this.renderCoverPhoto(data) ?
                                        "cover" : "50px"
                                }}
                            />

                            <div className="overlay-logo">
                                <img alt="logo" src={this.renderLogo(data)} />
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
