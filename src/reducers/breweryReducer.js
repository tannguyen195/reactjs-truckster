
import * as types from '../actions/types';

const initial = {
    isLoadingSearchBrewery: false,
    status: null,
    message: null,
    error: false,
    breweries: [],
    isLoadingGetBreweryDetail: false,
    brewerySearchResult: [],
    breweryDetail: null,
    brewerySearch: [],
    currentPage: null,
    lastPage: null,
    currentPageType: null,
    lastPageType: null
}
const breweryReducer = (state = initial, action) => {
    switch (action.type) {

        case types.REQUEST_SEARCH_BREWERY:
            return {
                ...state,
                error: false,
                isLoadingSearchBrewery: action.isLoadingSearchBrewery
            };

        case types.SEARCH_BREWERY_SUCCESS:
            if (action.response.params === "breweries_type") {
                return {
                    ...state,
                    isLoadingSearchBrewery: false,
                    brewerySearch: state.brewerySearch.concat(action.response.data),
                    currentPageType: action.response.current_page,
                    lastPageType: action.response.last_page,
                }
            }
            else if (action.response.params === "name") {

                return {
                    ...state,
                    isLoadingSearchBrewery: false,
                    brewerySearchResult: action.response.data,
                }
            }
            else
                return {
                    ...state,
                    isLoadingSearchBrewery: false,
                    breweries: state.breweries.concat(action.response.data),
                    currentPage: action.response.current_page,
                    lastPage: action.response.last_page,
                }
        case types.SEARCH_BREWERY_ERROR:
            return {
                ...state,
                error: true,
                isLoadingSearchBrewery: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Get brewery detail reducer 
        case types.REQUEST_GET_BREWERY_DETAIL:
            return {
                ...state,
                error: false,
                brewery: null,
                isLoadingGetBreweryDetail: action.isLoadingGetBreweryDetail
            };

        case types.GET_BREWERY_DETAIL_SUCCESS:
            return {
                ...state,
                error: false,
                isLoadingGetBreweryDetail: false,
                breweryDetail: action.response,
            }
        case types.GET_BREWERY_DETAIL_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetBreweryDetail: false,
                status: action.response.status,
                message: action.response.statusText
            };
        case types.MOUNT_BREWERY:
            return {
                ...state,
                breweries: [],
                brewerySearch: [],
                currentPage: null,
                lastPage: null,
                currentPageType: null,
                lastPageType: null,
            }
        default:
            return state;
    }
};

export default breweryReducer;
