import React, { Component } from 'react';
import stylesheet from './_categoryCard.less'


class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const { name, image } = this.props

        return (
            <div style={{ backgroundImage: `url(${image})` }} className="cuisine-card-container" >
                <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
                <div className="content-cuisine">
                    <div className="title">{name}</div>
                </div>
                <div className="cover">
                    <div className="cover-mask"></div>
                </div>
            </div>
        )
    }
}

export default CategoryCard;
