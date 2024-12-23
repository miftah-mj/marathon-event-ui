import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="w-full h-96">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/VDG2tmc/151121-Marathon-01.jpg"
                        alt="slide-1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/YWFj8Kt/group-marathon-runners-abstract-swirl-backgr-21317626.jpg"
                        alt="slide-2"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/ZSHT014/images-q-tbn-ANd9-Gc-R1-Z7q8pn3zwe2qa-N-7-b-IWQOe-O7-Ej-Lp-NCDc-A-s.jpg"
                        alt="slide-3"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-96">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co.com/wr0Hgvm/images-q-tbn-ANd9-Gc-RQq4-Nmj8-Gn-O5-K2-RPk-CVof1h-R4-Wc-Ku-On9-OPQ-s.jpg"
                        alt="slide-4"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
