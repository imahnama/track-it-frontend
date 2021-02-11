/* eslint-disable react/require-default-props */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPowerOff,
}
  from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import { checkToken } from '../helpers/token';
import { signOut } from '../actions/authActions';
import '../styles/App.css';

const NavBar = ({ history }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOut(history));
  };

  const validToken = checkToken();

  return (
    <div className="">
      <Navbar variant="dark" className="test">
        <h1 className="text-white m-auto"> Track It </h1>
        { validToken && <FontAwesomeIcon className="fa-2x text-white pr-3" icon={faPowerOff} onClick={logOut} /> }
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  history: PropTypes.shape({
    history: PropTypes.string,
  }),
};

export default withRouter(NavBar);
