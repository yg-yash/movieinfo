import * as actionTypes from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case actionTypes.FETCH_SINGLE_RESULT:
      return { ...state, movieDetails: action.payload };
    default:
      return state;
  }
};

export default reducer;
