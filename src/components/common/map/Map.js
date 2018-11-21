import React, { Component } from 'react';
import { Popover } from 'antd'
import GoogleMapReact from 'google-map-react';
import moment from 'moment'
import _map from './_map.less'
const truckMarkerIcon = ('/static/images/truck-marker-icon.png')
const eventMarkerIcon = ('/static/images/event-marker-icon.png')
const breweryMarkerIcon = ('/static/images/brewery-marker-icon.png')
const pairingMarkerIcon = ('/static/images/pairing-marker-icon.png')
const Content = ({ info }) => {
    return (

        <div>
            <div className="address Body-1RegularBlackLeft">
                {info.address || info.name}
            </div>
            {
                info.timeDisplay && <div className="time CaptionGreyLeft">
                    {moment(info.timeDisplay, "YYYY-MM-DD h:mm a").format("ddd, MMMM DD")} {moment(info.start_time, "YYYY-MM-DD h:mm a").format("h:mm a")} - {moment(info.end_time).format("h:mm a")}
                </div>
            }
        </div>
    );
}

const AnyReactComponent = ({ info, icon }) => (
    <Popover className="marker-container" content={<Content info={info} />} title={info.location_name || info.name}>
        <div>
            <img width={36} alt="marker" src={renderIcon(icon)} />
        </div>
    </Popover>
);

const renderIcon = (icon) => {
    switch (icon) {
        case "truck": return truckMarkerIcon;
        case "event": return eventMarkerIcon;
        case "brewery": return breweryMarkerIcon;
        case "pairing": return pairingMarkerIcon;
        default: return null
    }
}


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: { lat: 39.7384953, lng: -104.9964992 },
            zoom: 15
        };

    }
    renderMarker(location, icon) {
        return location.map((item, index) => {
            if (item.latitude)
                return <AnyReactComponent
                    info={item}
                    key={index}
                    icon={icon}
                    lat={parseFloat(item.latitude)}
                    lng={parseFloat(item.longtitude)} />
        })
    }
    componentWillMount() {
        const { location, zoom } = this.props
        if (location.length > 0 && location[0])
            if (location[0].latitude)
                this.setState({
                    center: {
                        lat: parseFloat(location[0].latitude),
                        lng: parseFloat(location[0].longtitude)
                    }
                })
        if (zoom) {
            this.setState({
                zoom: zoom
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { location } = nextProps
        if (location.length > 0 && location[0])
            if (location[0].latitude)
                this.setState({
                    center: {
                        lat: parseFloat(location[0].latitude),
                        lng: parseFloat(location[0].longtitude)
                    }
                })
    }

    render() {
        const { icon, location } = this.props
        const { center, zoom } = this.state
        return (
            <div className="map-container" >
                <style dangerouslySetInnerHTML={{ __html: _map }} />
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAUYKV7F7rccvP7Pf67Jh_R6s1Unp2v82A" }}
                    center={center}
                    defaultZoom={zoom}

                    defaultOptions={{
                        styles: [
                            {
                                "featureType": "administrative",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "lightness": 33
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "color": "#f7f7f7"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.business",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#deecdb"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "lightness": "25"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "lightness": "25"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "labels",
                                "stylers": [
                                    {
                                        "saturation": "-90"
                                    },
                                    {
                                        "lightness": "25"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.station",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#e0f1f9"
                                    }
                                ]
                            }
                        ],
                    }}

                >
                    {
                        location.length > 0 && location[0] &&
                        this.renderMarker(location, icon)
                    }
                </GoogleMapReact>
            </div >
        )
    }
}

export default Map;
