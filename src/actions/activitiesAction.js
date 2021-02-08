import { GetActivityRequest, CreateActivityRequest, DeleteActivityRequest } from '../Utility/api';
import { activityErrors } from './activity';

export const GET_ACTIVITIES_REQUEST = 'GET_ACTIVITIES_REQUEST';
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

export const getActivitiesSuccess = activities => ({
  type: GET_ACTIVITIES_SUCCESS,
  payload: activities,
});

export const getActivitiesRequest = () => ({
  type: GET_ACTIVITIES_REQUEST,
});

export const deleteActivityRequest = id => ({
  type: DELETE_ACTIVITY,
  payload: id,
});

export const deleteActivity = id => async dispatch => {
  const method = 'delete';
  try {
    await DeleteActivityRequest(method, id);
    dispatch(deleteActivityRequest(id));
  } catch (error) {
    dispatch(activityErrors([error.response.data.message]));
  }
};

export const getActivities = token => async dispatch => {
  const method = 'get';
  try {
    const response = await GetActivityRequest(method, token);
    const activities = response.data;
    dispatch(getActivitiesSuccess(activities));
  } catch (error) {
    dispatch(activityErrors([error.response.data.message]));
  }
};

export const createActivity = (form, history) => async dispatch => {
  dispatch(getActivitiesRequest());
  const method = 'post';
  try {
    await CreateActivityRequest(method, form);
    dispatch(getActivities());
    history.push('/activities');
  } catch (error) {
    dispatch(activityErrors([error.response.data.message]));
  }
};
