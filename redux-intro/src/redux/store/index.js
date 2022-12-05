import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import mainSearchReducer from "../reducers/mainSearchReducer";
import companySearch from "../reducers/companySearch";

// configureStore will set up the Redux Store for us!
const bigReducer = combineReducers({
  job: mainSearchReducer,
  favourite: mainReducer,
  company: companySearch,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
