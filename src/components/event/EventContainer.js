import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Event from './Event'
import { searchActivity } from '../../api/activityApi'
import Head from '../head'
let renderPageFlag = false
class EventContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true,

        }
    }

    componentDidMount() {
        this.props.searchActivity(true)
    }

    loadMore() {
        const { searchActivity, currentPage, lastPage } = this.props
        if (!currentPage && !renderPageFlag) {
            renderPageFlag = true
            searchActivity(false, 1)
        }
        else if (currentPage < lastPage)
            searchActivity(false, currentPage + 1)
        else if (currentPage === lastPage && currentPage) {
            this.setState({
                hasMore: false
            })
        }


    }
    render() {

        return (
            <div>
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/"
                    title="Denver Events, Festivals, Rallies, Markets & More"
                    description="Looking for something to do in Denver, CO? Check out our calendar of upcoming events, festivals, food truck rallies, farmers markets & more. Fun for all ages!"
                />
                <Event
                    {...this.state}
                    {...this.props}
                    loadMore={() => this.loadMore()}
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        error: state.activityReducer.error,
        activities: state.activityReducer.activities,
        activitiesWeek: state.activityReducer.activitiesWeek,
        currentPage: state.activityReducer.currentPage,
        lastPage: state.activityReducer.lastPage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchActivity
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
