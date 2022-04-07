import React, { Component } from 'react'
import { Divider } from 'antd';
import Barchart from '@/components/echart/barchart';
import { Linecharts } from '@/components/echart/linechart';
import HomeSwiper from '@/components/swiper/homeSwiper'
class Home extends Component {

    render() {
        return (
            <div>
                <Divider orientation="left">swiper简单应用</Divider>
                <HomeSwiper></HomeSwiper>
                <Divider orientation="left">Echart应用</Divider>
                <div style={{
                    "display": "flex",
                    "justifyContent": "space-around",
                    "flex": "1"
                }}>
                    <div style={{
                        "width": "100%"
                    }}>
                        <Barchart></Barchart>
                    </div>
                    <div style={{
                        "width": "100%"
                    }}>
                        <Linecharts></Linecharts>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
