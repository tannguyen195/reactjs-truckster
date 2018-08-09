import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTruck } from '../../api/truckApi'
import { getPairing } from '../../api/pairingApi'
import { searchActivity } from '../../api/activityApi'
import { searchBrewery } from '../../api/breweryApi'
import { getSearchResult } from '../../actions/truckAction'
import {
    toggleAnnounceModal,

} from '../../actions/toggleAction'
import CityDetail from './CityDetail'
import { categories } from '../data'
import Head from '../head'
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

    componentDidMount() {
        this.props.searchActivity(true)
        this.props.searchTruck("is_featured=true&city", "denver")
        this.props.searchBrewery("is_featured", "true")
        this.props.getPairing("is_featured=true&city", "denver")
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
                this.props.getSearchResult({
                    params: this.state.searchValue,
                    searchResult: result
                })
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
                <Head
                    url="https://gotruckster.com/"
                    title={"Denver, Colorado - Go Truckster"}
                    description={"Discover the lastest events and best food trucks in Denver"}
                    ogImage={"https://www.langan.com/wp-content/uploads/2017/08/Denver.jpg"}
                />
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
        featuredBreweries: state.breweryReducer.featuredBreweries,
        errorBrewery: state.breweryReducer.error,
        truckSearchResult: state.truckReducer.truckSearchResult,
        truckFeaturedCity: state.truckReducer.truckFeaturedCity,
        pairings: state.pairingReducer.pairings,
        errorPairing: state.pairingReducer.error,
        error: state.truckReducer.error,
        activitiesWeek: state.activityReducer.activitiesWeek,
        errorActivity: state.activityReducer.error,
        brewerySearchResult: state.breweryReducer.brewerySearchResult,
        searchResult: state.truckReducer.searchResult,
        featuredPairings: state.pairingReducer.featuredPairings,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSearchResult,
        toggleAnnounceModal,
        searchBrewery,
        getPairing,
        searchTruck,
        searchActivity
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);
