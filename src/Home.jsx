import React from 'react'
import Hero from './components/HomeContent/Hero'
import Myswiper from './components/HomeContent/Myswiper'
import { UseGlobalContext } from './Data/DataProvider'

const Home = () => {
    const { Movies, PopularMovie, TopRated, Upcoming, Airing, OnAir, PopularTv, TopRatedTv, id } = UseGlobalContext();
    return (
        <>
            {/* Hero  */}
            <Hero />
            {/* Hero  */}
            {/* <NowPlaying /> */}
            <Myswiper MoviesData={Movies} Category="Movies" title="Now Playing" id={id} />
            <Myswiper MoviesData={PopularMovie} Category="Movies" title="Popular Movies" />
            <Myswiper MoviesData={TopRated} Category="Movies" title="Top Rated Movies" />
            <Myswiper MoviesData={Upcoming} Category="Movies" title="Upcoming Movies" />
            <Myswiper MoviesData={Airing} Category="Series" title="Airing Today" />
            <Myswiper MoviesData={OnAir} Category="Series" title="On The Air" />
            <Myswiper MoviesData={PopularTv} Category="Series" title="Popular Series" />
            <Myswiper MoviesData={TopRatedTv} Category="Series" title="Top Rated Series" />
        </>
    )
}

export default Home
