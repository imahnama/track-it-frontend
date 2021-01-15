import { unauthenticatedRequest } from '../Utility/api';
import { saveToken } from '../helpers/token';

export const AUTHENTICATION_ERROR = 'authentication_error';
export const AUTHENTICATED = 'authenticated_user';

export function receiveLogin({ email, password }) {
  return async dispatch => {
    const path = 'auth/login';
    const method = 'post';
    const data = { email, password };
    try {
      const response = await unauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      saveToken(response.data.auth_token);
      window.location.href = '/homepage';
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password',
      });
    }
  };
}

export function receiveSignUp({ name, email, password }) {
  return async dispatch => {
    const path = 'signup';
    const method = 'post';
    const data = { name, email, password };
    try {
      const response = await unauthenticatedRequest(method, path, data);
      dispatch({ type: AUTHENTICATED });
      saveToken(response.data.auth_token);
      window.location.href = '/homepage';
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: error.response.data.message,
      });
    }
  };
}

export function signOut() {
  localStorage.clear('tokenObj');
  window.location.href = '/';
}
