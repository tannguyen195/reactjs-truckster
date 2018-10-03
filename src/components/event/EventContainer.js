import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Event from './Event'
import { searchActivity } from '../../api/activityApi'
import { mountActivity } from '../../actions/activityAction'
import Head from '../head'

import _event from './_event.less'
class EventContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true,

        }
    }

    componentDidMount() {
        const { searchActivity, mountActivity } = this.props
        mountActivity()
        searchActivity(true)
        searchActivity(false, 1)
    }

    loadMore() {
        const { searchActivity, currentPage, lastPage } = this.props
        if (currentPage && lastPage) {
            if (currentPage < lastPage)
                searchActivity(false, currentPage + 1)
            else if (currentPage === lastPage && currentPage) {
                this.setState({
                    hasMore: false
                })
            }
        }



    }
    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: _event
                }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/event/co/denver"
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
        mountActivity,
        searchActivity
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
