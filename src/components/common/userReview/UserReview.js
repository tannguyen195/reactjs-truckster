import React, { Component } from 'react';
import { Rate } from 'antd';

import moment from 'moment'
const unknownUserIcon = ("/static/images/unknown-user-icon.png")


class UserReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    renderReview(reviews) {
        if (reviews.length > 0)
            return reviews.map((item, index) => {

                return <div key={index} className="review">
                    <div className="review-header">
                        <div className="header-left">
                            <img alt="avatar" src={item.user.avatar ? item.user.avatar : unknownUserIcon} />
                            <div className="info">
                                <div className="user-name Body-1MediumBlackLeft">{item.user.name}</div>
                                <div className="date CaptionGreyLeft">
                                    {moment(item.created_at, "YYYY-MM-DD h:mm a").format("DD/MM/YYYY h:mm a")}
                                </div></div>
                        </div>
                        <div className="header-right">
                            <Rate disabled value={item.rating} />
                        </div>
                    </div>
                    <div className="review-content Body-1RegularGrayLeft">{item.comment}</div>
                </div>
            }
            )
        else return <div>Be the first to leave a review on Truckster</div>
    }
    render() {

        const { reviews } = this.props
        return (
            <div className="review-user-container">

                {
                   reviews && this.renderReview(reviews)
                }
            </div>
        )
    }
}

export default UserReview;
