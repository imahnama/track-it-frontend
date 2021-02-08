import { ACTIVITIES_ERRORS } from '../actions/types';

export default (state = [], action) => {
  if (action.type === ACTIVITIES_ERRORS) {
    return action.errors;
  }
  return state;
};
