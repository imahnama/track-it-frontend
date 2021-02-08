import { unauthenticatedRequest } from '../Utility/api';
import { saveToken } from '../helpers/token';
import { setErrors } from './error';

export const AUTHENTICATED = 'authenticated_user';

export function receiveLogin({ email, password }) {
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
    } catch (error) {
      dispatch(setErrors([error.response.data.message]));
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
      dispatch(setErrors([error.response.data.message]));
    }
  };
}

export function signOut() {
  localStorage.clear('tokenObj');
  window.location.href = '/';
}
