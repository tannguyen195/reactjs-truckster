import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from './Footer'
import {
    toggleAnnounceModal,
} from '../../actions/toggleAction'
class FooterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {

        const { location } = this.props
        return (

                <Footer {...this.state} {...this.props}/>
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
export default (connect(mapStateToProps, mapDispatchToProps)(FooterContainer));
