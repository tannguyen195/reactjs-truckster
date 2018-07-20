import React, { Component } from 'react';
import stylesheet from './_reviewSummary.less'
import { Row, Col, Icon, Progress } from 'antd'

class ReviewSummary extends Component {

    render() {

        const { summary } = this.props

        return (
            <Row gutter={30} type='flex' justify='center' className="row-review">
                 <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
                            percent={Object.values(summary)[2] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {Object.values(summary)[2]}
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
                            percent={Object.values(summary)[3] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {Object.values(summary)[3]}
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
                            percent={Object.values(summary)[4] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {Object.values(summary)[4]}
                        </div>
                    </div>
                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />
                            <Icon type="star" />
                        </div>
                        <Progress
                            className="progress-container"
                            percent={Object.values(summary)[5] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {Object.values(summary)[5]}
                        </div>
                    </div>
                    <div className="rating-bar-container" >
                        <div className="star-container">
                            <Icon type="star" />

                        </div>
                        <Progress
                            className="progress-container"
                            percent={Object.values(summary)[6] / summary.total_reviews * 100}
                            strokeWidth={8} showInfo={false} />
                        <div className="vote-container Body-1RegularGrayLeft">
                            {Object.values(summary)[6]}
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ReviewSummary;
