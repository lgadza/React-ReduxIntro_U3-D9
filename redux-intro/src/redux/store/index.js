import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import mainSearchReducer from "../reducers/mainSearchReducer";
import companySearch from "../reducers/companySearch";
import searchResultsReducer from "../reducers/searchResults";
// import storage from "redux-persist/lib/storage";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "E1A2G3LE",
    }),
  ],
};
//  process.env.REACT_APP_SECRET_KEY

const bigReducer = combineReducers({
  job: mainSearchReducer,
  favourite: mainReducer,
  company: companySearch,
  jobSearch: searchResultsReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
