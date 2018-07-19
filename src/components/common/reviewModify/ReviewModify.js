import React, { Component } from 'react';
import './_reviewModify.less'
import { Row, Col, Rate,  Button, Modal, Input, Tooltip  } from 'antd';
const unknownUserIcon = require("/static/images/unknown-user-icon.png")
const homeImage = require("/static/images/home-image.jpg")
const { TextArea } = Input;

class ReviewModify extends Component {

    render() {
        const { 
            detail,
            userData,
            isLoggedIn,
            handleOpenReviewModal,
            visibleReview,
            handleCancelReview,
            onRateChange,
            review,
            onContentChange,
            isLoadingPostReview,
            handleUploadReview,
            yourReview,
            visibleEditReview,
            handleOpenEditReviewModal,
            onEditContentChange,
            onEditRateChange,
            handleModifyReview,
            isLoadingEditReview,
        } = this.props

        return (
            <div className='review-modify-container'>
                <hr />
                {
                    !detail.has_review ?
                        <div className="review-button">
                            {
                                userData ? <img alt="avatar" src={userData.avatar ? userData.avatar : unknownUserIcon} />
                                    :
                                    <img alt="avatar" src={unknownUserIcon} />
                            }

                            {
                                !isLoggedIn ?
                                    <Tooltip title="Login required">
                                        <span disabled={true}
                                            className="Body-2GreyLeft">
                                            Write a Review
                                                                 </span>
                                    </Tooltip>
                                    :
                                    <a onClick={handleOpenReviewModal}
                                        className="Body-2GreyLeft">
                                        Write a Review
                                                            </a>
                            }


                            <Modal
                                width={700}
                                closable={false}
                                visible={visibleReview}
                                title='' footer={null}
                                onCancel={handleCancelReview}
                                className="review-modal"
                            >
                                <Row gutter={20} className="review-modal">
                                    <Col className="left" lg={8} md={8}>

                                        <div style={{
                                            backgroundImage:
                                                `url(${detail.cover_photo ? detail.cover_photo[0].url : homeImage})`
                                        }} className="image" >

                                        </div>

                                        <div className="name Display-2BlackLeft">{detail.name}</div>
                                    </Col>
                                    <Col className="right" lg={16} md={16}>
                                        <div className="review-rate">
                                            <TextArea value={review.content}
                                                onChange={onContentChange}
                                                placeholder=" Tell others what you think about this truck.">
                                            </TextArea>
                                        </div>
                                        <div className="content">
                                            <div className="how Body-1RegularGrayLeft">How would you rate the truck?</div>
                                            <Rate onChange={onRateChange} value={review.rate} />

                                        </div>
                                        <div className="button-modal-review">
                                            <Button onClick={handleCancelReview}>
                                                Cancel  </Button>
                                            <Button loading={isLoadingPostReview} onClick={handleUploadReview} type="primary">
                                                SUBMIT      </Button>
                                        </div>

                                    </Col>

                                </Row>
                            </Modal >

                        </div>
                        :
                        <div className="review-button">
                            {
                                userData ? <img alt="avatar" src={userData.avatar ? userData.avatar : unknownUserIcon} />
                                    :
                                    <img alt="avatar" src={unknownUserIcon} />
                            }

                            <a onClick={handleOpenEditReviewModal}
                                className="Body-2GreyLeft">
                                Edit your review </a>

                            <Modal
                                width={700}
                                closable={false}
                                visible={visibleEditReview}
                                title='' footer={null}
                                onCancel={handleCancelReview}
                                className="review-modal"
                            >
                                <Row gutter={20} className="review-modal">
                                    <Col className="left" lg={8} md={8}>

                                        <div style={{
                                            backgroundImage:
                                                `url(${detail.cover_photo ? detail.cover_photo[0].url : homeImage})`
                                        }} className="image" >

                                        </div>

                                        <div className="name Display-2BlackLeft">{detail.name}</div>
                                    </Col>
                                    <Col className="right" lg={16} md={16}>
                                        <div className="review-rate">
                                            <TextArea value={yourReview.content}
                                                onChange={onEditContentChange}
                                                placeholder=" Tell others what you think about this truck.">
                                            </TextArea>
                                        </div>
                                        <div className="content">
                                            <div className="how Body-1RegularGrayLeft">How would you rate the truck?</div>
                                            <Rate onChange={onEditRateChange}
                                                value={yourReview.rate} />

                                        </div>
                                        <div className="button-modal-review">
                                            <Button onClick={handleCancelReview}>
                                                Cancel  </Button>
                                            <Button loading={isLoadingEditReview} onClick={handleModifyReview} type="primary">
                                                SUBMIT      </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Modal >

                        </div>
                }
                <hr />
            </div>
        )
    }
}

export default ReviewModify;
