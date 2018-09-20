import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TruckDetail from './TruckDetail'

import { getTruckDetail } from '../../api/truckApi'
import { getTruckReview, postReview, markFavorite, unmarkFavorite, editReview } from '../../api/reviewApi'
import { getDataInitial } from 'global'
import AnnounceModal from '../common/announceModal/AnnounceModal'
import ErrorPage from '../common/errorPage/ErrorPage'
import { toggleShareModal } from '../../actions/toggleAction'
import { getSchedule } from '../../../global'
import { changeRoute } from '../../actions/deepLinkAction'
import Head from '../head'
import moment from 'moment'
import { Cookies } from 'react-cookie'

import _truckDetail from './_truckDetail.less'
const cookies = new Cookies()
class TruckDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "introduction",
            favorite: false,
            locationArr: [{ latitude: 39.7384953, longtitude: -104.9964992 }],
            order: [],
            subTotal: 0,
            total: 0,
            visibleAnnounce: false,
            iconMarker: "truck",
            locations: [],
            mode: 'upcoming',
            events: [],
            selectedKey: "0",
        }
    }

    static async getInitialProps({ req, query }) {


        let token = cookies.get('token')
        let truckDetail = null
        let suggestTruck = null
        if (req && req.cookies) {
            token = req.cookies.token
        }
        truckDetail = await getDataInitial(`consumer/v1/foodtrucks/slug/${query.slug}`, token)


        let cuisineStringArray = []
        if (truckDetail)
            truckDetail.cuisine.forEach(item => {
                cuisineStringArray.push(item.name)
            })

        suggestTruck = await getDataInitial(`consumer/v1/foodtrucks?city=denver&cuisine=${cuisineStringArray.toString()}&sort_by=avg_rating&sort_type=desc`)
        return {
            truckDetail, suggestTruck
        }
    }
    componentWillReceiveProps(nextProps) {
        const { truckDetail } = nextProps

        if (truckDetail) {

            // Set location
            let locations = [], icon = "", events = []
            getSchedule(truckDetail.calendar).forEach((item, index) => {
                if (item && item.brewery === null) {
                    icon = "truck"
                }
                else {
                    icon = "pairing"
                }
                events.push({
                    ...item,
                    key: index,
                    icon: icon,
                })
                if (moment(item.timeDisplay, "YYYY-MM-DD h:mm a") > moment())
                    locations.push(item)
            })

            //Sort upcoming schedule
            locations.sort((a, b) => {

                if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                    return -1
                if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                    return 1
                return 0
            })
            let sortedLocations = []
            locations.forEach((item, index) => {
                sortedLocations.push({
                    ...item,
                    index: String(index)
                })
            })

            //render first icon
            if (sortedLocations[0] && sortedLocations[0].brewery === null) {
                icon = "truck"
            }
            else {
                icon = "pairing"
            }

            this.setState({
                favorite: truckDetail.is_favourite,
                locationArr: [sortedLocations[0]],
                locations: sortedLocations,
                iconMarker: icon,
                events: events,
                selectedKey: sortedLocations[0] && sortedLocations[0].index
            })


        }
    }
    componentDidMount() {
        const { truckDetail } = this.props
        if (truckDetail) {
            // change deep link route
            this.props.changeRoute(
                `gotrucksterconsumer://app/truck/${truckDetail.id}`
            )
            // Set location
            let locations = [], icon = "", events = []
            getSchedule(truckDetail.calendar).forEach((item, index) => {
                if (item && item.brewery === null) {
                    icon = "truck"
                }
                else {
                    icon = "pairing"
                }
                events.push({
                    ...item,
                    key: index,
                    icon: icon,
                })
                if (moment(item.timeDisplay, "YYYY-MM-DD h:mm a") > moment())
                    locations.push(item)
            })

            //Sort upcoming schedule
            locations.sort((a, b) => {

                if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() < moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                    return -1
                if (moment(a.timeDisplay, "YYYY-MM-DD h:mm a").unix() > moment(b.timeDisplay, "YYYY-MM-DD h:mm a").unix())
                    return 1
                return 0
            })
            let sortedLocations = []
            locations.forEach((item, index) => {
                sortedLocations.push({
                    ...item,
                    index: String(index)
                })
            })

            //render first icon
            if (sortedLocations[0] && sortedLocations[0].brewery === null) {
                icon = "truck"
            }
            else {
                icon = "pairing"
            }

            this.setState({
                locationArr: [sortedLocations[0]],
                locations: sortedLocations,
                iconMarker: icon,
                events: events,
                selectedKey: sortedLocations[0] && sortedLocations[0].index
            })


        }

    }

    handleModeChange(e) {
        const mode = e.target.value;
        this.setState({ mode });
    }
    handleCheckOut() {
        this.setState({
            visibleAnnounce: true
        })
    }

    handleCancel() {
        this.setState({
            visibleAnnounce: false
        })
    }
    checkExistOrder(value, arr) {
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i].id === value) {
                return true
            }
        }
        return false
    }
    handleAddOne(e) {
        let newOrder = []
        this.state.order.forEach((item, index) => {
            if (item.id === e.id)
                item = {
                    ...item,
                    count: item.count + 1
                }
            newOrder.push(item)
        })

        this.setState({
            order: newOrder,
            subTotal: this.calculateSubTotal(newOrder)
        })
    }
    handleRemoveOne(e) {
        let newOrder = []
        this.state.order.forEach((item, index) => {
            if (item.id === e.id)
                item = {
                    ...item,
                    count: item.count - 1
                }
            newOrder.push(item)
        })

        this.setState({
            order: newOrder,
            subTotal: this.calculateSubTotal(newOrder)
        })
    }
    handleRemoveMenuItem(e) {

        let newOrder = this.state.order

        this.state.order.forEach((item, index) => {
            if (item.id === e.id)
                newOrder.splice(index, 1)
        })

        this.setState({
            order: newOrder,
            subTotal: this.calculateSubTotal(newOrder)
        })

    }

    handleClickMenuItem(e) {
        let newOrder = []
        let checkExist = this.checkExistOrder(e.id, this.state.order);
        if (checkExist) {
            this.state.order.forEach((item, index) => {

                if (item.id === e.id)
                    item = {
                        ...item,
                        count: item.count + 1
                    }
                newOrder.push(item)
            })

            this.setState({
                order: newOrder,
                subTotal: this.calculateSubTotal(newOrder)
            })
        }
        else {
            newOrder = this.state.order.concat({
                ...e,
                count: 1
            })
            this.setState({
                order: newOrder,
                subTotal: this.calculateSubTotal(newOrder)
            })
        }
    }
    calculateSubTotal(order) {
        let subTotal = 0;
        order.map((item, index) => {
            return subTotal = subTotal + item.count * item.price
        })
        return subTotal
    }

    handleClickMenu(e) {
        this.setState({
            current: e.key,
        });
    }
    handleEditReview(e) {
        this.props.editReview({
            truckId: this.props.id,
            ...e
        })
    }

    handlePostReview(e) {
        this.props.postReview({
            truckId: this.props.truckDetail.id,
            ...e
        })
    }


    onFavoriteChange(e) {
        if (e === 1) {
            this.props.markFavorite(this.props.truckDetail.id)
        }
        else {
            this.props.unmarkFavorite(this.props.truckDetail.id)
        }
        this.setState({
            favorite: e
        })
    }
    handleClickEvent(e) {
        if (moment(e.timeDisplay, "YYYY-MM-DD h:mm a") > moment()) {
            let icon = ""
            if (e && e.brewery === null) {
                icon = "truck"
            }
            else {
                icon = "pairing"
            }

            this.setState({
                mode: "upcoming",
                selectedKey: String(e.key),
                locationArr: [e],
                iconMarker: icon
            })
        }
    }
    handleClickSchedule(e) {

        let icon = "",
            item = this.state.locations[e.key]

        if (item && item.brewery === null) {
            icon = "truck"
        }
        else {
            icon = "pairing"
        }

        this.setState({
            selectedKey: String(e.key),
            locationArr: [item],
            iconMarker: icon
        })
    }
    render() {
        const { truckDetail } = this.props
        return (
            <div>
                {
                    truckDetail ? <div>
                        <style dangerouslySetInnerHTML={{
                            __html: _truckDetail
                        }} />
                        <Head
                            url="https://gotruckster.com/"
                            title={truckDetail.name + " - Food Truck Denver, CO - Truckster"}
                            description={truckDetail.company_description}
                            ogImage={truckDetail.cover_photo[0].url}
                        />
                        <TruckDetail
                            {...this.state}
                            {...this.props}
                            handleCancel={(e) => this.handleCancel(e)}
                            handleCheckOut={(e) => this.handleCheckOut(e)}
                            handleAddOne={(e) => this.handleAddOne(e)}
                            handleRemoveOne={(e) => this.handleRemoveOne(e)}
                            handleRemoveMenuItem={(e) => this.handleRemoveMenuItem(e)}
                            calculateSubTotal={(e) => this.calculateSubTotal(e)}
                            handleClickMenuItem={(e) => this.handleClickMenuItem(e)}
                            handleClickSchedule={(e) => this.handleClickSchedule(e)}
                            onFavoriteChange={(e) => this.onFavoriteChange(e)}
                            handlePostReview={(e) => this.handlePostReview(e)}
                            handleClickMenu={(e) => this.handleClickMenu(e)}
                            handleEditReview={(e) => this.handleEditReview(e)}
                            handleModeChange={(e) => this.handleModeChange(e)}
                            handleClickEvent={(e) => this.handleClickEvent(e)}
                        />
                        <AnnounceModal
                            message={`This feature will be available soon.                               
                        We are currently hard at work on selected feature. It will be available as soon as possible.`}
                            visible={this.state.visibleAnnounce}
                            handleCancel={(e) => this.handleCancel(e)} />
                    </div> : <ErrorPage status={404} />
                }
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoadingTruckDetail: state.truckReducer.isLoadingTruckDetail,

        error: state.truckReducer.error,
        status: state.truckReducer.status,
        truckMenu: state.truckReducer.truckMenu,
        isLoadingPostReview: state.reviewReducer.isLoadingPostReview,
        isLoadingEditReview: state.reviewReducer.isLoadingEditReview,
        isLoggedIn: state.authReducer.isLoggedIn,
        reviews: state.reviewReducer.reviews,

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShareModal,
        markFavorite, unmarkFavorite,
        getTruckDetail,
        getTruckReview,
        postReview,
        editReview,
        changeRoute

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TruckDetailContainer);
