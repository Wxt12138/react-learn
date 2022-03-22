import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Img from '@/pages/img/index'
import Layouts from '@/pages/layout/index'
import store from '@/store/mainStore'


const Rout = () => {
    const [islogin, setIslogin] = useState();
    store.subscribe(() => {
        setIslogin(store.getState().token ? true : false)
    })

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/" element={!islogin ? <Navigate to="/login" /> : <Layouts />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/img" element={<Img />} />
                </Route>
                <Route path='*' element={<Navigate to="/login" />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default Rout
