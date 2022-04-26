import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { LoginScreen } from '../components/Login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />

                {/**Si la ruta no es /login, las demás rutas serán manejadas acá */}
                <Route path="/*" element={ <DashboardRoutes /> }/>
            </Routes>
        </BrowserRouter>
    )
}
