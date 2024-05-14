import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Card from './Card';
import { Link } from 'react-router-dom';
import { UseGlobalContext } from '../../Data/DataProvider';
import Loading_Effect from './Loading_Effect';

const Myswiper = ({ MoviesData, Category, title }) => {
    const { Loading } = UseGlobalContext();
    return (
        <>
            <section className='Now_Playing px-md-5 px-3 py-md-4 py-3'>
                <h3 className='text-white text-start fs-22 fw-800 mb-4'>{title}</h3>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
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
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper ">
                    {
                        MoviesData.map((CurrMovies) => {
                            return (
                                <SwiperSlide key={CurrMovies.id}>
                                    <Link to={`${Category}/${CurrMovies.id}`}>
                                        {Loading == true ? <Loading_Effect Size="380px" /> : <Card data={CurrMovies} />}
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </>
    )
}

export default Myswiper
