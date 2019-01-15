import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTruck } from '../../api/truckApi'
import CategoryDetail from './CategoryDetail'
import ErrorPage from '../common/errorPage/ErrorPage'
import { mountTruck } from '../../actions/truckAction'
import { getDataInitial } from '../../../global'
import _categoryDetail from './_categoryDetail.less'
import { Router } from 'routes'
import Head from '../head'

class CategoryDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    static async getInitialProps({ req, query, res, store }) {
        await store.dispatch(mountTruck())
        if (req) {
            if (!query.value) {
                res.writeHead(301, { Location: `/food-truck/co/denver/cuisines` })
                res.end()
            }
        }
        else if (!query.value)
            Router.push("/food-truck/co/denver/cuisines")
        else if (query.state === "cuisine")
            Router.push("/food-truck/co/denver/" + query.value)
        let cuisineDetail = null

        await store.dispatch(searchTruck("cuisine_slug", query.value, 1, store))
        cuisineDetail = await getDataInitial("cuisine?q=" + query.value)
        return {

            cuisineDetail,
            value: query.value
        }

    }


    componentDidMount() {

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
        const { error, status, value, cuisineDetail } = this.props

        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: _categoryDetail
                }} />
                {
                    cuisineDetail && <Head
                        ogImage={cuisineDetail.image_url}
                        url={"https://gotruckster.com/food-truck/co/denver/" + value}
                        title={cuisineDetail.meta_title}
                        description={cuisineDetail.meta_description}
                    />
                }


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
