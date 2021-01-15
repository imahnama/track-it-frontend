/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { checkToken } from '../helpers/token';
import SideSection from './sideSection';
import SideNav from './sideNav';
import '../styles/App.css';

class HomePage extends Component {
  render() {
    const validToken = checkToken();
    if (validToken === false) { return (<Redirect to="/" />); }

    return (
      <div className="d-flex flex-row mt-1 main-div">
         <SideNav />
        <SideSection />
      </div>
    );
  }
}

export default HomePage;
