/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { checkToken } from '../../helpers/token';
import { receiveLogin } from '../../actions/authActions';

const Login = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validToken = checkToken();
  if (validToken === true) { return (<Redirect to="/homepage" />); }

  const saveData = event => {
    event.preventDefault();
    dispatch(receiveLogin({ email, password }, history));
  };

  const errorMessage = useSelector(state => state.errorReducer.error);

  return (
    <div>
      <Form className="w-25 m-auto pt-5" onSubmit={saveData}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" className="field" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className="field" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <p>{ errorMessage || '' }</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={{ pathname: '/auth/signup' }}>
          <p className="mt-4"> Dont have an account? Sign Up here!</p>
        </Link>
      </Form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    history: PropTypes.string,
  }),
};

export default Login;
