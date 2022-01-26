import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Layouts from '@/pages/layout/index'
const route = () => (
    // return (
    <HashRouter>
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Layouts />} >
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    </HashRouter>
    // )
)

export default route
