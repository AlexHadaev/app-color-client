import React, {memo, useContext, useMemo} from 'react'
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Navbar from "./components/NavBar"
import {fetchTypes} from "./http/colorAPI"
import {Context} from "./index"


const App = memo(() => {
    const {color} = useContext(Context)
    // console.log('App')

    useMemo(()=>{
        fetchTypes().then(data => {
            color.setTypes(data)
        })
    },[])

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
})

export default App