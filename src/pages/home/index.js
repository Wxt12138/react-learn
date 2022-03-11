import React, { Component } from 'react'
import { Divider } from 'antd';
import Barchart from '@/components/echart/barchart';
import { Linecharts } from '@/components/echart/linechart';
class Home extends Component {

    render() {
        return (
            <div>
                <Divider orientation="left">2022 编程语言排行</Divider>
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
