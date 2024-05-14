import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { baseImageUrl } from '../../Data/DataProvider';
import { DefeaultCast } from '../../Data/DataProvider';
import Loading_Effect from '../HomeContent/Loading_Effect';

const Movies_Images = ({ data, Loading }) => {
    if (!data || data.length === 0) {
        return <p className='secondary-color'>No Images Found ...!</p>
    }
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper ">
                {
                    data.map((CurImages, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {
                                    Loading == true ? (
                                        <Loading_Effect Size="200px" />
                                    ) : (
                                        <img src={CurImages.file_path ? `${baseImageUrl}${CurImages.file_path}` : DefeaultCast} style={{ height: "200px" }} alt={CurImages.file_path} loading='lazy' className='img-fluid' />
                                    )
                                }
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Movies_Images
