import React, { createContext, useContext, useEffect, useState } from 'react'
// toast 
import { toast } from 'react-toastify';

const Appcontext = createContext();
// Api key 
export const Api_key = `${process.env.REACT_APP_API_KEY}`;
// Api Base url 
export const BaseApi = `https://api.themoviedb.org/3/`;
// image base url
export const baseImageUrl = `https://image.tmdb.org/t/p/w500`
// default poster 
export const Defaultposter = `https://www.reelviews.net/resources/img/default_poster.jpg`;
// default cast 
export const DefeaultCast = `/images/No-img.png`;
// default user icons 
export const DefaultUser = `/images/reviews-img.png`
// default banner 
export const BannerBg = `/images/SingleBanner.png`;

const Api = `${BaseApi}/movie/now_playing?api_key=${Api_key}`;
const PopularApi = `${BaseApi}/movie/popular?api_key=${Api_key}&page=2`;
const Top_Rated_Api = `${BaseApi}/movie/top_rated?api_key=${Api_key}`;
const Upcoming_Api = `${BaseApi}/movie/upcoming?api_key=${Api_key}`

const AppProvider = ({ children }) => {
    // ===================== Movies , tv ===================== 
    const [Movies, SetMovies] = useState([]);
    const [PopularMovie, SetPopularMovie] = useState([]);
    const [TopRated, SetTopRated] = useState([]);
    const [Upcoming, SetUpcoming] = useState([]);

    const [Airing, SetAiring] = useState([]);
    const [OnAir, SetOnAir] = useState([]);
    const [PopularTv, SetPopularTv] = useState([]);
    const [TopRatedTv, SetTopRatedTv] = useState([]);
    // ===================== Movies , tv ===================== 


    // ===================== loading and error =====================
    const [Loading, SetLoading] = useState(true);
    const [IsError, SetIsError] = useState({
        Errordata: "",
        Errorstatus: true,
    });
    // ===================== loading and error =====================

    // ===================== list =====================
    const [MoviesList, SetMoviesList] = useState([]);
    const [TvList, SetTvList] = useState([]);
    const [Page, SetPage] = useState(1);
    const [AnimationMovies, SetAnimationMovies] = useState([]);
    const [AnimationGenerId, SetAnimationGenreId] = useState(null);
    // ===================== list =====================

    // ===================== serch query =====================
    const [SearchQuery, SetSearchQuery] = useState([]);
    const [Search, SetSearch] = useState("Hanuman");
    // ===================== serch query =====================

    // ===================== fav movies  ===================== 
    const [Fav, SetFav] = useState([]);
    const [Isclicked, SetIsClicked] = useState(false);
    // ===================== fav movies =====================

    // ===================== Geners =====================
    const [MoviesGenre, SetMoviesGenre] = useState([]);
    const [TvGenre, SetTvGenre] = useState([]);
    // ===================== Geners =====================

    // ======================= filter data =======================
    const [Language, SetLanguage] = useState('en');
    const [SelectGenres, SetSelectGeners] = useState('');
    // ======================= filter data =======================


    // ======================= fetch data  ======================= 
    const fetchData = async (url, setData) => {
        SetLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if (data.results.length > 0) {
                setData(data.results);
                SetLoading(false);
                SetIsError({
                    Errordata: "",
                    Errorstatus: false,
                });
            } else {
                SetLoading(true);
                SetIsError({
                    Errordata: "No Movies Found",
                    Errorstatus: true,
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            SetIsError({
                Errordata: "Error fetching data",
                Errorstatus: true,
            });
        }
    };
    const FetchGenersId = async (url, SetData) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            SetData(data.genres);
            SetTvGenre(data.genres);
            // console.log(data);
            const AnimationGenre = data.genres.find((gener) => gener.name === "Animation");
            if (AnimationGenre) {
                SetAnimationGenreId(AnimationGenre.id);
            }
        } catch (error) {
            SetIsError({
                Errordata: "NO Movies Found",
                Errorstatus: true,
            })
        }
    }
    // ======================= fetch data  ======================= 

    // ======================== handle data ========================
    const handlemore = (ContentType) => {
        SetPage(prevPage => prevPage + 1);
    }
    const handleSearch = (e) => {
        SetSearch(e.target.value);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        fetchData(`${BaseApi}search/movie?api_key=${Api_key}&query=${Search}&page=${Page}`, SetSearchQuery);
    }

    const handleFavMovies = (movie) => {
        SetFav([...Fav, movie]);
        SetIsClicked(true);
        // console.log(`Movie added to wishlist ${movie}`);
        toast.error("Movie Added to Favourite ...!");
    }
    // Remove from fav 
    const HandleRemoveFav = (itemId) => {
        SetFav(Fav.filter((item) => item.id !== itemId));
    };
    // Remove from fav 

    const handleGenres = (event) => {
        SetSelectGeners(event.target.value);
    }

    const HandleLanguage = (event) => {
        SetLanguage(event.target.value);
    }
    // ======================== handle data ========================


    // ======================== useEffect ==========================
    useEffect(() => {
        FetchGenersId(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}`, SetMoviesGenre);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            fetchData(Api, SetMovies);
            fetchData(PopularApi, SetPopularMovie);
            fetchData(Top_Rated_Api, SetTopRated);
            fetchData(Upcoming_Api, SetUpcoming);
            fetchData(`${BaseApi}tv/airing_today?api_key=${Api_key}`, SetAiring);
            fetchData(`${BaseApi}tv/on_the_air?api_key=${Api_key}`, SetOnAir);
            fetchData(`${BaseApi}tv/popular?api_key=${Api_key}`, SetPopularTv);
            fetchData(`${BaseApi}tv/top_rated?api_key=${Api_key}`, SetTopRatedTv);
            fetchData(`${BaseApi}search/movie?api_key=${Api_key}&query=${Search}&page=${Page}`, SetSearchQuery);
            fetchData(`${BaseApi}discover/movie?api_key=${Api_key}&with_genres=${SelectGenres}&page=${Page}&with_original_language=${Language}`, SetMoviesList);
            fetchData(`${BaseApi}discover/tv?api_key=${Api_key}&with_genres=${SelectGenres}&page=${Page}&with_original_language=${Language}`, SetTvList);
            if (AnimationGenerId) {
                fetchData(`${BaseApi}discover/movie?api_key=${Api_key}&page=${Page}&with_genres=${AnimationGenerId}&with_original_language=${Language}`, SetAnimationMovies);
            }
        }, 500);
    }, [Page, AnimationGenerId, Language, SelectGenres,]);



    // ======================== useEffect ==========================


    return (
        <>
            <Appcontext.Provider value={{ Movies, Loading, IsError, PopularMovie, TopRated, Upcoming, MoviesList, TvList, SetIsError, AnimationMovies, handlemore, handleFavMovies, Fav, HandleRemoveFav, HandleLanguage, SelectGenres, handleGenres, MoviesGenre, TvGenre, Airing, OnAir, PopularTv, TopRatedTv, handleSearch, SearchQuery, Search, handlesubmit, Isclicked }}>{children}</Appcontext.Provider>
        </>
    )
}


const UseGlobalContext = () => {
    return useContext(Appcontext);
}

export { Appcontext, AppProvider, UseGlobalContext }
