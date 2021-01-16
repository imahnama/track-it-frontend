/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createActivity } from '../actions/activitiesAction';
import { checkToken } from '../helpers/token';

const CreateActivity = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [total, setTotal] = useState('');
  const dispatch = useDispatch();

  const submitActivity = event => {
    event.preventDefault();
    dispatch(createActivity({ title, total }, history));
  };

  const validToken = checkToken();
  if (validToken === false) { return (<Redirect to="/" />); }

  return (
    <Jumbotron className="d-flex flex-column align-items-center">
      <h3 className="">Create A New Activity!</h3>
      <Form className="w-25 mb-4" onSubmit={submitActivity}>
        <Form.Group controlId="formBasicTitle">
          <Form.Control type="text" placeholder="Enter a Title" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicTotal">
          <Form.Control type="number" placeholder="Enter a total" value={total} onChange={e => setTotal(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default CreateActivity;
