/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { checkToken } from '../helpers/token';

class Information extends Component {
  render() {
    const validToken = checkToken();
    if (validToken === false) { return (<Redirect to="/" />); }

    return (
      <div>
        <div className="p-2 mb-3 d-flex">
          <h5 className="mx-auto"> Copyright © 2020 by Rahma Halane </h5>
        </div>
        <div className="p-2 text-center text-secondary">
          All rights reserved. No part of this publication may be reproduced, distributed,
          or transmitted in any form or by any means, including photocopying, recording,
          or other electronic or mechanical methods, without the prior
          written permission of the developer
          , except in the case of brief quotations embodied in critical reviews and
          certain other noncommercial uses permitted by copyright law.
        </div>
        <div className="text-center p-4 text-secondary">
          For permission requests,
          write to the Software developer, addressed “Attention: Permissions
          Coordinator,” at the address below.
          <p>halane.rahma@gmail.com</p>
          <Link to="/homepage">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Information;
