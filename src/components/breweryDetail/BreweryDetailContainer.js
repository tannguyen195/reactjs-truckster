import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BreweryDetail from './BreweryDetail'
import { getBreweryDetail } from '../../api/breweryApi'
import ErrorPage from '../common/errorPage/ErrorPage'
import axios from 'axios';
import { getDataInitial } from 'global'
import { toggleShareModal } from '../../actions/toggleAction'
import { googleApi } from 'config'
import { editBreweryReview, postBreweryReview, getBreweryReview } from '../../api/reviewApi'
import Head from '../head'
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
        let breweryDetail = await getDataInitial(`consumer/v1/breweries/slug/${query.slug}`)


        let suggestBrewery = await getDataInitial(`consumer/v1/breweries?breweries_type=${breweryDetail.breweries_type.name}`)


        return {
            breweryDetail, suggestBrewery
        }
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
        const { status, breweryDetail } = this.props
        return (
            <div>
                {
                    breweryDetail ?
                        <div>
                            <Head
                                url="https://gotruckster.com/"
                                title={breweryDetail.name + " - Brewery Denver, CO - Go Truckster"}
                                description={breweryDetail.company_description}
                                ogImage={breweryDetail.cover_photo[0].url}
                            />
                            <BreweryDetail
                                {...this.state}
                                {...this.props}
                                handlePostReview={(e) => this.handlePostReview(e)}
                                handleEditReview={(e) => this.handleEditReview(e)}

                            />
                        </div>

                        :
                        <ErrorPage status={status} />
                }

            </div>
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