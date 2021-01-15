import React from 'react';
import { Redirect } from 'react-router-dom';
import Activities from '../containers/Activities';
import { checkToken } from '../helpers/token';

const SideSection = () => {
  const validToken = checkToken();
  if (validToken === false) { return (<Redirect to="/" />); }
  return (
    <div className="w-75 div-two bg-light">
      <Activities />
    </div>
  );
};

export default SideSection;
