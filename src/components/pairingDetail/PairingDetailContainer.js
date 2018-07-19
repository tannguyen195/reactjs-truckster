import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PairingDetail from './PairingDetail'
import { getPairingDetail } from '../../../api/pairingApi'
import ErrorPage from '../common/errorPage/ErrorPage'
class PairingDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPairing: "0"
        }
    }
    componentWillMount() {
        
        sessionStorage.setItem("reloadUrl", window.location.href)
    }

    componentDidMount() {
        this.props.getPairingDetail(this.props.match.params.idp)

        // this.props.getPairingReview(this.props.match.params.id)
    }
    handleClickMenu(e) {
        this.setState({
            currentPairing: e.key
        })
    }
    render() {
        const { error, status } = this.props
        
        return (
            <div>
                {
                    error ?
                        <ErrorPage status={status} />
                        :
                        <PairingDetail
                            {...this.state}
                            {...this.props}
                            
                            handleClickMenu={(e) => this.handleClickMenu(e)}

                        />
                }

            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        isLoadingPairingDetail: state.pairingReducer.isLoadingPairingDetail,
        pairingDetail: state.pairingReducer.pairingDetail,
        error: state.pairingReducer.error,
        status: state.pairingReducer.status,
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPairingDetail
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PairingDetailContainer);
