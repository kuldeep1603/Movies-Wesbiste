import React, { useId } from 'react'
import { UseGlobalContext } from '../../Data/DataProvider'
import { Link } from 'react-router-dom';
import Card from '../HomeContent/Card';
import Loading_Effect from '../HomeContent/Loading_Effect';
import "./Animated.css"
import Sidebar_Filter from '../MoviesList/Sidebar_Filter';

const Animated = () => {
    const { AnimationMovies, handlemore, Loading, HandleLanguage, MoviesGenre } = UseGlobalContext();

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
                                    AnimationMovies ? (
                                        AnimationMovies.map((CurAnimationMovies) => {
                                            return (
                                                <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3" key={CurAnimationMovies.id}>
                                                    <Link to={`${CurAnimationMovies.id}`}>
                                                        {Loading ? <Loading_Effect Size="380px"/> : <Card data={CurAnimationMovies} />}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p className='secondary-color text-center'>No Movies Found ..!</p>
                                    )

                                }
                            </div>
                            <div className="row justify-center items-center mt-4">
                                <div className="col-xl-3 col-md-4 col-sm-6 col-8">
                                    <a href="#" className='btn px-4 d-block w-100 fw-semibold py-2 rounded-2 bg-secondary-1 text-white' onClick={() => handlemore('animation')}>Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Animated
