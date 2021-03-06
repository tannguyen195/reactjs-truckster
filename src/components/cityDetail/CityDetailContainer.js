import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTruck } from '../../api/truckApi'
import { getPairing } from '../../api/pairingApi'
import { searchActivity } from '../../api/activityApi'
import { searchBrewery } from '../../api/breweryApi'
import { search } from '../../api/searchApi'
import { toggleAnnounceModal } from '../../actions/toggleAction'
import { changeRoute } from '../../actions/deepLinkAction'
import { onParamChange } from '../../actions/searchAction'
import { getDataInitial, getEventTime } from '../../../global'
import CityDetail from './CityDetail'
import { categories } from '../data'
import Head from '../head'
import moment from "moment"
import _ from 'lodash'
import _cityDetail from './_cityDetail.less'

import _articleCard from '../common/articleCard/_articleCard.less'


class CityContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibleAnnounce: false,
            searchValue: "",
            result: [],
            flagSearch: false,

            typing: false,
            typingTimeout: 0
        }
    }
    static async getInitialProps({ req, query }) {
        let activitiesWeek = null,
            truckFeaturedCity = null,
            featuredPairings = null,
            featuredBreweries = null

        activitiesWeek = await getDataInitial("consumer/v1/activities?is_featured=true")
        truckFeaturedCity = await getDataInitial("consumer/v1/foodtrucks?is_featured=true")
        featuredPairings = await getDataInitial("consumer/v1/pairings?is_featured=true")
        featuredBreweries = await getDataInitial("consumer/v1/breweries?is_featured=true")

        let activitiesWeekState = []
        activitiesWeek.data.forEach(element => {
            let timeTemp = ""

            let events = getEventTime(element)

            for (let i = 0; i < events.length; ++i) {
                if (moment(events[i], "YYYY-MM-DD h:mm a").unix() > moment().unix()) {
                    timeTemp = events[i];
                    activitiesWeekState.push({
                        ...element,
                        timeDisplay: timeTemp
                    })
                    break;
                }
            }

        });

        activitiesWeekState = _.orderBy(activitiesWeekState, item => moment(item.timeDisplay, "YYYY-MM-DD h:mm a").unix())
        activitiesWeekState = _.uniqBy(activitiesWeekState, 'name');

        return {
            activitiesWeek: activitiesWeekState,
            truckFeaturedCity: truckFeaturedCity.data ? truckFeaturedCity.data : [],
            featuredPairings: featuredPairings.data,
            featuredBreweries: featuredBreweries.data,
        }
    }
    componentDidMount() {
        const { searchTruck, searchBrewery, getPairing, changeRoute } = this.props
        // searchActivity(true)
        searchTruck("is_featured=true&city", "denver")
        searchBrewery("is_featured", "true")
        getPairing("is_featured=true&city", "denver")
        changeRoute(null)
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.truckSearchResult &&
            nextProps.brewerySearchResult) {

            let truckSearch = [], brewerySearch = []


            nextProps.brewerySearchResult.forEach(item => {
                brewerySearch.push({
                    ...item,
                    id: item.id,
                    type: "brewery",
                    name: item.name,
                    cover_photo: item.cover_photo,
                    rating: item.rating,
                    breweries_type: item.breweries_type
                })
            })

            nextProps.truckSearchResult.forEach(item => {
                truckSearch.push({
                    ...item,
                    id: item.id,
                    type: "truck",
                    name: item.name,
                    cover_photo: item.cover_photo,
                    avg_rating: item.avg_rating
                })
            })

            let result = this.searchResultCuisine(this.state.searchValue).concat(truckSearch).concat(brewerySearch)

            this.setState({
                result: result,
            });

            if (this.state.flagSearch) {
                this.setState({
                    flagSearch: false
                })
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
        self.props.onParamChange(e)
        self.setState({
            searchValue: e,
            typing: false,
            typingTimeout: setTimeout(function () {
                self.props.search(e)
                self.setState({
                    flagSearch: true
                })
            }, 1000)
        });
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: _cityDetail + _articleCard
                }} />

                <Head
                    url="https://gotruckster.com/food-truck/co/denver"
                    title={"Best Denver Food Trucks - Event Schedules & Catering Info"}
                    description={"Find the Best Food Trucks in Denver, CO near you. View food truck schedules, pairings, menus, reviews, discounts & catering information here!"}
                    ogImage={"https://www.langan.com/wp-content/uploads/2017/08/Denver.jpg"}
                >
                    <link rel="canonical" href="https://gotruckster.com/food-truck/co/denver" />
                </Head>

                <CityDetail {...this.state} {...this.props}
                    onSearchValueChange={(e) => this.onSearchValueChange(e)}
                    handleShowAnnounce={(e) => this.handleShowAnnounce(e)}
                    handleSearchTruck={(e) => this.handleSearchTruck(e)}
                    handleSearchBrewery={(e) => this.handleSearchBrewery(e)}
                />
            </div>


        )
    }
}

export function mapStateToProps(state) {
    return {
        //featuredBreweries: state.breweryReducer.featuredBreweries,
        errorBrewery: state.breweryReducer.error,
        truckSearchResult: state.truckReducer.truckSearchResult,
        //truckFeaturedCity: state.truckReducer.truckFeaturedCity,
        errorPairing: state.pairingReducer.error,
        error: state.truckReducer.error,
        // activitiesWeek: state.activityReducer.activitiesWeek,
        errorActivity: state.activityReducer.error,
        brewerySearchResult: state.breweryReducer.brewerySearchResult,
        searchResult: state.truckReducer.searchResult,
        //featuredPairings: state.pairingReducer.featuredPairings,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onParamChange,
        toggleAnnounceModal,
        searchBrewery,
        getPairing,
        searchTruck,
        searchActivity,
        search,
        changeRoute
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
