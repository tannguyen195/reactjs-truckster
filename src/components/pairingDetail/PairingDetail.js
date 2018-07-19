import React, { Component } from 'react';
import { Spin, Menu, Icon} from 'antd';
import './_pairingDetail.less'
import TruckDetailContainer from '../truckDetail/TruckDetailContainer.js'
import BreweryDetailContainer from '../breweryDetail/BreweryDetailContainer.js'
import moment from 'moment'
const breweryIcon = require('/static/images/brewery-marker-icon.png')

class PairingDetail extends Component {
    renderPairingButton(image, startTime, endTime, name, e) {
        return <div className='pairing-button'>
            <div className='image'>
                <img alt="logo" src={image} />
            </div>
            <div className="info">
                <div className="name SubheadingBlackLeft">{name}</div>
                {
                    e === 0 ?
                        <div className="time CaptionGreyLeft">
                            From {moment(startTime).format('MM-DD-YYYY')} - {moment(startTime).format('hh:mm a')}
                        </div> :
                        <div className="time CaptionGreyLeft">To {moment(endTime).format('MM-DD-YYYY')} - {moment(endTime).format('hh:mm a')}</div>
                }


            </div>
        </div>
    }

    render() {
        const { pairingDetail, currentPairing, handleClickMenu } = this.props

        return (
            <div className="pairing-container">
                {
                    pairingDetail
                        ?
                        <div>
                            <div className="menu-pairing-container">
                                <Menu
                                    defaultSelectedKeys={["0"]}
                                    onClick={handleClickMenu}
                                    mode="horizontal"
                                >
                                    <Menu.Item key="0">
                                        <div className="button-container">
                                            {
                                                this.renderPairingButton(
                                                    pairingDetail.food_trucks_detail.cover_photo[0].url,
                                                    pairingDetail.start_time,
                                                    pairingDetail.end_time,
                                                    pairingDetail.food_trucks_detail.name,
                                                    0
                                                )
                                            }
                                        </div></Menu.Item>
                                    <Menu.Item key="1">
                                        <div className="button-container">

                                            {
                                                this.renderPairingButton(
                                                    pairingDetail.breweries_detail.logo ? pairingDetail.breweries_detail.logo[0].url : breweryIcon,
                                                    pairingDetail.start_time,
                                                    pairingDetail.end_time,
                                                    pairingDetail.breweries_detail.name,
                                                    1
                                                )
                                            }
                                        </div>
                                    </Menu.Item>

                                </Menu>
                            </div>

                            {
                                currentPairing === "0" ?
                                    <TruckDetailContainer
                                        isPairing={true}

                                        match={{ params: { id: pairingDetail.food_trucks_detail.id } }} />
                                    :
                                    <BreweryDetailContainer
                                        isPairing={true}
                                        coordinate={{
                                            latitude: pairingDetail.latitude,
                                            longtitude: pairingDetail.longtitude,
                                            address: pairingDetail.address
                                        }}
                                        match={{ params: { id: pairingDetail.breweries_detail.id } }} />
                            }


                        </div>
                        :
                        <div className="loading-container">
                            <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
                        </div>
                }

            </div>
        )


    }
}

export default PairingDetail
