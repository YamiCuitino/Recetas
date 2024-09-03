import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element }) => {
    const isAuthenticated = useAuth();

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;