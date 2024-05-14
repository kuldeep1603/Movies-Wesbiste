import React from 'react'
import { UseGlobalContext } from '../../Data/DataProvider'
import { Link } from 'react-router-dom';
import Card from '../HomeContent/Card';
import Loading_Effect from '../HomeContent/Loading_Effect';
import Sidebar_Filter from '../MoviesList/Sidebar_Filter';

const Series = () => {
    const { TvList, handlemore, Loading, HandleLanguage, TvGenre } = UseGlobalContext();
    return (
        <>
            <section className='section pt-md-5 pt-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <Sidebar_Filter HandleLanguage={HandleLanguage} Geners={TvGenre} />
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <div className="row">
                                {
                                    TvList ? (
                                        TvList.map((CurrSeries) => {
                                            return (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-6" key={CurrSeries.id}>
                                                    <Link to={`${CurrSeries.id}`}>
                                                        {Loading ? <Loading_Effect Size="380px"/> : <Card data={CurrSeries} />}
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
                                TvList ? (
                                    TvList.length < 20 ? "" : (
                                        <div className="row justify-center items-center mt-5">
                                            <div className="col-xl-3 col-md-4 col-sm-6 col-8">
                                                <a href='#' onClick={() => handlemore('tv')} className='btn px-4 d-block w-100 fw-semibold py-2 rounded-2 bg-secondary-1 text-white'>Load More</a>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <p className='text-center secondary-color'>No Movies Found ...!</p>
                                )

                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Series
