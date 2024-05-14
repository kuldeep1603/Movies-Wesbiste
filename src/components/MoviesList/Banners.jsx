import React from 'react';
import { UseGlobalContext, baseImageUrl } from '../../Data/DataProvider';
import "./Banners.css";
import { MdDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa";
import Modal_Video from '../SingleContent/Modal_Video';
import { useState } from 'react';
import Movies_Breadcrumb from '../SingleContent/Movies_Breadcrumb';
import { Defaultposter } from '../../Data/DataProvider';
import { BannerBg } from '../../Data/DataProvider';
// ToastContainer
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ToastContainer


const Banners = ({ data, Videos, Breadcrumb, handleFavMovies }) => {
    const { Isclicked } = UseGlobalContext();
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className='section py-md-5 py-2 single-banner bg-img' style={{ backgroundImage: `url(${data.backdrop_path ? baseImageUrl + data.backdrop_path : BannerBg})` }}>
            <div className="container ">
                <div className="row justify-content-md-end">
                    <div className="col-12">
                        <Movies_Breadcrumb data={Breadcrumb} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-center align-items-center">
                            <div className="col-xl-3 col-md-5 mb-md-0 mb-4">
                                <img src={data.poster_path ? `${baseImageUrl}${data.poster_path}` : Defaultposter} className='img-fluid rounded-2' loading='lazy' alt={data.original_title} title={data.original_title} />
                            </div>
                            <div className="col-xl-9 col-md-7">
                                <ul className='d-flex p-0 flex-wrap justify-content-between align-items-center'>
                                    <li>
                                        <h2 className='title fs-26 text-white text-capitalize fw-bold '>{data.original_title ? data.original_title : data.original_name}</h2>
                                    </li>
                                    <li className='d-flex gap-2 align-items-center flex-wrap'>
                                        <a href="#" onClick={() => handleFavMovies(data)} className={`btn d-flex gap-2 align-items-center px-lg-3 py-lg-3 px-2 py-2 rounded-circle fw-semibold rounded-1 border border-l-white text-white ${Isclicked ? "bg-secondary-1 border-0" : ""}`}> <FaHeart size={20} /></a>
                                        <ToastContainer />
                                        <a href="#" onClick={handleOpenModal} className='btn d-flex gap-2 align-items-center px-lg-3 py-lg-3 px-2 py-2 rounded-circle fw-semibold  rounded-1 bg-secondary-1 text-white'><FaBullseye size={20} /> </a>
                                        <Modal_Video show={showModal} handleClose={handleCloseModal} Videos={Videos} />
                                    </li>
                                </ul>
                                <ul className='d-flex p-0 m-0 mt-4 mb-2 gap-lg-2 gap-3 align-items-center flex-wrap'>
                                    <li>
                                        <ul className='d-flex p-0 m-0 gap-md-2 gap-3 align-items-center flex-wrap'>
                                            {
                                                data.genres ? (
                                                    data.genres.map((genre) => (
                                                        <li key={genre.id}>
                                                            <span className='px-3 py-2 rounded-2 bg-white primary-color fw-medium'>{genre.name}</span>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <p className='secondary-color text-capitalize'>No Gneres Found ...!</p>
                                                )
                                            }
                                        </ul>
                                    </li>
                                    <li className='d-flex gap-2 align-items-center flex-wrap'>
                                        <MdDateRange size={20} />
                                        <span> {data.release_date ? data.release_date : data.first_air_date}</span>
                                    </li>
                                    <li className='d-flex gap-2 align-items-center flex-wrap'>
                                        <FiClock size={20} />
                                        <span> {data.runtime ? data.runtime : data.episode_run_time}</span>
                                    </li>
                                </ul>
                                <p className='overview text-white fs-18 fw-500 mt-lg-5 mt-3'>{data.overview ? data.overview : "No Overview Data ...!"}</p>
                                <ul className='p-0 mt-3 m-0 d-lg-block d-none'>
                                    <li className='d-flex gap-4 mb-2'>
                                        <span className='fw-medium text-capitalize fs-18'>Country : </span>
                                        <span className='text-white'>
                                            {
                                                data.production_countries ? (
                                                    data.production_countries.map((country, index) => (
                                                        <span key={index} className='text-white'>{country.name}</span>
                                                    ))
                                                ) : (
                                                    <p className='secondary-color text-capitalize'>No Update</p>
                                                )
                                            }
                                        </span>
                                    </li>
                                    <li className='d-flex gap-4 mb-2'>
                                        <span className='fw-medium text-capitalize fs-18'>Release Date : </span>
                                        <span className='text-white'>{data.release_date ? data.release_date : data.first_air_date}</span>
                                    </li>
                                    <li className='d-flex gap-4 align-items-center mb-2'>
                                        <span className='fw-medium text-capitalize fs-18'>Genre : </span>
                                        <p className='mb-0'>
                                            {
                                                data.genres ? (
                                                    data.genres.map((genre, index) => (
                                                        <span key={index} className=''>{genre.name}</span>
                                                    ))
                                                ) : (
                                                    <p className='secondary-color text-capitalize'>No genres Found ...!</p>
                                                )
                                            }</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banners;
