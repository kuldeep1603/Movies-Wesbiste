import React from 'react'
import { baseImageUrl } from '../../Data/DataProvider'
import { DefaultUser } from '../../Data/DataProvider'

const Movies_Reviews = ({ data }) => {
    if (!data || data.length === 0) {
        return <p className="secondary-color">No reviews found.</p>;
    }
    return (
        <>
            <div className="row">
                {
                    data.map((CurReviews) => {
                        return (
                            <div className='col-12' key={CurReviews.id}>
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-3 col-sm-2 mb-sm-0 mb-2">
                                            <img src={CurReviews.author_details.avatar_path ? `${baseImageUrl}${CurReviews.author_details.avatar_path}` : DefaultUser} className='img-fluid rounded-circle' alt={CurReviews.author_details.name} title={CurReviews.author_details.name} />
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-sm-10">
                                            <b>{CurReviews.author_details.name ? `${CurReviews.author_details.name}` : "No Name"}</b>
                                            <p className='fw-300 fs-16 mb-1 '>{CurReviews.updated_at ? CurReviews.updated_at.slice(0, 10) : CurReviews.updated_at}</p>
                                            <p className='fw-300 fs-16 mb-1 '>{CurReviews.content.length > 300 ? `${CurReviews.content.slice(0, 200)} ...` : CurReviews.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Movies_Reviews
