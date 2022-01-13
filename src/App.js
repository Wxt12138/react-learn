import React, { Fragment } from 'react'
import Login from './pages/login/index'
import Home from './pages/home/index'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/home" element={Home} /> */}
                    <Route exact path="/" element={<Home />} />
                </Routes>
                {/* <Navigate to={"/login"} /> */}
            </Router>
        </Fragment>
    )
}

export default App
