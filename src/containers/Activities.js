/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activity from '../components/Activity';
import { getActivities } from '../actions/activitiesAction';
import '../styles/App.css';

const Activities = () => {
  const activitiesReducer = useSelector(state => state.activitiesReducer);

  const authenticationToken = useSelector(state => state.authReducer.authenticated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities(authenticationToken));
  }, [authenticationToken]);

  const todaysDate = new Date();
  const result = todaysDate.toUTCString().split(' ');
  result.splice(4, 2);
  const finalValue = result.join(' ');

  return (
    <div>
      <div className="d-flex justify-content-center mt-3 font-weight-bold">
        { finalValue }
      </div>
      <div className="ml-2 all-activities">
        {
          activitiesReducer.activities.map((activity, key) => (
            <Activity activity={activity} key={key} />
          ))
          }
      </div>
    </div>
  );
};

export default Activities;
