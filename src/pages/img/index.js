import React, { useEffect, useState } from 'react'
import Masonry from 'masonry-layout';
import './index.scss'
export default function Img() {
    const [nums, setNums] = useState(3);
    useEffect(() => {
        var msnry = new Masonry('.grid', { columnWidth: 80 });
        msnry.layout();
        window.onscroll = function () {
            console.log(document.querySelector('.grid').clientHeight)
            let scrollTop = document.documentElement.scrollTop;
            let windowHeight = document.documentElement.clientHeight;
            let scrollHeight = document.querySelector('.grid').clientHeight;
            if (scrollTop + windowHeight >= scrollHeight) {
                let n = nums + 3;
                setNums(n)
            }
        }
        return () => {
            console.log(123)
            window.onscroll = null;
        }
    }, [nums])
    let item = [];
    for (let i = 0; i < nums; i++) {
        item.push(i)
    }

    return (
        <div>
            <div>{nums}</div>
            <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--height2"></div>
                {
                    item.map((item) => <div key={item} className="grid-item grid-item--height3"></div>)
                }
            </div>
        </div>


    )
}
