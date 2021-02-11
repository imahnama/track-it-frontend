/* eslint-disable no-unused-vars */
import { unauthenticatedRequest } from '../Utility/api';
import { saveToken } from '../helpers/token';
import { setErrors } from './error';

export const AUTHENTICATED = 'authenticated_user';

export function receiveLogin({ email, password }, history) {
  return async dispatch => {
    const path = 'authentication';
    const method = 'post';
    const data = { email, password };
    try {
      const response = await unauthenticatedRequest(method, path, data);
      dispatch({
        payload: response.data.auth_token,
        type: AUTHENTICATED,
      });
      saveToken(response.data.auth_token);
      history.push('/homepage');
    } catch (error) {
      const value = [error.response.data.message];
      dispatch(setErrors(value[0]));
    }
  };
}

export function receiveSignUp({ name, email, password }, history) {
  return async dispatch => {
    const path = 'signup';
    const method = 'post';
    const data = { name, email, password };
    try {
      const response = await unauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      saveToken(response.data.auth_token);
      history.push('/homepage');
    } catch (error) {
      const value = [error.response.data.message];
      dispatch(setErrors(value[0]));
    }
  };
}

export function signOut(history) {
  return dispatch => {
    localStorage.clear('tokenObj');
    history.push('/');
  };
}
