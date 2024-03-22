import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Home from './Home'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}

export default AllRoutes
