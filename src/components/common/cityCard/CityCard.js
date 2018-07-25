import React, { Component } from 'react';
import { } from 'antd'
import stylesheet from './_cityCard.less'


class CityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {

        const { isComing, name, truckNum, image, more } = this.props

        return (
            <div style={{ backgroundImage: `url(${image})` }} className="city-card-container" >
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="content-city">
                    <div className="title">{name}</div>
                    {
                        !more && <div className="bref"> {!isComing ? `${truckNum} trucks` : "Coming soon"}</div>
                    }

                </div>
                <div className="cover">
                    <div style={{ background: isComing && `rgba(255, 255, 255, 0.3)` }} className="cover-mask"></div>
                </div>
            </div>
        )
    }
}

export default CityCard;
