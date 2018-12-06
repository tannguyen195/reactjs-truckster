import React, { Component } from 'react';
import { Rate } from 'antd'
import { Link } from 'routes'

class TruckCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const { data } = this.props
     
        return (
            <Link prefetch to={data.url} >
                <a>
                    <div className="truck-new-card-container" >
                        <div className="truck-image-container">
                            <img src={data.image} alt="truck" />
                        </div>
                        <div className="truck-info-container">
                            <img className="truck-logo" src={data.logo} alt="logo-truck" />
                            <div className="truck-name Body-1SemiBlackLeft">{data.name}</div>
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
                            <Rate disabled value={parseInt(data.rating, 10)} />
                        </div>
                    </div>
                </a>
            </Link>
        )
    }
}

export default TruckCard;
