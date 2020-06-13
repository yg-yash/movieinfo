import * as actionTypes from '../actions/actionTypes';
const initialState = {
  searchResults: [],
  loading: false,
  movieDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESULTS:
      return { ...state, searchResults: action.payload, loading: false };
    case actionTypes.FETCH_SINGLE_RESULT:
      return { ...state, movieDetails: action.payload, loading: false };
    case actionTypes.LOADING_RESULT:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
