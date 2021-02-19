import React from 'react';
import { getCurrentUser } from '../../services/authService';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return ( 
        <Route 
      {...rest}
      render={props => {
        if (!getCurrentUser()) return <Redirect to="/login"/>
        return Component ? <Component {...props}/> : render(props);
      }}/>
    );
}
 
export default ProtectedRoute;