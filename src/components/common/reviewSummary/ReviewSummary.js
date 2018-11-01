import React, { Component } from 'react';
import { Row, Col, Icon, Progress } from 'antd'
import _ from 'lodash'
class ReviewSummary extends Component {

    render() {
        
        const { summary } = this.props

        return (
            <Row gutter={30} type='flex' justify='center' className="row-review">

                <Col md={4} lg={4}>
                    <div className="feedback-container">
                        <div className="avarage-rating">
                            {summary.avg_rating || 5}
                        </div >
                        <div className="average-bref">out of 5</div>
                        <hr />
                        <div className="average-bref">{summary.total_reviews} Reviews</div>
                    </div>

                </Col>
                <Col className='progress-row' md={20} lg={20}>

                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                        </div>
                        <Progress
                            className="progress-container"
                            percent={summary['5stars'] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {summary['5stars']}
                        </div>
                    </div>
                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                        </div>
                        <Progress
                            className="progress-container"
                            percent={summary['4stars'] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {summary['4stars']}
                        </div>
                    </div>
                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />
                            <Icon type="star" />
                            <Icon type="star" />
                        </div>
                        <Progress
                            className="progress-container"
                            percent={summary['3stars'] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {summary['3stars']}
                        </div>
                    </div>
                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />
                            <Icon type="star" />
                        </div>
                        <Progress
                            className="progress-container"
                            percent={summary['2stars'] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {summary['2stars']}
                        </div>
                    </div>
                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />

                        </div>
                        <Progress
                            className="progress-container"
                            percent={summary['1stars'] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {summary['1stars']}
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ReviewSummary;
