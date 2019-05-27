import * as types from '../actions/types';


const initial = {
    isLoadingGetSuggestTruck: false,
    isLoadingSearchTruck: false,
    isLoadingGetTruckDetail: false,
    isLoadingGetSuggestTruck: false,
    isLoadingGetRecommendTruck: false,
    isLoadingGetCuisineList: false,
    recommendTruck: null,
    suggestTruck: null,
    truckDetail: null,
    truckMenu: null,
    suggestTruck: null,
    trucks: [],
    truckSearch: [],
    foodSearchResult: null,
    truckSearchResult: null,
    isLoadingGetPairing: false,
    truckFeatured: null,
    truckFeaturedCity: null,
    error: false,
    currentPage: null,
    lastPage: null,
    currentPageType: null,
    lastPageType: null,
    total: null,
    nearby: [],
    params: "",
    cuisineList: [],
    albumDetail: null
}
const truckReducer = (state = initial, action) => {

    switch (action.type) {

        // Search truck reducer
        case types.REQUEST_SEARCH_TRUCK:
            return {
                ...state,
                error: false,
                isLoadingSearchTruck: action.isLoadingSearchTruck
            };

        case types.SEARCH_TRUCK_SUCCESS:

            if (action.response.params === "per_page")
                return {
                    ...state,
                    error: false,
                    isLoadingSearchTruck: false,
                    trucks: state.trucks.concat(action.response.data),
                    currentPage: action.response.current_page,
                    lastPage: action.response.last_page,
                }
            else if (action.response.params === "food_item")
                return {
                    ...state,
                    isLoadingSearchTruck: false,
                    foodSearchResult: action.response.data,
                }
            else if (action.response.params === "keyword") {
                return {
                    ...state,
                    isLoadingSearchTruck: false,
                    truckSearchResult: action.response.data,
                }
            }
            else if (action.response.params === "is_featured")
                return {
                    ...state,
                    isLoadingSearchTruck: false,
                    truckFeatured: action.response.data,
                }
            else if (action.response.params === "is_featured=true&city")
                return {
                    ...state,
                    isLoadingSearchTruck: false,
                    truckFeaturedCity: action.response.data,
                }
            else
                return {
                    ...state,
                    isLoadingSearchTruck: false,
                    total: action.response.total,
                    currentPageType: action.response.current_page,
                    lastPageType: action.response.last_page,
                    truckSearch: state.truckSearch.concat(action.response.data),
                }
        case types.SEARCH_TRUCK_ERROR:
            return {
                isLoadingSearchTruck: false,
                error: true,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Get truck detail reducer 
        case types.REQUEST_GET_TRUCK_DETAIL:
            return {
                ...state,
                error: false,
                truckDetail: null,
                isLoadingGetTruckDetail: action.isLoadingGetTruckDetail
            };

        case types.GET_TRUCK_DETAIL_SUCCESS:
            return {
                ...state,
                error: false,
                isLoadingGetTruckDetail: false,
                truckDetail: action.response,
            }
        case types.GET_TRUCK_DETAIL_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetTruckDetail: false,
                status: action.response.status,
                message: action.response.statusText
            };

        // Get truck suggest
        case types.REQUEST_GET_SUGGEST_TRUCK:
            return {
                ...state,
                error: false,
                isLoadingGetSuggestTruck: action.isLoadingGetSuggestTruck
            };

        case types.GET_SUGGEST_TRUCK_SUCCESS:

            return {
                ...state,
                isLoadingGetSuggestTruck: false,
                suggestTruck: action.response.data,
            }
        case types.GET_SUGGEST_TRUCK_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetSuggestTruck: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Get truck menu action
        case types.REQUEST_GET_TRUCK_MENU:
            return {
                ...state,
                error: false,
                isLoadingGetTruckMenu: action.isLoadingGetTruckMenu
            };

        case types.GET_TRUCK_MENU_SUCCESS:
            return {
                ...state,
                isLoadingGetTruckMenu: false,
                truckMenu: action.response.menus_detail,
            }
        case types.GET_TRUCK_MENU_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetTruckMenu: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        case types.UNMARK_FAVORITE_SUCCESS:
            return {
                ...state,
                truckDetail: {
                    ...state.truckDetail,
                    is_favourite: false
                },
            }

        case types.MARK_FAVORITE_SUCCESS:
            return {
                ...state,
                truckDetail: {
                    ...state.truckDetail,
                    is_favourite: true
                },
            }
        case types.MOUNT_TRUCK:
            return {
                ...state,
                trucks: [],
                currentPage: null,
                lastPage: null,
                truckSearch: [],
                currentPageType: null,
                lastPageType: null,

            }
        // Get recommended truck 
        case types.REQUEST_GET_RECOMMEND_TRUCK:
            return {
                ...state,
                error: false,
                isLoadingGetRecommendTruck: action.isLoadingGetRecommendTruck
            };

        case types.GET_RECOMMEND_TRUCK_SUCCESS:
            return {
                ...state,
                isLoadingGetRecommendTruck: false,
                recommendTruck: action.response,
            }
        case types.GET_RECOMMEND_TRUCK_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetRecommendTruck: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };


        // Get cuisine list
        case types.REQUEST_GET_CUISINE_LIST:
            return {
                ...state,
                error: false,
                isLoadingGetCuisineList: action.isLoadingGetCuisineList
            };

        case types.GET_CUISINE_LIST_SUCCESS:
            return {
                ...state,
                isLoadingGetCuisineList: false,
                cuisineList: state.cuisineList.concat(action.response.data),
            }
        case types.GET_CUISINE_LIST_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetCuisineList: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Get album detail
        case types.REQUEST_GET_ALBUM_DETAIL:
            return {
                ...state,
                error: false,
                isLoadingGetAlbumDetail: action.isLoadingGetAlbumDetail
            };

        case types.GET_ALBUM_DETAIL_SUCCESS:
            return {
                ...state,
                isLoadingGetAlbumDetail: false,
                albumDetail: action.response.data
            }
        case types.GET_ALBUM_DETAIL_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetalbumDetail: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };
        default:
            return state;
    }
};

export default truckReducer;
