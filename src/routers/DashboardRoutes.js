import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HoloScreenEN } from '../components/EN/HoloScreenEN';
import { HoloScreenJP } from '../components/JP/HoloScreenJP';
import { Navbar } from '../components/Navbar/Navbar'
import { SearchScreen } from '../components/Search/SearchScreen'
import { VtuberScreen } from '../components/Vtuber/VtuberScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="holoJP" element={<HoloScreenJP />} />
                    <Route path="holoEN" element={<HoloScreenEN />} />

                    <Route path="vtuber/:vtuberId" element={<VtuberScreen />} />
                    <Route path="search" element={<SearchScreen />} />

                    <Route path="/" element={<HoloScreenJP />} />
                </Routes>
            </div>

        </>
    )
}
