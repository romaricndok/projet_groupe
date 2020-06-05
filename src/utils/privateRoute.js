import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/'></Redirect>
        )
      }
    ></Route>
  );
};

PrivateRoute.propTypes = { component: PropTypes.object };

export default PrivateRoute;
