import React from 'react'
import { Link } from 'react-router-dom'
import { UseGlobalContext } from '../../Data/DataProvider'

const Footer = () => {
    const { id } = UseGlobalContext();
    return (
        <>
            <section className='section mt-lg-5 mt-0 px-md-5 px-3 py-md-5 py-2' style={{ backgroundColor: "#090909", borderRadius: "20px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-12 mb-lg-0 mb-4">
                            <h5 className='text-white'>About</h5>
                            <Link to={"/"} className='mt-2'>
                                <span className="self-center text-2xl font-semibold whitespace-nowrap secondary-color">FlimyVerse</span>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-lg-0 mb-4">
                            <ul className='m-0 p-0'>
                                <li className='mb-3'>
                                    <h5 className='text-white '>Links</h5>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>Home</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/Movies"}>Movies</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/Series"}>Series</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/Animated"}>Animated</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/Cart"}>Favourite</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-lg-0 mb-4">
                            <ul className='m-0 p-0'>
                                <li className='mb-3'>
                                    <h5 className='text-white '>Movies</h5>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={`/`}>Popular</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>Top Rated</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>Upcoming</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>Now Playing</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-lg-0 mb-4">
                            <ul className='m-0 p-0'>
                                <li className='mb-3'>
                                    <h5 className='text-white '>Series</h5>
                                </li>

                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>On the Air</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}></Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>Popular</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className='text-white fs-16 text-capitalize' to={"/"}>Top Rated</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            <ul className='m-0 p-0'>
                                <li className='mb-3'>
                                    <h5 className='secondary-color fs-20'>Subscribe</h5>
                                </li>
                                <li>
                                    <form action="#">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Email Address" aria-label="Subscribe" aria-describedby="button-addon2" />
                                            <button className="btn bg-secondary-1 text-white" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-3'>
                <div className="container">
                    <div className="row justify-center align-items-center">
                        <div className="col-8">
                            <p className='text-white text-center mb-0 text-capitalize'>Flimyverse Copyright @2024</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
