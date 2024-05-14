import React from 'react'
import { UseGlobalContext } from '../../Data/DataProvider'
import Card from '../HomeContent/Card';
import Loading_Effect from '../HomeContent/Loading_Effect';
import { Link } from 'react-router-dom';
import "./Movies.css";
import Sidebar_Filter from './Sidebar_Filter';


const Movies = () => {
    const { MoviesList, handlemore, HandleLanguage, Loading, MoviesGenre } = UseGlobalContext();
    return (
        <>
            <section className='section pt-md-5 pt-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <Sidebar_Filter HandleLanguage={HandleLanguage} Geners={MoviesGenre} />
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                {
                                    MoviesList ? (
                                        MoviesList.map((CurrMovie) => {
                                            return (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3" key={CurrMovie.id}>
                                                    <Link to={`${CurrMovie.id}`}>
                                                        {Loading ? <Loading_Effect Size="380px"/> : <Card data={CurrMovie} />}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p className='text-center secondary-color'>No Movies Found ...!</p>
                                    )

                                }
                            </div>
                            {
                                MoviesList.length < 20 ? "" : (
                                    <div className="row justify-center items-center mt-md-5 mt-2">
                                        <div className="col-xl-3 col-md-4 col-sm-6 col-8">
                                            <a href='#' onClick={() => handlemore('movies')} className='btn px-4 d-block w-100 fw-semibold py-2 rounded-2 bg-secondary-1 text-white'>Load More</a>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies
