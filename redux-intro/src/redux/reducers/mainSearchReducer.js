import { SET_MAIN_SEARCH } from "../actions";

const initialState = {
  search: "",
};

const mainSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default mainSearchReducer;
