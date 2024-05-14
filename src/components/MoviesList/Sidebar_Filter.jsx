import React, { useId } from 'react'
import { UseGlobalContext } from '../../Data/DataProvider';

const Sidebar_Filter = ({ HandleLanguage, Geners }) => {
    const { SelectGenres, handleGenres } = UseGlobalContext();
    const { InputId } = useId();
    const items = [
        {
            value: "hi", id: "Hindi"
        },
        {
            value: "en", id: "English"
        },
        {
            value: "mr", id: "Marathi"
        },
        {
            value: "ta", id: "Tamil"
        },
        {
            value: "es", id: "Spanish"
        },
        {
            value: "fr", id: "French"
        },
        {
            value: "ru", id: "Russian"
        },
        {
            value: "ko", id: "Korean"
        },
    ]
    return (
        <>
            <div className="row mb-4">
                <h4 className='text-white fs-18 mb-3 fw-600'>Select Genres</h4>
                <div className="col-12">
                    <select className="form-select" value={SelectGenres} onChange={handleGenres} aria-label="Default select example">
                        {
                            Geners.map((e, i) => {
                                return (
                                    <option className='mb-2' value={e.id} key={i}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row mb-4">
                <h4 className='text-white fs-18 mb-3 fw-600'>Select Language</h4>
                <div className="col-12">
                    <ul className='m-0 p-0 d-flex gap-md-0 gap-3 flex-md-column flex-row  flex-wrap'>
                        {
                            items.map((e, i) => {
                                return (
                                    <li className='mb-1' key={i}>
                                        <div className="form-check">
                                            <input className="form-check-input" value={e.value} onChange={HandleLanguage} type="radio" name="language" id={`${InputId}-${e.id}`} />
                                            <label className="form-check-label" htmlFor={`${InputId}-${e.id}`}>{e.id}</label>
                                        </div>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar_Filter
