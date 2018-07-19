import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchResult from './SearchResult'
import Fade from 'react-reveal/Fade';

class SearchResultContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        
        sessionStorage.setItem("reloadUrl", window.location.href)
       
    }
    componentWillReceiveProps(nextProps) {
        
    }

    render() {

        return (
            <Fade>
                <SearchResult
                    {...this.state}
                    {...this.props}
                />
            </Fade>

        )
    }
}
export function mapStateToProps(state) {
    return {
        searchResult: state.truckReducer.searchResult,
        params: state.truckReducer.params
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer);
