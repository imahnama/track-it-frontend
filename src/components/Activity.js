import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteActivity } from '../actions/activitiesAction';

const Activity = ({ activity }) => {
  const dispatch = useDispatch();

  const deleteAct = id => {
    dispatch(deleteActivity(id));
  };

  return (
    <div>
      <Card className="w-25 ml-2 mt-4">
        <h2>{ activity.title }</h2>
        <span>{ activity.total }</span>
        <p className="d-flex justify-content-between p-4">
          <Link
            className="links-info"
            to={{
              pathname: `/activity/${activity.id}/measurements`,
              state: activity,
            }}
          >
            <Button variant="info" className="btn">Details</Button>
          </Link>
          <FontAwesomeIcon className="fa-lg" icon={faTrash} onClick={() => deleteAct(activity.id)} />
        </p>
      </Card>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default Activity;
