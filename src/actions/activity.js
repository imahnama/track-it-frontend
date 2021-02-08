/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */
import { ACTIVITIES_ERRORS } from './types';

export const activityErrors = (errors) => ({
  type: ACTIVITIES_ERRORS,
  payload: errors,
});
