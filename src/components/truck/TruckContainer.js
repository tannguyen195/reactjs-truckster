import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Truck from './Truck'
import { mountTruck } from '../../actions/truckAction'
import { searchTruck } from '../../api/truckApi'
import Head from '../head'
import _truck from './_truck.less'
class TruckContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true,
        }
    }


    componentDidMount() {
        const { mountTruck, searchTruck } = this.props
        mountTruck()
        searchTruck("", "", 1)
    }
    loadMoreTruck() {
        const { currentPage, lastPage, searchTruck } = this.props

        if (currentPage && lastPage) {
            if (currentPage < lastPage)
                searchTruck("", "", currentPage + 1)

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
                <style dangerouslySetInnerHTML={{
                    __html: _truck
                }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/"
                    title="Denver Food Trucks Near Me – Locations, Schedules & Catering"
                    description="Find the best food trucks in Denver, CO featuring gourmet street food. View food truck schedules, pairings, menus, reviews, discounts and catering information!"
                />
                <Truck
                    {...this.state}
                    {...this.props}
                    loadMoreTruck={() => this.loadMoreTruck()}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        error: state.truckReducer.error,
        trucks: state.truckReducer.trucks,
        currentPage: state.truckReducer.currentPage,
        lastPage: state.truckReducer.lastPage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountTruck,
        searchTruck
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TruckContainer);
