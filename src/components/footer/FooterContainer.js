import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from './Footer'
import DownloadApp from './DownloadApp'
import { isMobile, isAndroid, isIOS } from 'react-device-detect';
import {
    toggleAnnounceModal,
} from '../../actions/toggleAction'
import { withRouter } from "next/router"
import _footer from './_footer.less'
class FooterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDownloadVisible: true
        }

    }

    onDownloadVisible() {
        this.setState({
            isDownloadVisible: false
        })
    }
    render() {
        const { router } = this.props

        return (
            router.pathname.includes("/event")
                || router.pathname.includes("/profile")
                || router.pathname.includes("/pairing")
                || router.pathname.includes("/nearby")
                || router.pathname.includes("/user")
                || router.pathname.includes("/success")
                || router.pathname.includes("/activities") ?
                <div >

                </div>
                :
                <div>
                    <style dangerouslySetInnerHTML={{ __html: _footer }} />
                    <Footer {...this.state} {...this.props} >

                    </Footer>
                    {
                        isMobile && this.state.isDownloadVisible &&
                        <DownloadApp
                            isIOS={isIOS}
                            isAndroid={isAndroid}
                            onDownloadVisible={() => this.onDownloadVisible()} />
                    }

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
        toggleAnnounceModal
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterContainer));
