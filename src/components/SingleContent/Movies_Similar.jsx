import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Card from '../HomeContent/Card';
import { useNavigate } from 'react-router-dom';
import { UseGlobalContext } from '../../Data/DataProvider';
import Loading_Effect from '../HomeContent/Loading_Effect';

const Movies_Similar = ({ SimilarMovies, Loading }) => {
    // const { Loading } = UseGlobalContext();
    const navigate = useNavigate();
    if (!SimilarMovies || SimilarMovies.length === 0) {
        return <p className='secondary-color text-capitalize'>No recommendations</p>
    }
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 1000,
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
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper ">
                {
                    SimilarMovies.map((CurSimilarMovies) => {
                        return (
                            <SwiperSlide key={CurSimilarMovies.id}>
                                <a href="#" onClick={() => navigate(`/Movies/${CurSimilarMovies.id}`)}>
                                    {Loading == true ? <Loading_Effect Size="380px" /> : <Card data={CurSimilarMovies} />}
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Movies_Similar;
