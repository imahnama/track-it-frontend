/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */
import { SET_ERRORS } from './types';

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors,
});
