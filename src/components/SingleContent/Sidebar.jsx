import React from 'react'

const Sidebar = ({ data }) => {
    return (
        <>
            <ul className='mt-lg-5 p-0 '>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>status</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>{data.status ? data.status : "No Update"}</h4>
                </li>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>Budget</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>{data.budget ? data.budget : "No Update"}</h4>
                </li>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>Revenue</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>{data.revenue ? data.revenue : "No Update"}</h4>
                </li>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>Popularity</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>{data.popularity ? data.popularity : "No Update"}</h4>
                </li>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>runtime</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>{data.runtime ? data.runtime : "No Update"}</h4>
                </li>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>Countries</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>
                        {data.production_countries ? (
                            data.production_countries.map((e, i) => e.name).join(', ')
                        ) : (
                            'Production country information not available'
                        )}
                    </h4>
                </li>
                <li className='mb-3'>
                    <b className='fs-16  text-capitalize fw-500'>companies</b>
                    <h4 className='text-white fs-18 fw-400 text-ellipsis'>
                        {
                            data.production_companies ? (
                                data.production_companies.map((e, i) => e.name).join(', ')
                            ) : (
                                "Company Information Not Available"
                            )
                        }
                    </h4>
                </li>
            </ul>
        </>
    )
}

export default Sidebar
