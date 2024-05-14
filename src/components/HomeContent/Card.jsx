import React from 'react'
import { baseImageUrl } from '../../Data/DataProvider'
import "./Card.css"
import { Defaultposter } from '../../Data/DataProvider';

const Card = ({ data }) => {
    const { title, poster_path, original_title, name } = data;
    const isMovie = !!title;
    return (
        <>
            <div className="card mb-4">
                <img src={poster_path ? `${baseImageUrl}${poster_path}` : Defaultposter} className='img-fluid' alt={isMovie ? title : name} title={isMovie ? title : name} loading='lazy' />
                <div className="card-body">
                    <p className='text-start mb-0 text-white text-ellipsis fs-18'>{isMovie ? original_title : name}</p>
                </div>
            </div>
        </>
    )
}

export default Card
