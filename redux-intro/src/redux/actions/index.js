import mainSearch from "../reducers/mainSearchReducer";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_MAIN_SEARCH = "SET_MAIN_SEARCH";
export const SET_COMPANY_SEARCH = "SET_COMPANY-SEARCH";
export const GET_MAIN_SEARCH = "GET_MAIN_SEARCH";
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

// export const setMainSearchAction = (mainSearch) => {
//   return {
//     type: SET_MAIN_SEARCH,
//     payload: mainSearch,
//   };
// };
// export const setCompanySearchAction = (companySearch) => {
//   return {
//     type: SET_COMPANY_SEARCH,
//     payload: companySearch,
//   };
// };

export const setMainSearchActionAsync = (mainSearch) => {
  return async (dispatch, getState) => {
    console.log("I will console log this before returning the action!");

    console.log("Let's also take a look the the current state:", getState());
    dispatch({
      type: SET_MAIN_SEARCH,
      payload: mainSearch,
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

// export const getBooksAction = () => {
//   return async (dispatch, getState) => {
//     console.log("Fetching the books from the API...");
//     try {
//       let resp = await fetch(
//         "https://striveschool-api.herokuapp.com/food-books"
//       );
//       if (resp.ok) {
//         let fetchedBooks = await resp.json();
//         dispatch({
//           type: GET_BOOKS,
//           payload: fetchedBooks,
//         });
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const MainSearch = async () => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return async (dispatch, getState) => {
    try {
      let response = await fetch(baseEndpoint + mainSearch + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_MAIN_SEARCH,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// export const getJob = async () => {
//   const baseEndpoint =
//     "https://strive-benchmark.herokuapp.com/api/jobs?company=";
//   return async (dispatch, getState) => {
//     try {
//       let response = await fetch(baseEndpoint + params.companyName);
//       if (response.ok) {
//         const companyData = await response.json();
//         dispatch({
//           type: GET_COMPANY_SEARCH,
//           payload: companyData,
//         });
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
