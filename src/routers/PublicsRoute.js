import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/autContext';

export const PublicsRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    return user.logged
        ? <Navigate to={"/holoJP"} />
        : children
}
