import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BreweryDetail from './BreweryDetail'
import Fade from 'react-reveal/Fade';
import { getBreweryDetail } from '../../api/breweryApi'
import ErrorPage from '../common/errorPage/ErrorPage'
import axios from 'axios';
import { getDataInitial } from 'global'
import { toggleShareModal } from '../../actions/toggleAction'
import { googleApi } from 'config'
import { editBreweryReview, postBreweryReview, getBreweryReview } from '../../api/reviewApi'
class BreweryDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 39.7384953,
            longtitude: -104.9964992,
            favorite: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        let self = this
        if (nextProps.breweryDetail) {

            axios({
                method: 'get',
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${nextProps.breweryDetail.location}&key=${googleApi}`,
            })
                .then(function (response) {

                    self.setState({
                        latitude: response.data.results[0].geometry.location.lat,
                        longtitude: response.data.results[0].geometry.location.lng,
                    })
                })
                .catch(function (response) {

                });

        }
        if (nextProps.id !== this.props.id) {
            this.props.getBreweryDetail(nextProps.id)
        }

    }

    static async getInitialProps({ reduxStore, req, query }) {

        return {
            breweryDetail: await getDataInitial(`consumer/v1/breweries/${query.id}`),
            id: query.id
        }
    }
    componentDidMount() {
        this.props.getBreweryReview(this.props.id)
    }
    handleEditReview(e) {
        this.props.editBreweryReview({
            breweryId: this.props.match.params.id,
            ...e
        })
    }

    handlePostReview(e) {
        this.props.postBreweryReview({
            breweryId: this.props.match.params.id,
            ...e
        })
    }

    render() {
        const { error, status } = this.props

        return (
            <Fade>
                {
                    error ?
                        <ErrorPage status={status} />
                        :
                        <BreweryDetail
                            {...this.state}
                            {...this.props}
                            handlePostReview={(e) => this.handlePostReview(e)}
                            handleEditReview={(e) => this.handleEditReview(e)}

                        />
                }

            </Fade>
        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoadingPostBreweryReview: state.reviewReducer.isLoadingPostBreweryReview,
        isLoadingEditBreweryReview: state.reviewReducer.isLoadingEditBreweryReview,
        isLoadingBreweryDetail: state.breweryReducer.isLoadingBreweryDetail,
        error: state.breweryReducer.error,
        status: state.breweryReducer.status,

        reviews: state.reviewReducer.breweryReviews,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShareModal,
        getBreweryDetail,
        editBreweryReview,
        postBreweryReview,
        getBreweryReview
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweryDetailContainer);
