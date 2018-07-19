import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchTruck } from '../../../api/truckApi'
import CategoryDetail from './CategoryDetail'
import ErrorPage from '../common/errorPage/ErrorPage'
import Fade from 'react-reveal/Fade';
import { mountTruck } from '../../../actions/truckAction'
class CategoryDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    componentWillMount() {
        
        sessionStorage.setItem("reloadUrl", window.location.href)

    }
    componentWillReceiveProps(nextProps) {
    
        if (nextProps.match.params.value !== this.props.match.params.value) {
            this.props.mountTruck()
            this.setState({
                hasMore: true
            })
            this.props.searchTruck("cuisine", nextProps.match.params.value, 1)
         
        }
    }
    componentDidMount() {
        this.props.mountTruck()
        this.props.searchTruck("cuisine", this.props.match.params.value, 1)
    }
    loadMoreTruck() {
        const { searchTruck, currentPage, lastPage, match, truckSearch, total } = this.props

        if (currentPage === 1 && lastPage === 1 && truckSearch.length !== 0) {
          
            this.setState({
                hasMore: false
            })
        }
        else if (currentPage < lastPage) {
       
            searchTruck("cuisine", match.params.value, currentPage + 1)
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
            <Fade>
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
            </Fade>

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
