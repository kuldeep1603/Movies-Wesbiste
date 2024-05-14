import React from 'react'
import { UseGlobalContext } from '../../Data/DataProvider'
import "./Search.css";
import Loading_Effect from '../HomeContent/Loading_Effect';
import Card from '../HomeContent/Card';
import { Link } from 'react-router-dom';

const Search = () => {
    const { handleSearch, SearchQuery, Search, Loading, handlemore, handlesubmit } = UseGlobalContext();

    return (
        <>
            <section className='section pt-md-5 pt-2 search'>
                <div className="container">
                    <div className="row justify-center align-items-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <form action="#" autoComplete='off' onSubmit={handlesubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control text-center" value={Search} onChange={handleSearch} placeholder="Search Movies ...!" aria-label="Search here ...!" aria-describedby="button-addon2" />
                                    <button className="btn bg-secondary-1 text-white" type="submit" id="button-addon2">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            SearchQuery ? (
                                SearchQuery.map((CurElem) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-lg-0 mb-3" key={CurElem.id}>
                                            <Link to={`/Movies/${CurElem.id}`}>
                                                {
                                                    Loading === true ? <Loading_Effect Size="380px" /> : <Card data={CurElem} />
                                                }
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
                            {
                                SearchQuery.length < 20 ? "" : (
                                    <a href='#' onClick={() => handlemore('movies')} className='btn px-4 d-block w-100 fw-semibold py-2 rounded-2 bg-secondary-1 text-white'>Load More</a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Search
