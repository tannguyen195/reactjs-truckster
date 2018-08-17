import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserProfile from './UserProfile'
import { getUserReview, getUserFavorite, getUserBreweryReview } from '../../api/reviewApi'
import _userProfile from './_userProfile.less'

class UserProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUserReview()
        this.props.getUserFavorite()
        this.props.getUserBreweryReview()
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _userProfile }} />
                <UserProfile {...this.props} />
            </div>


        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.profileReducer.userData,
        userReview: state.reviewReducer.userReview,
        userFavorite: state.reviewReducer.userFavorite,
        userBreweryReview: state.reviewReducer.userBreweryReview
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserBreweryReview,
        getUserReview,
        getUserFavorite
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
