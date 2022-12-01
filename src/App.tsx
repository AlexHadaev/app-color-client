import React, {useContext, useEffect, useMemo} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/NavBar";
import {fetchTypes} from "./http/colorAPI";
import {Context} from "./index";


const App = () => {
    const {color} = useContext(Context)
    useMemo(()=>{
        console.log(2);
        fetchTypes().then(data => {
            color.setTypes(data)
            console.log(5);
        })
    },[])

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;