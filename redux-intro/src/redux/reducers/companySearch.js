import { GET_COMPANY_SEARCH } from "../actions";

const initialState = {
  companySearch: [],
};

const companySearch = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_SEARCH:
      return {
        ...state,
        companySearch: action.payload,
      };

    default:
      return state;
  }
};

export default companySearch;
