import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { checkToken } from '../../helpers/token';
import { receiveSignUp } from '../../actions/authActions';

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validToken = checkToken();
  if (validToken === true) { return (<Redirect to="/homepage" />); }

  const submitData = event => {
    event.preventDefault();
    dispatch(receiveSignUp({ name, email, password }));
  };

  const errorMessage = useSelector(state => state.authReducer.error);

  return (
    <div>
      <Form className="w-25 m-auto pt-5" onSubmit={submitData}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <p>{ errorMessage || '' }</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to="/">
          <p className="mt-4"> Already have an account? Sign In here!</p>
        </Link>
      </Form>
    </div>
  );
};

export default Signup;
