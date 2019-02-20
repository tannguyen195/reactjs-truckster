import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchBrewery } from '../../api/breweryApi'
import BreweryType from './BreweryType'
import ErrorPage from '../common/errorPage/ErrorPage'
import { mountBrewery } from '../../actions/breweryAction'

import _breweryType from './_breweryType.less'
let renderPageFlag = false
class BreweryTypeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }
    static async getInitialProps({ reduxStore, req, query, store }) {
        await store.dispatch(mountBrewery())
        await store.dispatch(searchBrewery("breweries_type", query.value, 1))
        return { value: query.value }
    }

    loadMoreBrewery() {
        const { searchBrewery, currentPage, lastPage, value, brewerySearch, total } = this.props

        if (currentPage === 1 && lastPage === 1 && brewerySearch.length !== 0) {

            this.setState({
                hasMore: false
            })
        }
        else if (currentPage < lastPage) {

            searchBrewery("breweries_type", value, currentPage + 1)
        }
        else if (currentPage + 1 > lastPage && brewerySearch.length !== 0) {

            this.setState({
                hasMore: false
            })
        }
        else if (total === 0) {

            this.setState({
                hasMore: false
            })
        }

    }
    render() {
        const { error, status } = this.props

        return (
            <div >
                <style dangerouslySetInnerHTML={{
                    __html: _breweryType
                }} />
                {
                    error ?
                        <ErrorPage status={status} />
                        :
                        <BreweryType
                            {...this.state}
                            {...this.props}
                            loadMoreBrewery={() => this.loadMoreBrewery()}
                        />
                }
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        brewerySearch: state.breweryReducer.brewerySearch,
        error: state.breweryReducer.error,
        status: state.breweryReducer.status,
        currentPage: state.breweryReducer.currentPageType,
        lastPage: state.breweryReducer.lastPageType
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountBrewery,
        searchBrewery
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweryTypeContainer);
