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
import { changeRoute } from '../../actions/deepLinkAction'

import Head from '../head'
import { Cookies } from 'react-cookie'

import _breweryDetail from './_breweryDetail.less'
const cookies = new Cookies()
class BreweryDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 39.7384953,
            longtitude: -104.9964992,
            favorite: false,
        }
    }
    componentDidMount() {
        const { breweryDetail, changeRoute } = this.props
        if (breweryDetail)
            changeRoute(
                `gotrucksterconsumer://app/brewery/${breweryDetail.id}`
            )
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

    static async getInitialProps({ req, query }) {

        let token = cookies.get('token')
        let breweryDetail = null
        let suggestBrewery = null
        if (req && req.cookies) {
            token = req.cookies.token
        }
        breweryDetail = await getDataInitial(`consumer/v1/breweries/slug/${query.slug}`, token)
        suggestBrewery = await getDataInitial(`consumer/v1/breweries?breweries_type=${breweryDetail.breweries_type.name}`)

        return {
            breweryDetail, suggestBrewery
        }
    }


    handleEditReview(e) {
        this.props.editBreweryReview({
            breweryId: this.props.breweryDetail.id,
            ...e
        })
    }

    handlePostReview(e) {
        this.props.postBreweryReview({
            breweryId: this.props.breweryDetail.id,
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
                            <style dangerouslySetInnerHTML={{
                                __html: _breweryDetail
                            }} />
                            <Head
                                url="https://gotruckster.com/"
                                title={breweryDetail.name + " - Brewery Denver, CO - Truckster"}
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
        getBreweryReview,
        changeRoute
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweryDetailContainer);
