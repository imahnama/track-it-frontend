import { AUTHENTICATED } from '../actions/authActions';
import { SET_ERRORS } from '../actions/types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
        error: '',
      };
    case SET_ERRORS:
      return {
        ...state,
        authenticated: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
