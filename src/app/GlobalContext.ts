// Redux store setup - store.js
import { createStore } from "redux";

// Define action types
type GlobalAction = 
  | { type: "SET_LOADED"; payload: boolean };

// Initial state
const initialState = {
  isLoaded: false,
};

// Reducer
const globalReducer = (state = initialState, action: GlobalAction) => {
  switch (action.type) {
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setLoaded = (isLoaded: boolean) => ({
  type: "SET_LOADED",
  payload: isLoaded,
});

// Create store
const store = createStore(globalReducer);

export default store;
