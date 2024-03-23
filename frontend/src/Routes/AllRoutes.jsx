import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Home from './Home'
import Trial from './Trial'
import InboxContent from '../Components/InboxContent'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/try' element={<Trial />} />
            <Route path='/onebox' element={<Home><InboxContent /></Home>} />
        </Routes>
    )
}

export default AllRoutes
