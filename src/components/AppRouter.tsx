import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ColorPage from "../pages/ColorPage";
import {Context} from "../index";
// import ColorList from "./ColorList";
import Admin from "../pages/Admin";
import Colors from "../pages/Colors";

const AppRouter = () => {
    const {color} = useContext(Context)
    // console.log(color);
    return (
        <Routes>
            <Route path={'/'} element={<Colors/>} />
            <Route path={'/color'} element={<Colors/>} />
            <Route path={'/color/:id'} element={<ColorPage/>} />
            <Route path={'/admin'} element={<Admin/>} />
            <Route path="*" element={<Navigate  to={'/'} replace />} />
        </Routes>
    );
};

export default AppRouter;