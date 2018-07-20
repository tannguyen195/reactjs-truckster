import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import AnnounceModal from '../common/announceModal/AnnounceModal'
import ShareModal from '../common/shareModal/ShareModal'
import {
    toggleShareModal,
    toggleAnnounceModal,
    toggleSignInModal,
    toggleSignUpModal,
    toggleForgotModal,
    toggleErrorModal
} from '../../actions/toggleAction'
import SignInModalContainer from '../signIn/SignInModalContainer'
import SignUpModalContainer from '../signUp/SignUpModalContainer'
import ForgotModalContainer from '../forgot/ForgotModalContainer'
import { searchTruck } from '../../api/truckApi'
import { searchBrewery } from '../../api/breweryApi'
import { signIn, logOut, signUp, loginSocial } from '../../api/authApi'
import { categories } from '../data'
import { getSearchResult } from '../../actions/truckAction'
import { notification } from 'antd';

import { checkLogin } from '../../actions/authAction'
class HeaderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visibleDrawer: false,
            searchValue: "",
            result: [],
            flagSearch: false,

            typing: false,
            typingTimeout: 0
        }

    }
    componentDidMount() {
        this.props.checkLogin()
        notification.config({
            placement: 'bottomRight',
            duration: 3,
        })
    }
    handleOpenMenu() {
        this.setState({
            visibleDrawer: !this.state.visibleDrawer
        })
    }

    handleSearchTruck(value) {
        this.props.searchTruck("keyword", value)
    }
    handleSearchBrewery(value) {
        this.props.searchBrewery("name", value)
    }


    componentWillReceiveProps(nextProps) {
        if (
            nextProps.truckSearchResult &&
            nextProps.brewerySearchResult) {

            let truckSearch = [], brewerySearch = []


            nextProps.brewerySearchResult.forEach(item => {
                brewerySearch.push({
                    id: item.id,
                    type: "brewery",
                    name: item.name,
                    cover_photo: item.cover_photo,
                    rating: item.rating,
                    breweries_type: item.breweries_type,
                    location: item.location,
                    logo: item.logo
                })
            })

            nextProps.truckSearchResult.forEach(item => {
                truckSearch.push({
                    id: item.id,
                    type: "truck",
                    name: item.name,
                    cover_photo: item.cover_photo,
                    avg_rating: item.avg_rating
                })
            })


            if (nextProps.brewerySearchResult.length === 0)
                brewerySearch = []
            if (nextProps.truckSearchResult.length === 0)
                truckSearch = []
            let result = this.searchResultCuisine(this.state.searchValue).concat(truckSearch).concat(brewerySearch)

            this.setState({
                result: result,
            });

            if (this.state.flagSearch) {
                setTimeout(() => {
                    this.props.getSearchResult({
                        params: this.state.searchValue,
                        searchResult: result
                    })
                    this.setState({
                        flagSearch: false
                    })
                }, 1000);

            }
        }
    }

    searchResultCuisine(query) {
        let newArr = []
        categories.forEach((item) => {
            if (item.name.toLowerCase().indexOf(`${query}`) > -1) {
                newArr.push(item)
            }
        })

        return newArr
    }

    onSearchValueChange(e) {
        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        self.setState({
            searchValue: e,
            typing: false,
            typingTimeout: setTimeout(function () {
                self.props.searchTruck("keyword", e, 1)
                self.props.searchBrewery("name", e, 1)

                self.setState({
                    flagSearch: true
                })
            }, 1000)
        });
    }

    render() {
        return (
            <div>
                <Header
                    {...this.state}
                    {...this.props}
                    onSearchValueChange={(e) => this.onSearchValueChange(e)}
                    handleOpenMenu={(e) => this.handleOpenMenu(e)}
                    handleSearchTruck={(e) => this.handleSearchTruck(e)}
                    handleSearchBrewery={(e) => this.handleSearchBrewery(e)}
                />
                <SignInModalContainer {...this.props} />
                <SignUpModalContainer {...this.props} />
                <ForgotModalContainer {...this.props} />
                <AnnounceModal
                    message={`This feature will be available soon.                               
                                We are currently hard at work on selected feature. It will be available as soon as possible.`}
                    visible={this.props.visibleAnnounce}
                    handleCancel={(e) => this.props.toggleAnnounceModal(e)} />
                <ShareModal
                    url={this.props.url}
                    visible={this.props.visibleShare}
                    handleCancel={(e) => this.props.toggleShareModal(e)} />

            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        url: state.toggleReducer.url,
        statusText: state.toggleReducer.statusText,
        visibleAnnounce: state.toggleReducer.visibleAnnounce,
        openError: state.toggleReducer.openError,
        visibleShare: state.toggleReducer.visibleShare,
        visibleSignIn: state.toggleReducer.visibleSignIn,
        visibleSignUp: state.toggleReducer.visibleSignUp,
        visibleForgot: state.toggleReducer.visibleForgot,
        visibleErrorSignInPopOver: state.toggleReducer.visibleErrorSignInPopOver,
        visibleErrorSignUpPopOver: state.toggleReducer.visibleErrorSignUpPopOver,

        isLoadingSignUp: state.authReducer.isLoadingSignUp,
        isLoadingSignIn: state.authReducer.isLoadingSignIn,
        isLoggedIn: state.authReducer.isLoggedIn,
        messageSignIn: state.authReducer.messageSignIn,
        statusSignIn: state.authReducer.statusSignIn,
        messageSignUp: state.authReducer.messageSignUp,
        statusSignUp: state.authReducer.statusSignUp,

        isLoadingGetUser: state.profileReducer.isLoadingGetUser,
        userData: state.profileReducer.userData,


    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSearchResult,
        toggleShareModal,
        toggleAnnounceModal,
        toggleSignInModal,
        toggleSignUpModal,
        toggleForgotModal,
        toggleErrorModal,
        signIn,
        signUp,
        logOut,
        loginSocial,
        searchTruck,
        searchBrewery,
        checkLogin
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
