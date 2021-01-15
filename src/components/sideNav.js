import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faChartLine, faChartPie, faEllipsisH,
}
  from '@fortawesome/free-solid-svg-icons';
import { checkToken } from '../helpers/token';

const SideNav = () => {
  const validToken = checkToken();
  if (validToken === false) { return (<Redirect to="/" />); }
  return (
    <div className="w-25 div-one">
      <div className="p-4 test home">
        <FontAwesomeIcon className="fa-5x text-white" icon={faHome} />
        <p className="text-white m-3">Home </p>
      </div>
      <div className="bg-dark p-4 mt-1 activity">
        <Link to="/create-activity">
          <FontAwesomeIcon className="ml-3 fa-5x text-white" icon={faChartLine} />
          <p className="text-white p-3">Create Activity </p>
        </Link>
      </div>
      <div className="bg-dark p-4 mt-1 info">
        <Link to="/information">
          <FontAwesomeIcon className="ml-3 fa-5x text-white" icon={faChartPie} />
          <p className="text-white p-3">Information</p>
        </Link>
      </div>
      <div className="p-4 mt-1 test home">
        <FontAwesomeIcon className="ml-3 fa-5x text-white" icon={faEllipsisH} />
        <p className="text-white p-3">More </p>
      </div>
      <div className="bg-dark p-5 mt-1">
        hi
      </div>
    </div>
  );
};

export default SideNav;
