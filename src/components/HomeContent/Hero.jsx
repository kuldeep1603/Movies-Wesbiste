import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "./Hero.css";
import { Link } from 'react-router-dom';
import { UseGlobalContext } from '../../Data/DataProvider';
import { FaPlayCircle } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { baseImageUrl } from '../../Data/DataProvider';
import { BannerBg } from '../../Data/DataProvider';

const Hero = () => {
    const { Movies } = UseGlobalContext();
    return (
        <>
            <section className="px-md-5 px-3 py-md-4 py-3 hero main-banner">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    {Movies.map((CurSlider) => {
                        const { id, backdrop_path, original_title, overview, release_date } = CurSlider;
                        return (
                            <SwiperSlide key={id} className='bg-img' style={{ backgroundImage: `url(${backdrop_path ? baseImageUrl + backdrop_path : BannerBg})` }}>
                                <div className="overlay">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="offset-lg-1 col-lg-10 text">
                                                <div className="d-flex gap-3">
                                                    <Link to={`/Movies/${id}`} className='px-lg-3 py-lg-3 px-2 py-3 rounded-1 fs-15 text-white bg-secondary-1 d-flex gap-2 align-items-center fw-600 justify-center'>Watch Now <FaPlayCircle size={22} /></Link>
                                                    <Link to={`/Movies/${id}`} className='px-lg-3 py-lg-3 px-2 py-3 rounded-1 fs-15 text-white  d-flex gap-2 align-items-center fw-600 justify-center Watch-Later'>Watch Later <MdWatchLater size={22} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="offset-lg-1 col-lg-7">
                                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                                    <h4 className='text-white fw-800 fs-26 text-start m-0'>{original_title}</h4>
                                                    <p className='text-white fs-18 fw-700 m-0 d-flex gap-1 align-items-center'><MdDateRange size={20} /> {release_date}</p>
                                                </div>
                                                <p className='text-white text-start mt-3'>
                                                    {overview.length >= 100 ? overview.slice(0, 200) + "..." : overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </section>
        </>
    )
}

export default Hero;
