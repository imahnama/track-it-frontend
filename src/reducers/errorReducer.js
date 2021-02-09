import { SET_ERRORS } from '../actions/types';

const errorReducer = (state = {}, action) => {
  if (action.type === SET_ERRORS) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default errorReducer;
