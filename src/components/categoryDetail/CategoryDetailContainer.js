import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTruck } from '../../api/truckApi'
import CategoryDetail from './CategoryDetail'
import ErrorPage from '../common/errorPage/ErrorPage'
import { mountTruck } from '../../actions/truckAction'

import _categoryDetail from './_categoryDetail.less'
class CategoryDetailContainer extends Component {
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
        this.props.mountTruck()
        this.props.searchTruck("cuisine", this.props.value, 1)
    }
    loadMoreTruck() {
        const { searchTruck, currentPage, lastPage, truckSearch, total, value } = this.props

        if (currentPage === 1 && lastPage === 1 && truckSearch.length !== 0) {

            this.setState({
                hasMore: false
            })
        }
        else if (currentPage < lastPage) {

            searchTruck("cuisine", value, currentPage + 1)
        }
        else if (currentPage + 1 > lastPage && truckSearch.length !== 0) {

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
            <div className="gray-background">
                <style dangerouslySetInnerHTML={{
                    __html: _categoryDetail
                }} />
                {
                    error ?
                        <ErrorPage status={status} />
                        :
                        <CategoryDetail
                            {...this.state}
                            {...this.props}
                            loadMoreTruck={() => this.loadMoreTruck()}
                        />
                }
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        truckSearch: state.truckReducer.truckSearch,
        error: state.truckReducer.error,
        status: state.truckReducer.status,
        currentPage: state.truckReducer.currentPageType,
        lastPage: state.truckReducer.lastPageType,
        total: state.truckReducer.total
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountTruck,
        searchTruck
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailContainer);
