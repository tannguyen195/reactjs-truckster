import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTruck } from '../../../api/truckApi'
import { getPairing } from '../../../api/pairingApi'
import { searchActivity } from '../../../api/activityApi'
import { searchBrewery } from '../../../api/breweryApi'
import { getSearchResult } from '../../../actions/truckAction'
import {
    toggleAnnounceModal,

} from '../../../actions/toggleAction'
import CityDetail from './CityDetail'
import { categories } from '../../data'

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
    componentWillMount() {
        
        sessionStorage.setItem("reloadUrl", window.location.href)
    }
    componentDidMount() {
        this.props.searchActivity(true)
        this.props.searchTruck("is_featured=true&city", "denver")
        this.props.searchBrewery("is_featured", "true")
        this.props.getPairing("is_featured=true&city", "denver")
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.history &&
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
                    breweries_type: item.breweries_type
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
        breweries: state.breweryReducer.breweries,
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
