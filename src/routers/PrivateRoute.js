import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/autContext';

export const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);

    /**
     * Para guardar la ultima pagina antes de cerrar sesión
     */
    const { pathname, search } = useLocation();

    /**
     * Guardar en el localstorage la ultima pagina antes de cerrar sesion
     */
    localStorage.setItem("lastPage", pathname + search);

  return user.logged
    ? children
    : <Navigate to={"/login"} />
}
