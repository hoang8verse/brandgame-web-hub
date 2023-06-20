
export const SET_MATCHES_BY_DAY = "SET_MATCHES_BY_DAY";

const defaultState = {
  matchesByDay: [],
};

export default function matchReducer(state = defaultState, action) {
  switch (action.type) {
  
    case SET_MATCHES_BY_DAY: {
      return {
        ...state,
        matchesByDay: action.data,
      };
    }
    default:
      return state;
  }
}

export const setMatchByDay = (data) => ({
  type: SET_MATCHES_BY_DAY,
  data,
});
