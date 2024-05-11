import { ADD_TODOS, SET_LOADING, SET_ERROR } from "./todo-actions";

const initialState = {
  status: "idle",
  list: [],
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        list: action.payload,
        status: "fullfilled",
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    default:
      return state;
  }
};
