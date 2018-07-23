import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchResult from './SearchResult'

class SearchResultContainer extends Component {

    render() {

        return (
       
                <SearchResult
                    {...this.state}
                    {...this.props}
                />
       

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
