import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Nearby from './Nearby'
import { getNearby } from '../../api/nearbyApi'
import { mountNearby } from '../../actions/nearbyAction'
import { getEventTime } from 'global'
import moment from 'moment'
import Head from '../head'
import _nearby from './_nearby.less'
const eventMarkerIcon = ('/static/images/event-marker-icon.png')
const pairingMarkerIcon = ('/static/images/pairing-marker-icon.png')
const breweryMarkerIcon = ('/static/images/brewery-marker-icon.png')
const truckMarkerIcon = ('/static/images/truck-marker-icon.png')
let cityCircle = null
let googleGlobal = null
class NearbyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 39.742043,
                lng: -104.991531,
            },
            zoom: 12,
            currentHoverItem: null,
            visible: false,
            nearbyState: [],
            tempNearbyState: [],
            visibleNearbyEventDetail: false,
            nearbyEventDetail: null,
            isInRightPosition: true,
            currentLocation: null
        }
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.nearby) {
            if (nextProps.nearby.length > 0) {
                let nearby = [], nearbyList = []
                let keys = ["1"];

                for (let i = 0; i < nextProps.nearby.length; ++i) {
                    let tempItem = {}
                    let tempTime = ""

                    let events = getEventTime(nextProps.nearby[i])
                    for (let i = 0; i < events.length; ++i) {

                        if (moment(events[i], "YYYY-MM-DD hh:mm a").unix() > moment().unix()) {
                            tempTime = events[i];

                            break;
                        }
                    }

                    if (moment(tempTime, "YYYY-MM-DD hh:mm:a").isBefore(moment().add(1, 'days'))) {
                        //Check if item is brewery
                        if (nextProps.nearby[i].brewery &&
                            !nextProps.nearby[i].food_truck) {
                            tempItem = {
                                ...nextProps.nearby[i],
                                type: "brewery",
                                nameDisplay: nextProps.nearby[i].brewery.name,
                                image: nextProps.nearby[i].brewery.cover_photo && nextProps.nearby[i].brewery.cover_photo[0].url,
                                marker: breweryMarkerIcon,
                                addressDisplay: nextProps.nearby[i].location_name
                            }
                        }
                        //Check if item is activity
                        else if (nextProps.nearby[i].activity &&
                            !nextProps.nearby[i].food_truck &&
                            !nextProps.nearby[i].brewery) {
                            tempItem = {
                                ...nextProps.nearby[i],
                                type: "activity",
                                nameDisplay: nextProps.nearby[i].activity.name,
                                image: nextProps.nearby[i].activity.pictures && nextProps.nearby[i].activity.pictures[0].url,
                                marker: eventMarkerIcon,
                                addressDisplay: nextProps.nearby[i].activity.address
                            }
                        }
                        //Check if item is food truck
                        else if (nextProps.nearby[i].food_truck &&
                            !nextProps.nearby[i].activity &&
                            !nextProps.nearby[i].brewery) {
                            tempItem = {
                                ...nextProps.nearby[i],
                                type: "food_truck",
                                image: nextProps.nearby[i].food_truck.cover_photo && nextProps.nearby[i].food_truck.cover_photo[0].url,
                                marker: truckMarkerIcon,
                                addressDisplay: nextProps.nearby[i].location_name,
                                nameDisplay: nextProps.nearby[i].food_truck.name
                            }
                        }
                        //Check if item is paring (activity & food truck)
                        else if (nextProps.nearby[i].activity &&
                            nextProps.nearby[i].food_truck) {

                            tempItem = {
                                ...nextProps.nearby[i],
                                type: "pairing-activity",
                                nameDisplay: nextProps.nearby[i].activity.name,
                                image: nextProps.nearby[i].activity.pictures && nextProps.nearby[i].activity.pictures[0].url,
                                marker: eventMarkerIcon,
                                addressDisplay: nextProps.nearby[i].activity.address
                            }
                        }
                        //Check if item is paring (brewery & food truck)
                        else if (nextProps.nearby[i].brewery &&
                            nextProps.nearby[i].food_truck) {
                            tempItem = {
                                ...nextProps.nearby[i],
                                type: "pairing-brewery",
                                nameDisplay: nextProps.nearby[i].brewery.name,
                                image: nextProps.nearby[i].brewery.cover_photo && nextProps.nearby[i].brewery.cover_photo[0].url,
                                marker: pairingMarkerIcon,
                                addressDisplay: nextProps.nearby[i].location_name
                            }
                        }
                        // nearby.push({ ...nextProps.nearby[i], ...tempItem })
                        nearbyList.push({ ...nextProps.nearby[i], ...tempItem, timeDisplay: tempTime })

                        if (!keys.includes(nextProps.nearby[i].latitude)) {
                            nearby.push({ ...nextProps.nearby[i], ...tempItem, timeDisplay: tempTime })
                            keys.push(nextProps.nearby[i].latitude)
                        }
                    }
                }


                let breweryArray = [],
                    activityArray = [],
                    foodTruckArray = [],
                    pairingBreweryArray = [],
                    pairingActivityArray = []

                let sortedItem = [
                    breweryArray,
                    activityArray,
                    foodTruckArray,
                    pairingBreweryArray,
                    pairingActivityArray
                ]

                nearby.forEach(item => {
                    switch (item.type) {
                        case "brewery":
                            sortedItem[0].push(item)
                            break;
                        case "activity":
                            sortedItem[1].push(item)
                            break;
                        case "food_truck":
                            sortedItem[2].push(item)
                            break;
                        case "pairing-brewery":
                            sortedItem[3].push(item)
                            break;
                        case "pairing-activity":
                            sortedItem[4].push(item)
                            break;
                        default: break;
                    }
                })

                this.setState({
                    nearbyState: sortedItem,
                    tempNearbyState: sortedItem,
                    nearbyList: nearbyList
                })
                if (nextProps.currentPage > this.props.currentPage)
                    document.getElementById("content").scrollTop = document.getElementById("content").scrollHeight
            }
            else
                this.setState({
                    nearbyState: [],
                    tempNearbyState: [],
                    nearbyList: []
                })
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(((e) => {

                this.setState({
                    currentLocation: {
                        lat: e.coords.latitude,
                        lng: e.coords.longitude
                    }
                })
                this.detectCurrentLocation({
                    lat: e.coords.latitude,
                    lng: e.coords.longitude
                })
            }));
        }
    }

    onVisibleChange(e) {

        if (e === this.state.currentHoverItem) {
            this.setState({ visible: true })
        }
    }
    onEventEnter(e) {

        this.setState({
            currentHoverItem: e.target.getAttribute("id")
        })
    }
    onEventLeave(e) {

        this.setState({
            currentHoverItem: null
        })
    }
    detectCurrentLocation(currentLocation) {
        let self = this
        if (googleGlobal && currentLocation) {
            var geocoder = new googleGlobal.maps.Geocoder()
            geocoder.geocode({ 'latLng': new googleGlobal.maps.LatLng(currentLocation.lat, currentLocation.lng) },
                function (results, status) {
                    if (status === googleGlobal.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            if (results[1].formatted_address.includes("CO") && results[1].formatted_address.includes("USA"))
                                self.setState({
                                    isInRightPosition: true,
                                    center: currentLocation
                                })
                            else self.setState({
                                isInRightPosition: false
                            })
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });
        }
    }

    handleGoogleMapApi(google) {
        const { center, currentLocation } = this.state
        const map = google.map
        googleGlobal = google

        this.detectCurrentLocation(currentLocation)
        cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.1,
            map: map,
            center: center,
            radius: 8046.72
        });
    }
    onChangeMapPosition(e) {

        this.props.mountNearby()
        this.props.getNearby(e.center, 1)
        if (cityCircle) {
            cityCircle.setOptions({
                ...cityCircle,
                center: e.center
            })
        }
        this.setState({
            zoom: e.zoom,
            center: e.center,
        })
    }
    onChangeFilterItem(e, key) {
        const { nearbyState } = this.state

        const tempNearbyState = [...this.state.tempNearbyState]
        switch (key) {
            case 0:
                tempNearbyState[2] = e === false ? [] : nearbyState[2]
                this.setState({
                    tempNearbyState: tempNearbyState
                })
                break;
            case 1:
                tempNearbyState[4] = e === false ? [] : nearbyState[4]
                this.setState({
                    tempNearbyState: tempNearbyState
                })
                break;
            case 2:
                tempNearbyState[3] = e === false ? [] : nearbyState[3]
                this.setState({
                    tempNearbyState: tempNearbyState
                })
                break;

            default: break;
        }
    }
    loadMoreNearby() {
        document.getElementById("content").scrollTop = 0;
        const { getNearby, currentPage } = this.props
        getNearby(this.state.center, currentPage + 1)
    }
    handleClickNearbyEvent(e) {
        document.getElementById("content").scrollTop = 0;
        let arr = []
        this.state.nearbyList.forEach(item => {
            if (e.latitude === item.latitude)
                arr.push(item)
        })

        this.setState({
            visibleNearbyEventDetail: true,
            nearbyEventDetail: arr

        })
    }

    handleClickBack(e) {
        var elmnt = document.getElementById("content");
        elmnt.scrollTop = 0
        this.setState({
            visibleNearbyEventDetail: false
        })
    }
    handleCloseModal() {
        this.setState({
            isInRightPosition: !this.state.isInRightPosition
        })
    }
    handleExploreInRightPosition() {
        this.setState({
            isInRightPosition: true,
            center: {
                lat: 39.742043,
                lng: -104.991531,
            }
        })
    }
    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _nearby }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/"
                    title="Food Trucks Nearby – View Schedules & Details - Truckster"
                    description="Find food trucks, breweries and pairings in real time. Search by location, name or cuisine type! Satisfy your hunger now. Download the Truckster App for faster access!"
                />
                <Nearby
                    {...this.state}
                    {...this.props}
                    handleExploreInRightPosition={(e) => this.handleExploreInRightPosition(e)}
                    handleCloseModal={(e) => this.handleCloseModal(e)}
                    handleClickBack={(e) => this.handleClickBack(e)}
                    handleClickNearbyEvent={(e) => this.handleClickNearbyEvent(e)}
                    loadMoreNearby={(e) => this.loadMoreNearby(e)}
                    onChangeFilterItem={(e, key) => this.onChangeFilterItem(e, key)}
                    handleGoogleMapApi={(e) => this.handleGoogleMapApi(e)}
                    onChangeMapPosition={(e) => this.onChangeMapPosition(e)}
                    onVisibleChange={(e) => this.onVisibleChange(e)}
                    onEventLeave={(e) => this.onEventLeave(e)}
                    onEventEnter={(e) => this.onEventEnter(e)}
                    loadMore={() => this.loadMore()}
                />
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoadingGetNearby: state.nearbyReducer.isLoadingGetNearby,
        error: state.nearbyReducer.error,
        nearby: state.nearbyReducer.nearby,
        currentPage: state.nearbyReducer.currentPage,
        lastPage: state.nearbyReducer.lastPage,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountNearby,
        getNearby
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NearbyContainer);
