import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from './Footer'
import {
    toggleAnnounceModal,
} from '../../actions/toggleAction'
import { withRouter } from "next/router"
class FooterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        console.log("this.props", this.props)
        const { router } = this.props

        return (
            router.pathname.includes("/activity")
                || router.pathname.includes("/profile")
                || router.pathname.includes("/pairing")
                || router.pathname.includes("/nearby")
                || router.pathname.includes("/user")
                || router.pathname.includes("/activities") ?
                <div />
                :
                <Footer {...this.state} {...this.props} />
        )
    }
}
export function mapStateToProps(state) {
    return {

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleAnnounceModal
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterContainer));
