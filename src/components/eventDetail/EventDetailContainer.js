import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventDetail from './EventDetail'
import { getActivityDetail } from '../../api/activityApi'
import ErrorPage from '../common/errorPage/ErrorPage'
import { toggleShareModal } from '../../actions/toggleAction'
import { getDataInitial } from 'global'
import Head from '../head'
class EventDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

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
