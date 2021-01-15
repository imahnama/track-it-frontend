import { AUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/authActions';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
