import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const Albums = lazy(() => import('./components/Albums'));
const Photo = lazy(() => import('./components/Photo'))

const Router = () => (
    <React.Suspense>
        <Routes>
            <Route path='' element={<Albums />} />
            <Route path='photos' element={<Photo />} />
        </Routes>
    </React.Suspense>
);

export default Router;
