import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import './homeSwiper.scss'


export default function HomeSwiper() {
    return (
        <Swiper
            // modules={[Scrollbar]}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='side'>
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11695385237%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650534246&t=92db13a17800e232fb1a8b1895069828" alt='fiveyear'></img>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='side'>
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhao.gjw123.com%2Fzb_users%2Fupload%2Fprinter%2F2021-06-25%2F60d5c67a28d2f.jpg&refer=http%3A%2F%2Fhao.gjw123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650534281&t=6049a2a3aa3e2a9776e3033b8a6887d8" alt="no"></img></div>
            </SwiperSlide>
        </Swiper>
    )
}
