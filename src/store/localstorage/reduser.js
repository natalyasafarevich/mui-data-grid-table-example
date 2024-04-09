import { LOCALSTORAGE } from "./actions";

const initialState = {
params:[]
};

export const LocalStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCALSTORAGE:
      return {
        ...state,
        params: action.data
      }
     
    default:
      return state;
  }
};
