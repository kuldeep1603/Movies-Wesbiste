import React, { useState, useEffect } from 'react'
// useParams hooks 
import { useParams } from 'react-router-dom'
// Base Api 
import { BaseApi, UseGlobalContext } from '../../Data/DataProvider';
// Api key 
import { Api_key } from '../../Data/DataProvider';
import Banners from '../MoviesList/Banners';
import Sidebar from '../SingleContent/Sidebar';
import Movies_Cast from '../SingleContent/Movies_Cast';
import Movies_Images from '../SingleContent/Movies_Images';
import Movies_Reviews from '../SingleContent/Movies_Reviews';
import Movies_Similar from '../SingleContent/Movies_Similar';


const SingleAnimated = () => {
    const { id } = useParams();
    const { handleFavMovies } = UseGlobalContext();
    const [Deatils, SetDeatils] = useState([]);
    const [Loading, SetLoading] = useState(true);
    const [Error, setError] = useState({
        show: false,
        msg: ''
    })
    // Recommendations
    const [Recommendations, SetRecommendations] = useState([]);
    // Reviews
    const [Reviews, SetReviews] = useState([]);
    // Similar
    const [Similar, SetSimilar] = useState([]);
    // Videos
    const [Videos, SetVideos] = useState([]);
    // cast 
    const [Cast, SetCast] = useState([]);
    // Images
    const [Images, SetImages] = useState([]);
    // fav 
    const [Fav, SetFav] = useState([]);


    // ================= fetch data  ================= 
    const fetchData = async (url, SetData) => {
        SetLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            // console.log(data);
            if (data) {
                SetLoading(false);
                SetData(data);
            }
            else {
                setError({
                    show: true,
                    msg: "No Data Found ...!"
                });
            }
        } catch (error) {
            setError({
                show: true,
                msg: "Error Fetching Data ...!"
            });
        }
    }
    // ================= fetch data  ================= 

    // ================= Breadcrumb =================
    const items = [
        {
            title: "Home", link: `/`
        },
        {
            title: "Animated", link: `/Animated`
        },
        {
            title: `${Deatils.title}`, link: `/Animated/${id}`
        }
    ]
    // ================= Breadcrumb =================

    // =================  useEffect  ================= 
    useEffect(() => {
        fetchData(`${BaseApi}movie/${id}?api_key=${Api_key}`, SetDeatils);
        fetchData(`${BaseApi}movie/${id}/recommendations?api_key=${Api_key}`, data => SetRecommendations(data.results));
        fetchData(`${BaseApi}movie/${id}/reviews?api_key=${Api_key}`, data => SetReviews(data.results));
        fetchData(`${BaseApi}movie/${id}/similar?api_key=${Api_key}`, data => SetSimilar(data.results));
        fetchData(`${BaseApi}movie/${id}/videos?api_key=${Api_key}`, data => SetVideos(data.results[0]));
        fetchData(`${BaseApi}movie/${id}/credits?api_key=${Api_key}`, data => SetCast(data.cast));
        fetchData(`${BaseApi}movie/${id}/images?api_key=${Api_key}`, data => SetImages(data.backdrops));
    }, [id]);
    // =================  useEffect  ================= 
    return (
        <>
            {/* <p className='text-white'>Single Animated {id}</p> */}
            <Banners data={Deatils} Videos={Videos} Breadcrumb={items} handleFavMovies={handleFavMovies} />
            <section className='section '>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-9 col-12 mb-md-0 mb-5">
                            <div className="row">
                                <div className="col-12 cast">
                                    <h3 className='text-white text-start fs-22 fw-800 mb-4'>Movie Cast</h3>
                                    <Movies_Cast data={Cast} />
                                </div>
                                <div className="col-12 movie-images mt-5">
                                    <h3 className='text-white text-start fs-22 fw-800 mb-4 text-capitalize'>Movies Images</h3>
                                    <Movies_Images data={Images} />
                                </div>
                                <div className="col-12 reviews mt-5 pt-5">
                                    <h3 className='text-white text-start fs-22 fw-800 mb-4 text-capitalize'>Movies Reviews</h3>
                                    <Movies_Reviews data={Reviews} />
                                </div>
                                <div className="col-12 SimilarMovies mt-5">
                                    <h3 className='text-white text-start fs-22 fw-800 mb-4 text-capitalize'>recommendations Movies</h3>
                                    <Movies_Similar SimilarMovies={Recommendations} />
                                </div>
                                {/* <div className="col-12 SimilarMovies mt-5">
                                    <h3 className='text-white text-start fs-22 fw-800 mb-4'>Similar Movies</h3>
                                    <Movies_Similar SimilarMovies={Similar} />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <Sidebar data={Deatils} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleAnimated
