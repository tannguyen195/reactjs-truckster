import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { mountBrewery } from '../../actions/breweryAction'
import Brewery from './Brewery'
import { searchBrewery } from '../../api/breweryApi'
let renderPageFlag = false
class BreweryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    componentDidMount() {
        this.props.mountBrewery()
    }
    loadMoreBrewery() {
        const { currentPage, lastPage, searchBrewery } = this.props

        if (!currentPage && !renderPageFlag) {
            renderPageFlag = true
            searchBrewery("", "", 1)
        }

        else if (currentPage < lastPage)
            searchBrewery("", "", currentPage + 1)

        else if (currentPage === lastPage && currentPage) {
            this.setState({
                hasMore: false
            })
        }
    }
    render() {

        return ( 
                <Brewery
                    {...this.state}
                    {...this.props}
                    loadMoreBrewery={() => this.loadMoreBrewery()}
                />
        )
    }
}
export function mapStateToProps(state) {
    return {
        error: state.breweryReducer.error,
        breweries: state.breweryReducer.breweries,
        currentPage: state.breweryReducer.currentPage,
        lastPage: state.breweryReducer.lastPage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountBrewery,
        searchBrewery
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweryContainer);
