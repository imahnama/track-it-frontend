import { GetActivityRequest, CreateActivityRequest, DeleteActivityRequest } from '../Utility/api';

export const GET_ACTIVITIES_REQUEST = 'GET_ACTIVITIES_REQUEST';
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS';
export const GET_ACTIVITIES_FAILURE = 'GET_ACTIVITIES_FAILURE';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

export const getActivitiesSuccess = activities => ({
  type: GET_ACTIVITIES_SUCCESS,
  payload: activities,
});

export const getActivitiesRequest = () => ({
  type: GET_ACTIVITIES_REQUEST,
});

export const getActivitiesFailure = error => ({
  type: GET_ACTIVITIES_FAILURE,
  payload: error,
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
    dispatch(getActivitiesFailure(error));
  }
};

export const getActivities = () => async dispatch => {
  const method = 'get';
  try {
    const response = await GetActivityRequest(method);
    const activities = response.data;
    dispatch(getActivitiesSuccess(activities));
  } catch (error) {
    dispatch(getActivitiesFailure());
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
    dispatch(getActivitiesFailure());
  }
};
