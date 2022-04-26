import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navegacion = useNavigate();

  const handleLogin = () => {
    /**
     * Para redirigir a una pantalla especifica, donde:
     * Primer argumento: La ruta a redireccionar.
     * Segundo argumento: Un objeto que puede tener la propiedad replace en true para indicar que no pueda regresar
     *                    a la página anterior.
     */
    navegacion("/holoJP", {
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
