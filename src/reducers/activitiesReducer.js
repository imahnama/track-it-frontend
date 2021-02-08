import {
  GET_ACTIVITIES_SUCCESS,
  DELETE_ACTIVITY,
  GET_ACTIVITIES_REQUEST,
} from '../actions/activitiesAction';

import { ACTIVITIES_ERRORS } from '../actions/types';

const initialState = {
  activities: [],
  error: '',
  loading: false,
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        error: '',
        loading: false,
      };
    case ACTIVITIES_ERRORS:
      return {
        ...state,
        activities: [],
        error: action.payload,
        loading: false,
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(data => data.id !== action.payload),
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default activitiesReducer;
