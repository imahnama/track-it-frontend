import { AUTHENTICATED } from '../actions/authActions';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
