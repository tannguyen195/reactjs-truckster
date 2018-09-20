import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from './Footer'
import DownloadApp from './DownloadApp'
import { isMobile, isAndroid, isIOS } from 'react-device-detect';
import {
    toggleAnnounceModal,
} from '../../actions/toggleAction'
import {
    toggleDeepLink
} from '../../actions/deepLinkAction'
import { withRouter } from "next/router"
import _footer from './_footer.less'
class FooterContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDownloadVisible: true
        }
    }


    render() {
        const { router, toggleDeepLink, paramsDeepLink, visibleDeepLink } = this.props

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
                    <button onClick={toggleDeepLink}>test</button>
                    {
                        isMobile && visibleDeepLink &&
                        <DownloadApp
                            paramsDeepLink={paramsDeepLink}
                            toggleDeepLink={toggleDeepLink}
                            isIOS={isIOS}
                            isAndroid={isAndroid}
                        />
                    }

                </div>

        )
    }
}
export function mapStateToProps(state) {
    3
    return {
        visibleDeepLink: state.deepLinkReducer.visibleDeepLink,
        paramsDeepLink: state.deepLinkReducer.params,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleAnnounceModal,
        toggleDeepLink
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterContainer));
