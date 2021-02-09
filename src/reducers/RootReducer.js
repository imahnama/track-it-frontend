/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import activitiesReducer from './activitiesReducer';
import measurementsReducer from './measurementsReducer';
import errorReducer from './errorReducer';

const RootReducer = combineReducers({
  authReducer: authReducer,
  errorReducer: errorReducer,
  activitiesReducer: activitiesReducer,
  measurementsReducer: measurementsReducer,
});

export default RootReducer;
