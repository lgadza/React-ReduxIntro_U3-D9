import {
  GET_MAIN_SEARCH,
  GET_MAIN_SEARCH_ERROR,
  GET_MAIN_SEARCH_LOADING,
} from "../actions";

const initialState = {
  search: [],
  isLoading: true,
  isError: false,
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_SEARCH:
      return {
        ...state,
        search: [action.payload],
      };
    case GET_MAIN_SEARCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_MAIN_SEARCH_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default searchResultsReducer;
