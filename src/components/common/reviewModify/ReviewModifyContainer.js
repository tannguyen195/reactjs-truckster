import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReviewModify from './ReviewModify'

class ReviewModifyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleReview: false,
            visibleEditReview: false,
            review: {},
            yourReview: {},
        }
    }
    componentDidMount() {
        if (this.props.detail && this.props.detail.has_review) {
            this.setState({
                yourReview: {
                    content: this.props.detail.has_review.comment,
                    rate: this.props.detail.has_review.rating
                }
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.statusReview === 201 || nextProps.statusReview === 422) {
            this.setState({
                visibleReview: false,
                visibleEditReview: false,
            })
        }
        if (nextProps.detail && nextProps.detail.has_review) {
            this.setState({
                yourReview: {
                    content: nextProps.detail.has_review.comment,
                    rate: nextProps.detail.has_review.rating
                }
            })
        }
    }
    handleCancelReview(e) {
        this.setState({
            visibleReview: false,
            visibleEditReview: false
        })
    }

    handleOpenReviewModal() {
        this.setState({
            visibleReview: true
        })
    }
    handleOpenEditReviewModal() {
        this.setState({
            visibleEditReview: true
        })
    }
    onEditContentChange(e) {
        this.setState({
            yourReview: {
                ...this.state.yourReview,
                content: e.target.value
            }
        })
    }
    onEditRateChange(e) {
        this.setState({
            yourReview: {
                ...this.state.yourReview,
                rate: e
            }
        })
    }
    onContentChange(e) {
        this.setState({
            review: {
                ...this.state.review,
                content: e.target.value
            }
        })
    }
    onRateChange(e) {
        this.setState({
            review: {
                ...this.state.review,
                rate: e
            }
        })
    }
    handleModifyReview() {
        this.props.handleEditReview({
            rating: this.state.yourReview.rate,
            comment: this.state.yourReview.content
        })
    }
    handleUploadReview() {
        this.props.handlePostReview({
            rating: this.state.review.rate,
            comment: this.state.review.content
        })
    }

    render() {

        return (
            <ReviewModify
                {...this.state}
                {...this.props}

                onContentChange={(e) => this.onContentChange(e)}
                onRateChange={(e) => this.onRateChange(e)}
                handleCancelReview={(e) => this.handleCancelReview(e)}
                handleOpenReviewModal={(e) => this.handleOpenReviewModal(e)}
                handleOpenEditReviewModal={(e) => this.handleOpenEditReviewModal(e)}
                onEditContentChange={(e) => this.onEditContentChange(e)}
                onEditRateChange={(e) => this.onEditRateChange(e)}
                handleModifyReview={(e) => this.handleModifyReview(e)}
                handleUploadReview={(e) => this.handleUploadReview(e)}
            />

        )
    }
}
export function mapStateToProps(state) {
    return {
        statusReview: state.reviewReducer.status,
        userData: state.profileReducer.userData,
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewModifyContainer);
