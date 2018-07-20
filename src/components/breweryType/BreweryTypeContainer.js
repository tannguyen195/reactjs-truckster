import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchBrewery } from '../../api/breweryApi'
import BreweryType from './BreweryType'
import ErrorPage from '../common/errorPage/ErrorPage'
import Fade from 'react-reveal/Fade';
import { mountBrewery } from '../../actions/breweryAction'
let renderPageFlag = false
class BreweryTypeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }
    static async getInitialProps({ reduxStore, req, query }) {
        return { value: query.value }
    }

    componentDidMount() {
        this.props.mountBrewery()
    }

    loadMoreBrewery() {
        const { searchBrewery, currentPage, lastPage, value } = this.props


        if (!currentPage && !renderPageFlag) {
            renderPageFlag = true
            searchBrewery("breweries_type", value, 1)
        }

        else if (currentPage < lastPage)
            searchBrewery("breweries_type", value, currentPage + 1)

        else if (currentPage === lastPage && currentPage) {
            this.setState({
                hasMore: false
            })
        }

    }
    render() {
        const { error, status } = this.props

        return (
            <Fade>
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
            </Fade>

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
