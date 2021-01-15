/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import activitiesReducer from './activitiesReducer';
import measurementsReducer from './measurementsReducer';

const RootReducer = combineReducers({
  authReducer: authReducer,
  activitiesReducer: activitiesReducer,
  measurementsReducer: measurementsReducer,
});

export default RootReducer;
