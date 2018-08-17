import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchResult from './SearchResult'
import _searchResult from './_searchResult.less'

class SearchResultContainer extends Component {

    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _searchResult }} />
                <SearchResult
                    {...this.state}
                    {...this.props}
                />
            </div>


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
