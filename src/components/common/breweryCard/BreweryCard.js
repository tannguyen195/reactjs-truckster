import React, { Component } from 'react';
import { Card, Rate, Tag } from 'antd'

import { Link } from 'routes'
import stylesheet from './_breweryCard.less'
const breweryIcon = require('/static/images/brewery-marker-icon.png')
const imageBreweryPlaceholder = require("/static/images/image_brewery_placeholder.png")
class BreweryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const { data } = this.props
        return (
            <Link to={`/brewery/${data.slug}` } id={data.id}>
                <a>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <Card className="brewery-card-container" hoverable cover={
                        <div className="brewery-image"
                            style={{
                                backgroundImage: `url(${data.cover_photo ?
                                    data.cover_photo[0].url : breweryIcon})`,
                                backgroundSize: data.cover_photo ?
                                    "cover" : "50px"
                            }}
                        />}
                    >
                        <div className="meta-header">
                            <p className="Body-1SemiBlackLeft ">{data.name}</p>
                            <Rate disabled value={parseFloat((Math.round(data.rating * 2) / 2).toFixed(1), 10)} />
                        </div>
                        <div className="meta-body">
                            <div className="logo">
                                <img alt="logo" src={data.logo ?
                                    data.logo[0].url :
                                    imageBreweryPlaceholder} />
                            </div>
                            <div className="bref">
                                <div className="text location CaptionGreyLeft  ">
                                    Serving at {data.location}
                                </div>
                                <div className="text CaptionGreyLeft">
                                    <Tag color="#108ee9">
                                        {data.breweries_type && data.breweries_type.name}
                                    </Tag>
                                </div>
                            </div>
                        </div>
                    </Card>
                </a>
            </Link>
        )
    }
}

export default BreweryCard;
