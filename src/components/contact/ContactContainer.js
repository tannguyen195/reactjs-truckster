import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contact from './Contact'
import _contact from './_contact.less'
class ContactContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount() {


    }
    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _contact }} />
                <Contact />
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
