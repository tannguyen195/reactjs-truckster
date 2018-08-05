import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pairing from './Pairing'
import { getPairing, } from '../../api/pairingApi'
import { mountPairing, } from '../../actions/pairingAction'
import Head from '../head'

class PairingContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    componentDidMount() {
        const { mountPairing, getPairing } = this.props
        mountPairing()
        getPairing("this_week=true&city", "denver", 1)
    }
    loadMorePairing() {
        const { getPairing, currentPage, lastPage } = this.props
        if (currentPage && lastPage) {
            if (currentPage < lastPage)
                getPairing("this_week=true&city", "denver", currentPage + 1)

            else if (currentPage === lastPage && currentPage) {
                this.setState({
                    hasMore: false
                })
            }
        }
    }

    render() {
        return (
            <div className="gray-background">
                <Head
                    url="https://gotruckster.com/"
                    title="Find Denver Food Truck & Brewery Pairings - Truckster"
                >
                    <link rel="canonical" href="https://gotruckster.com/food-truck/co/denver" />
                </Head>
                <Pairing
                    {...this.state}
                    {...this.props}
                    loadMorePairing={() => this.loadMorePairing()}
                />
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        pairings: state.pairingReducer.pairings,
        errorPairing: state.pairingReducer.error,
        currentPage: state.pairingReducer.currentPage,
        lastPage: state.pairingReducer.lastPage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPairing,
        mountPairing
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PairingContainer);
