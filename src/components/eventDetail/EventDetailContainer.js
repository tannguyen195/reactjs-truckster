import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventDetail from './EventDetail'
import Fade from 'react-reveal/Fade';
import { getActivityDetail } from '../../api/activityApi'
import ErrorPage from '../common/errorPage/ErrorPage'
import { toggleShareModal } from '../../actions/toggleAction'

import { getDataInitial } from 'global'
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
        const { error, status } = this.props

        return (
            <Fade>
                {
                    error ?
                        <ErrorPage status={status} />
                        :
                        <EventDetail
                            {...this.state}
                            {...this.props}

                        />
                }

            </Fade>
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
