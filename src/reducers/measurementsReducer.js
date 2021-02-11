import {
  FETCH_MEASUREMENTS_SUCCESS,
} from '../actions/measurementsActions';

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
    default:
      return state;
  }
};

export default measurementsReducer;
