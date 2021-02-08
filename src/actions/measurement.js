/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */
import { MEASUREMENT_ERRORS } from './types';

export const measurementErrors = (errors) => ({
  type: MEASUREMENT_ERRORS,
  payload: errors,
});
