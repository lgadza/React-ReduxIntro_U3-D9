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
export const setMainSearchActionAsync = (query) => {
  // return async (dispatch, getState) => {
  //   dispatch({
  //     type: SET_MAIN_SEARCH,
  //     payload: query,
  //   });
  // };
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  console.log(query);
  return async (dispatch) => {
    try {
      let response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        console.log("Louis Search:", data);
        dispatch({
          type: SET_MAIN_SEARCH,
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

export const mainSearch = async (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  console.log(query);
  return async (dispatch) => {
    try {
      let response = await fetch(baseEndpoint + query + "&limit=20");
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
