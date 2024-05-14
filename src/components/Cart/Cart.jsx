import React from 'react'
import Movies_Breadcrumb from '../SingleContent/Movies_Breadcrumb'
import { UseGlobalContext } from '../../Data/DataProvider'
import { Link, useNavigate } from 'react-router-dom'
import Loading_Effect from '../HomeContent/Loading_Effect'
import Card from '../HomeContent/Card'
import { IoMdCloseCircle } from "react-icons/io";
import "./Cart.css";

const Cart = () => {
    const navigate = useNavigate();
    const { Fav, Loading, HandleRemoveFav } = UseGlobalContext();


    // ================= Breadcrumb =================
    const items = [
        {
            title: "Home", link: `/`
        },
        {
            title: "Favourite", link: `/favourite`
        },
    ]
    // ================= Breadcrumb =================
    return (
        <>
            <section className='section pt-md-5 pt-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Movies_Breadcrumb data={items} />
                        </div>
                        <div className="col-12 mt-4">
                            <div className="row">

                                {
                                    Fav.length > 0 ? (
                                        Fav.map((CurElem) => {
                                            return (
                                                <div className='col-md-3 col-sm-4 col-6 mb-4 cart-card' key={CurElem.id}>
                                                    <a href="#" onClick={() => HandleRemoveFav(CurElem.id)}><IoMdCloseCircle size={25} className='secondary-color cart-remove' /></a>
                                                    <a href="#" onClick={() => navigate(`/Movies/${CurElem.id}`)}>
                                                        {Loading ? <Loading_Effect /> : <Card data={CurElem} />}
                                                    </a>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p className='text-center text-white'>No Movies Added to Favourite</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
