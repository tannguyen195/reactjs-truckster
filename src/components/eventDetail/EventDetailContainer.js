import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventDetail from './EventDetail'
import { getActivityDetail } from '../../api/activityApi'
import ErrorPage from '../common/errorPage/ErrorPage'
import { toggleShareModal } from '../../actions/toggleAction'
import { getDataInitial, getEventTime } from 'global'
import moment from 'moment'
import Head from '../head'
class EventDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trucks: null
        }
    }

    static async getInitialProps({ reduxStore, req, query }) {

        return {
            activity: await getDataInitial(`consumer/v1/activities/${query.id}`),
            id: query.id
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.statusReview === 201 || nextProps.statusReview === 422) {
            this.setState({
                visibleReview: false
            })
        }
    }
    componentDidMount() {
        const { activity } = this.props
        let keys = [1], trucks = []
        for (let i = 0; i < activity.calendar.length; ++i)
            if (!keys.includes(activity.calendar[i].food_truck.id)) {
                let events = getEventTime(activity.calendar[i])

                for (let i = 0; i < events.length; ++i) {
                    if (activity.calendar[i]&&activity.calendar[i].food_truck)
                        trucks.push({ ...activity.calendar[i], timeDisplay: events[i] })

                }
                keys.push(activity.calendar[i].food_truck.id)
            }
        let keysCalendar = [1]
        let tempTrucks = []
        for (let i = 0; i < trucks.length; ++i)
            if (!keysCalendar.includes(trucks[i].id)) {
                tempTrucks.push(trucks[i])
                keysCalendar.push(trucks[i].id)
            }

        this.setState({
            trucks: tempTrucks
        })
    }

    render() {
        const { activity, status } = this.props
        return (
            <div>
                {
                    activity ?
                        <div>
                            <Head
                                url="https://gotruckster.com/"
                                title={activity.name + " - Event in Denver, CO - Go Truckster"}
                                description={activity.information}
                                ogImage={activity.pictures[0].url}
                            />
                            <EventDetail
                                {...this.state}
                                {...this.props}

                            />
                        </div>
                        :
                        <ErrorPage status={status} />
                }

            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        error: state.activityReducer.error,
        status: state.activityReducer.status,
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShareModal,
        getActivityDetail
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);
