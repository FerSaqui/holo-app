import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/autContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem("user")) ?? { logged: false };
}

export const HoloApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
  }, [user])
  

  return (
    // En los contextos se necesita proveer información que será accesible a toda la aplicación
    <AuthContext.Provider value = {{
      user,
      dispatch
    }}>
        <AppRouter />
    </AuthContext.Provider>
  )
}
