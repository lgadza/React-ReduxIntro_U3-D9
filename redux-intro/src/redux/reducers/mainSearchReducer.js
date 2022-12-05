import { GET_MAIN_SEARCH } from "../actions";

const initialState = {
  search: "",
};

const mainSearchReducer = (state = initialState, action) => {
  //   console.log(state.search.action.payload);
  switch (action.type) {
    case GET_MAIN_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default mainSearchReducer;
