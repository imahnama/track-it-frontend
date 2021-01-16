/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faHome,
}
  from '@fortawesome/free-solid-svg-icons';
import Measurement from '../components/Measurement';
import { fetchMeasurements } from '../actions/measurementsActions';

const Measurements = ({ location }) => {
  const activity = location.state;
  const dispatch = useDispatch();
  const timeDifference = [];
  const diffVal = [];

  useEffect(() => {
    dispatch(fetchMeasurements(activity.id));
  }, []);

  const measurements = useSelector(state => state.measurementsReducer.measurements);

  for (let i = 0; i < measurements.length; i += 1) {
    timeDifference.push(parseFloat(measurements[i].duration));
    if (timeDifference.length === 1) {
      diffVal.push(timeDifference[0]);
    } else if (timeDifference.length > 1) {
      diffVal.push(
        timeDifference[timeDifference.length - 2] - timeDifference[timeDifference.length - 1],
      );
    }
  }

  return (
    <div>
      <div>
        <div className="d-flex flex-row-reverse justify-content-between mr-4 mt-3">
          <Link
            to={{
              pathname: `/activity/${activity.id}/create`,
              state: activity,
            }}
          >
            <FontAwesomeIcon className="fa-2x" icon={faPlus} />
          </Link>
          <Link to="/homepage">
            <FontAwesomeIcon className="fa-2x ml-3" icon={faHome} />
          </Link>
        </div>
        <div>
          {
                    measurements.map((measurement, index) => (
                      <Measurement
                        key={index}
                        index={index}
                        measurement={measurement}
                        diffVal={diffVal}
                      />
                    ))
                }
        </div>
      </div>
    </div>
  );
};

Measurements.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

export default Measurements;
