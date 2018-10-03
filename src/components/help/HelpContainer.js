import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Help from './Help'
import Head from '../head'
import _help from './_help.less'
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
            <div>
                <style dangerouslySetInnerHTML={{ __html: _help }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/help"
                    title="Help Center - Truckster FAQs"
                    description="Do you have questions about the Truckster website or app? Are you having technical difficulties? Check out our help center!"
                />
                <Help callback={(e) => this.callback(e)} />
            </div>


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
