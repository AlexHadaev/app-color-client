import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ColorPage from "../pages/ColorPage";
import Admin from "../pages/Admin";
import Colors from "../pages/Colors";

const AppRouter = () => {
    // console.log('AppRouter');
    return (
        <Routes>
            <Route path={'/color'} element={<Colors/>} />
            <Route path={'/color/:id'} element={<ColorPage/>} />
            <Route path={'/admin'} element={<Admin/>} />
            <Route path="*" element={<Navigate  to={'/color'} replace />} />
        </Routes>
    );
};

export default AppRouter;