import React, { Component } from 'react';
import { Card, Rate, Tag } from 'antd'

import { Link } from 'routes'
const breweryIcon = ('/static/images/brewery-marker-icon.png')
const imageBreweryPlaceholder = ("/static/images/image_brewery_placeholder.png")
class ArticleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            data
        } = this.props
        return (
            <div className="article-card-container">
                <div className="example-2 card">

                    <div style={{ backgroundImage: `url(${data.image})` }} className="wrapper">
                        <div className="cover"></div>
                        <div className="data">
                        
                            <div className="content">

                                <h3 className="title Display-2WhiteLeft">{data.title}</h3>

                                <div className="detail Body-1RegularWhiteLeft">{data.detail}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ArticleCard;
