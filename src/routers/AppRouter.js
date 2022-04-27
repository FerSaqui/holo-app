import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { LoginScreen } from '../components/Login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicsRoute } from './PublicsRoute'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route
                    path="/login"
                    element={
                        <PublicsRoute>
                            <LoginScreen />
                        </PublicsRoute>
                    }
                />



                {/**Si la ruta no es /login, las demás rutas serán manejadas acá */}
                {/* <Route path="/*" element={ <DashboardRoutes /> }/> */}

                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    )
}
