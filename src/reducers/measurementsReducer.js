import {
  FETCH_MEASUREMENTS_SUCCESS,
} from '../actions/measurementsActions';

import { MEASUREMENT_ERRORS } from '../actions/types';

const initialState = {
  measurements: [].reverse(),
  error: '',
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        measurements: [...action.payload].reverse(),
        error: '',
      };
    case MEASUREMENT_ERRORS:
      return {
        ...state,
        measurement: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default measurementsReducer;
