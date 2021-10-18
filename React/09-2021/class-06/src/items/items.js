/**
 * Action Types for itemReducer
 */

export const GET_INITIAL_ITEMS = 'GET_INITIAL_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const itemReducer = (state, action) => {
  switch (action.type) {
    case GET_INITIAL_ITEMS: {
      return state;
    }
    case SET_ITEMS: {
      return { ...state, items: action.payload };
    }
    case ADD_ITEM: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        }),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    }
    default: {
      return state;
    }
  }
};

export const initalItemState = {
  items: [],
};
