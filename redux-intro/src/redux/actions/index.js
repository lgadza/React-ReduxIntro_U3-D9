// import results from "../reducers/mainSearchReducer";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_MAIN_SEARCH = "SET_MAIN_SEARCH";
export const SET_COMPANY_SEARCH = "SET_COMPANY-SEARCH";
export const GET_MAIN_SEARCH = "GET_MAIN_SEARCH";
export const GET_MAIN_SEARCH_LOADING = "GET_MAIN_SEARCH_LOADING";
export const GET_MAIN_SEARCH_ERROR = "GET_MAIN_SEARCH_ERROR";
export const GET_COMPANY_SEARCH = "GET_COMPANY_SEARCH";

export const addToFavAction = (job) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: job,
  };
};

export const removeFromFavAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: i,
});
let results = [];
export const setMainSearchActionAsync = (query) => {
  return async (dispatch, getState) => {
    console.log("I will console log this before returning the action!");
    results.push(query);
    console.log("Let's also take a look the the current state:", getState());
    console.log("this is my ext", results[0]);
    dispatch({
      type: SET_MAIN_SEARCH,
      payload: query,
    });
  };
};
export const setCompanySearchActionAsync = (companySearch) => {
  return async (dispatch, getState) => {
    console.log("I will console log this before returning the action!");

    console.log("Let's also take a look the the current state:", getState());
    dispatch({
      type: SET_COMPANY_SEARCH,
      payload: companySearch,
    });
  };
};

export const mainSearch = async () => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  console.log(results[0]);
  return async (dispatch, getState) => {
    try {
      let response = await fetch(baseEndpoint + results[0] + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        console.log("Louis Search:", data);
        dispatch({
          type: GET_MAIN_SEARCH,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_MAIN_SEARCH_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_MAIN_SEARCH_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MAIN_SEARCH_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_MAIN_SEARCH_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_MAIN_SEARCH_ERROR,
        payload: true,
      });
    }
  };
};
