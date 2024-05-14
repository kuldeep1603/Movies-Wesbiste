import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';
import { baseImageUrl } from '../../Data/DataProvider';
import { DefeaultCast } from '../../Data/DataProvider';
import Loading_Effect from '../HomeContent/Loading_Effect';
const Movies_Cast = ({ data, Loading }) => {
    if (!data || data.length === 0) {
        return <p className='secondary-color'>No Cast Available ...!</p>
    }
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}
                scrollbar={{
                    hide: false,
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
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >
                {
                    data.map((CurrCast) => {
                        return (
                            <SwiperSlide key={CurrCast.cast_id}>
                                {Loading == true ? (
                                    <Loading_Effect Size="300px" />
                                ) : (
                                    <div className="card">
                                        <img src={CurrCast.profile_path ? `${baseImageUrl}${CurrCast.profile_path}` : DefeaultCast} alt={CurrCast.original_name} title={CurrCast.original_name} loading='lazy' className='img-fluid' />
                                        <div className="card-body">
                                            <p className='fw-semibold fs-18 text-ellipsis text-start mb-1 m-0'>{CurrCast.character}</p>
                                            <p className='fw-400 text-ellipsis text-start '>{CurrCast.name}</p>
                                        </div>
                                    </div>
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

export default Movies_Cast
