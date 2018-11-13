import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserProfile from './UserProfile'
import { getUserReview, getUserFavorite, getUserBreweryReview, getUserFavoriteBrewery } from '../../api/reviewApi'
import _userProfile from './_userProfile.less'

class UserProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const {
            getUserReview,
            getUserFavorite,
            getUserFavoriteBrewery,
            getUserBreweryReview
        } = this.props
        getUserReview()
        getUserFavorite()
        getUserBreweryReview()
        getUserFavoriteBrewery()
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
        userBreweryReview: state.reviewReducer.userBreweryReview,
        userFavoriteBrewery: state.reviewReducer.userFavoriteBrewery,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserFavoriteBrewery,
        getUserBreweryReview,
        getUserReview,
        getUserFavorite
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
