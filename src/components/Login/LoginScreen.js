import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/autContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const navegacion = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    /**
     * Obtener del localstorage la ultima pagina antes de cerrar sesión.
     */

    const lastPage = localStorage.getItem("lastPage") || "/";

    const userAcction = {
      type: types.login,
      payload: {
        name: "Fernando",
      }
    };
    
    dispatch(userAcction);
    
    /**
     * Para redirigir a una pantalla especifica, donde:
     * Primer argumento: La ruta a redireccionar.
     * Segundo argumento: Un objeto que puede tener la propiedad replace en true para indicar que no pueda regresar
     *                    a la página anterior.
     */
    navegacion(lastPage, {
      replace: true //Reemplaza la vista actual o que reemplace la historia en lugar de crear una nueva entrada en la historia
    });
  }

  return (
    <div className="container my-5">
        <h1>Login Screen</h1>
        <hr />

        <button
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Login
        </button>

    </div>
  )
}
