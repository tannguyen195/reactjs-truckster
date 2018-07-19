import * as types from '../actions/types';


const initial = {
    reviews: null,
    userReview: null,
    isLoadingGetTruckReview: false,
    isLoadingPostReview: false,
    isLoadingMarkFavorite: false,
    isLoadingUnmarkFavorite: false,
    isLoadingGetUserFavorite: false,
    isLoadingEditReview: false,
    userFavorite: null,

    isLoadingEditBreweryReview: false,
    isLoadingGetUserBreweryReview: false,
    isLoadingPostBreweryReview: false,
    isLoadingGetBreweryReview: false,
    breweryReviews: null,
    userBreweryReview: null,
}
const reviewReducer = (state = initial, action) => {
    switch (action.type) {
        // Get truck review reducer
        case types.REQUEST_GET_TRUCK_REVIEW:
            return {
                ...state,
                error: false,
                isLoadingGetTruckReview: action.isLoadingGetTruckReview
            };

        case types.GET_TRUCK_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingGetTruckReview: false,
                reviews: action.response.data,
            }
        case types.GET_TRUCK_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetTruckReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // User post review
        case types.REQUEST_POST_REVIEW:
            return {
                ...state,
                status: null,
                error: false,
                isLoadingPostReview: action.isLoadingPostReview
            };

        case types.POST_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingPostReview: false,
                status: 201,
                error: false,
            }
        case types.POST_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingPostReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };



        // User edit review
        case types.REQUEST_EDIT_REVIEW:
            return {
                ...state,
                status: null,
                error: false,
                isLoadingEditReview: action.isLoadingEditReview
            };

        case types.EDIT_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingEditReview: false,
                error: false,
                status: 201,
            }
        case types.EDIT_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingEditReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Get user review reducer
        case types.REQUEST_GET_USER_REVIEW:
            return {
                ...state,
                error: false,
                isLoadingGetUserReview: action.isLoadingGetUserReview
            };

        case types.GET_USER_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingGetUserReview: false,
                userReview: action.response.data[0].reviews_detail,
            }
        case types.GET_USER_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetUserReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Mark favorite
        case types.REQUEST_MARK_FAVORITE:
            return {
                ...state,
                error: false,
                isLoadingMarkFavorite: action.isLoadingMarkFavorite
            };

        case types.MARK_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoadingMarkFavorite: false,

            }
        case types.MARK_FAVORITE_ERROR:
            return {
                ...state,
                error: true,
                isLoadingMarkFavorite: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // unmark favorite 
        case types.REQUEST_UNMARK_FAVORITE:
            return {
                ...state,
                error: false,
                isLoadingUnmarkFavorite: action.isLoadingUnmarkFavorite
            };

        case types.UNMARK_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoadingUnmarkFavorite: false,

            }
        case types.UNMARK_FAVORITE_ERROR:
            return {
                ...state,
                error: true,
                isLoadingUnmarkFavorite: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };
        // Get user favorite 
        case types.REQUEST_GET_USER_FAVORITE:
            return {
                ...state,
                error: false,
                isLoadingGetUserFavorite: action.isLoadingGetUserFavorite
            };

        case types.GET_USER_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoadingGetUserFavorite: false,
                userFavorite: action.response.data[0].favourites_detail,
            }
        case types.GET_USER_FAVORITE_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetUserFavorite: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Brewery review reducer

        case types.REQUEST_GET_BREWERY_REVIEW:
            return {
                ...state,
                error: false,
                isLoadingGetBreweryReview: action.isLoadingGetBreweryReview
            };

        case types.GET_BREWERY_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingGetBreweryReview: false,
                breweryReviews: action.response.data,
            }
        case types.GET_BREWERY_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetBreweryReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // User post brewery review
        case types.REQUEST_POST_BREWERY_REVIEW:
            return {
                ...state,
                status: null,
                error: false,
                isLoadingPostBreweryReview: action.isLoadingPostBreweryReview
            };

        case types.POST_BREWERY_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingPostBreweryReview: false,
                status: 201,
                error: false,
            }
        case types.POST_BREWERY_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingPostBreweryReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // User edit brewery review
        case types.REQUEST_EDIT_BREWERY_REVIEW:
            return {
                ...state,
                status: null,
                error: false,
                isLoadingEditBreweryReview: action.isLoadingEditBreweryReview
            };

        case types.EDIT_BREWERY_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingEditBreweryReview: false,
                error: false,
                status: 201,
            }
        case types.EDIT_BREWERY_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingEditBreweryReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };

        // Get user brewry review reducer

        case types.REQUEST_GET_USER_BREWERY_REVIEW:
            return {
                ...state,
                error: false,
                isLoadingGetUserBreweryReview: action.isLoadingGetUserBreweryReview
            };

        case types.GET_USER_BREWERY_REVIEW_SUCCESS:
            return {
                ...state,
                isLoadingGetUserBreweryReview: false,
                userBreweryReview: action.response.data[0].reviews_detail,
            }
        case types.GET_USER_BREWERY_REVIEW_ERROR:
            return {
                ...state,
                error: true,
                isLoadingGetUserBreweryReview: false,
                status: action.response.status,
                message: action.response.statusText || 'Something went wrong'
            };
        default:
            return state;
    }
};

export default reviewReducer;
