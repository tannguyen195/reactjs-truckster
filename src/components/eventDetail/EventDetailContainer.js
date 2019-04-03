import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventDetail from './EventDetail'
import { getActivityDetail } from '../../api/activityApi'
import ErrorPage from '../common/errorPage/ErrorPage'
import { toggleShareModal } from '../../actions/toggleAction'
import { getDataInitial } from 'global'

import _eventDetail from './_eventDetail.less'
import { changeRoute } from '../../actions/deepLinkAction'
import Head from '../head'
class EventDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trucks: null
        }
    }

    static async getInitialProps({ reduxStore, res, query }) {
        if (!query.slug) {
            res.writeHead(301, { Location: `/events` })
            res.end()
        }
        return {
            activity: await getDataInitial(`consumer/v1/activities/slug/${query.slug}`),
            slug: query.slug
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
        const { activity, changeRoute } = this.props
        changeRoute(
            `gotrucksterconsumer://app/event/${activity.id}`
        )
        let keys = [1], trucks = []
        for (let i = 0; i < activity.calendar.length; ++i) {

            if (activity.calendar[i].food_truck && !keys.includes(activity.calendar[i].food_truck.id)) {
                trucks.push(activity.calendar[i])
                keys.push(activity.calendar[i].food_truck.id)
            }
        }

        this.setState({
            trucks: trucks
        })
    }

    render() {
        const { activity, status, slug } = this.props
        return (
            <div>
                {
                    activity ?
                        <div>
                            <style dangerouslySetInnerHTML={{
                                __html: _eventDetail
                            }} />
                            <Head
                                url={"https://gotruckster.com/event/" + `${slug}`}
                                title={activity.name + " - Event in Denver, CO - Truckster"}

                                description={activity.information.length > 160 ?
                                    activity.information.substring(0, 160) :
                                    activity.information}
                                ogImage={activity.pictures && activity.pictures[0].thumbnails && activity.pictures[0].thumbnails.large.url}
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
        getActivityDetail,
        changeRoute
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);
