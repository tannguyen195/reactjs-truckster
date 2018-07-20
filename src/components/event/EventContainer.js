import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Event from './Event'
import { searchActivity } from '../../api/activityApi'
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
            <Event
                {...this.state}
                {...this.props}
                loadMore={() => this.loadMore()}
            />
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
