import React, { useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import Img from '@/pages/img/index'
import Table from '@/pages/table/index'
import Layouts from '@/pages/layout/index'
import store from '@/store/mainStore'
import { UserToken } from '../utils/cache'


const Rout = () => {
    const [islogin, setIslogin] = useState(UserToken.get() ? true : false);
    store.subscribe(() => {
        console.log("订阅")
        setIslogin(store.getState().token ? true : false)
    })

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/" element={!islogin ? <Navigate to="/login" /> : <Layouts />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/img" element={<Img />} />
                    <Route path="/table" element={<Table />} />
                </Route>
                <Route path='*' element={<Navigate to="/login" />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default Rout
