import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Help from './Help'
import Fade from 'react-reveal/Fade'
class HelpContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    callback(key) {

    }
    render() {

        return (
            <Fade >
                <Help callback={(e) => this.callback(e)} />

            </Fade>
        )
    }
}
export function mapStateToProps(state) {
    return {

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HelpContainer);
