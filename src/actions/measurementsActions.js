import { LoadMeasurementRequest, CreateMeasurementRequest } from '../Utility/api';
import { measurementErrors } from './measurement';

export const FETCH_MEASUREMENTS_SUCCESS = 'FETCH_MEASUREMENTS_SUCCESS';

export const fetchMeasurementsSuccess = measurements => ({
  type: FETCH_MEASUREMENTS_SUCCESS,
  payload: measurements,
});

export const fetchMeasurements = id => async dispatch => {
  const method = 'get';
  try {
    const response = await LoadMeasurementRequest(method, id);
    const measurements = response.data;
    dispatch(fetchMeasurementsSuccess(measurements));
  } catch (error) {
    dispatch(measurementErrors([error.response.data.message]));
  }
};

export const createMeasurement = ({ duration, date }, activityId) => async dispatch => {
  const method = 'post';
  const data = { duration, date };
  try {
    await CreateMeasurementRequest(method, data, activityId);
    dispatch(fetchMeasurements(activityId));
  } catch (error) {
    dispatch(measurementErrors([error.response.data.message]));
  }
};
