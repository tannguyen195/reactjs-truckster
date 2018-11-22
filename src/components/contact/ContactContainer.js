import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contact from './Contact'
import _contact from './_contact.less'
import Head from '../head'
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
                <Head
                    url="https://gotruckster.com/contact"
                    title={"Contact Us - Truckster"}
                    description={"Looking for something important? Have a question? View contract information for Truckster here!"}
                >
                </Head>

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
