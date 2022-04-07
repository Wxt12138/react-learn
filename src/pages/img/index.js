import React, { useEffect, useState } from 'react'
import { Divider } from 'antd';
import Masonry from 'masonry-layout';
import { post } from '@/utils/http'
import './index.scss'
export default function Img() {
    const [nums, setNums] = useState(3);
    useEffect(() => {
        var msnry = new Masonry('.grid', { columnWidth: 320, isAnimated: true });
        msnry.layout();
        document.getElementsByTagName('main')[0].onscroll = function () {
            if (nums >= 20) return;
            let scrollTop = document.getElementsByTagName('main')[0].scrollTop;
            let windowHeight = document.getElementsByTagName('main')[0].clientHeight;
            let scrollHeight = document.querySelector('.grid').clientHeight;
            if (scrollTop + windowHeight >= scrollHeight) {
                let n = nums + 3;
                setNums(n)
            }
        }
        return () => {
            document.getElementsByTagName('main')[0].onscroll = null;
        }
    }, [nums])

    let item = [];
    for (let i = 0; i < nums; i++) {
        item.push(i)
    }
    // 请求事件
    useEffect(() => {
        post('/home')
    }, [])

    return (
        <div >
            <Divider orientation="left">瀑布流的应用</Divider>
            <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                {
                    item.map((item) => <div key={item} className="grid-item grid-item--height3">
                        <span>{item}-这是渐变字体</span>
                    </div>)
                }
            </div>
        </div>


    )
}
