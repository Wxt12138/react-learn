import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Layouts from '@/pages/layout/index'

export default () => (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Layouts />} >
                <Route path="/home" element={<Home />} />
            </Route>

        </Routes>
    </Router>
)
