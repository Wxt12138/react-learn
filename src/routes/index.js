import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Img from '@/pages/img/index'
import Layouts from '@/pages/layout/index'
const route = () => (
    // return (
    <HashRouter>
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/" element={<Layouts />} >
                <Route path="/home" element={<Home />} />
                <Route path="/img" element={<Img />} />
            </Route>
        </Routes>
    </HashRouter>
    // )
)

export default route
